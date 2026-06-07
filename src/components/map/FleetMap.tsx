import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from "react-leaflet";
import L from "leaflet";
import { equipment as initialEquipment, geofences, HQ, type Equipment } from "@/lib/mock-data";

const iconFor = (status: Equipment["status"]) =>
  L.divIcon({
    className: "",
    html: `<div class="equipment-marker ${status === "alert" ? "alert" : status === "offline" ? "offline" : ""}"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });

function ResizeFix() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => map.invalidateSize(), 100);
  }, [map]);
  return null;
}

export function FleetMap({ height = "560px", showGeofences = true }: { height?: string; showGeofences?: boolean }) {
  const [fleet, setFleet] = useState(initialEquipment);
  const tick = useRef(0);

  // Simulate realtime movement
  useEffect(() => {
    const id = setInterval(() => {
      tick.current += 1;
      setFleet(prev =>
        prev.map(e => {
          if (e.status === "offline") return e;
          const jitter = 0.0006;
          return {
            ...e,
            lat: e.lat + (Math.random() - 0.5) * jitter,
            lng: e.lng + (Math.random() - 0.5) * jitter,
            speed: e.status === "idle" ? 0 : Math.max(0, Math.round(e.speed + (Math.random() - 0.5) * 3)),
          };
        })
      );
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const fences = useMemo(() => geofences.filter(g => g.active), []);

  return (
    <div className="overflow-hidden rounded-xl border border-border shadow-sm" style={{ height }}>
      <MapContainer center={[HQ.lat, HQ.lng]} zoom={13} className="h-full w-full">
        <ResizeFix />
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showGeofences &&
          fences.map(g => (
            <Circle
              key={g.id}
              center={[g.lat, g.lng]}
              radius={g.radius}
              pathOptions={{ color: "#F59E0B", fillColor: "#F59E0B", fillOpacity: 0.08, weight: 2, dashArray: "6 6" }}
            />
          ))}
        {fleet.map(e => (
          <Marker key={e.id} position={[e.lat, e.lng]} icon={iconFor(e.status)}>
            <Popup>
              <div className="space-y-1 text-xs">
                <div className="text-sm font-bold">{e.name}</div>
                <div className="text-neutral-500">{e.id} · {e.type}</div>
                <div>Status: <strong className="capitalize">{e.status}</strong></div>
                <div>Speed: {e.speed} km/h</div>
                <div>Operator: {e.operator}</div>
                <div>Site: {e.site}</div>
                <div className="text-neutral-500">
                  {e.lat.toFixed(5)}, {e.lng.toFixed(5)}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
