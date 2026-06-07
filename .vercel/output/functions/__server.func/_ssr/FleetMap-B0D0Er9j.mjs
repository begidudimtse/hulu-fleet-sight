import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L } from "../_libs/leaflet.mjs";
import { e as equipment, a as geofences, H as HQ } from "./mock-data-DKvKUEDy.mjs";
import { M as MapContainer, T as TileLayer, C as Circle, a as Marker, P as Popup, u as useMap } from "../_libs/react-leaflet.mjs";
import "../_libs/react-leaflet__core.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const iconFor = (status) => L.divIcon({
  className: "",
  html: `<div class="equipment-marker ${status === "alert" ? "alert" : status === "offline" ? "offline" : ""}"></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9]
});
function ResizeFix() {
  const map = useMap();
  reactExports.useEffect(() => {
    setTimeout(() => map.invalidateSize(), 100);
  }, [map]);
  return null;
}
function FleetMap({ height = "560px", showGeofences = true }) {
  const [fleet, setFleet] = reactExports.useState(equipment);
  const tick = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      tick.current += 1;
      setFleet(
        (prev) => prev.map((e) => {
          if (e.status === "offline") return e;
          const jitter = 6e-4;
          return {
            ...e,
            lat: e.lat + (Math.random() - 0.5) * jitter,
            lng: e.lng + (Math.random() - 0.5) * jitter,
            speed: e.status === "idle" ? 0 : Math.max(0, Math.round(e.speed + (Math.random() - 0.5) * 3))
          };
        })
      );
    }, 2e3);
    return () => clearInterval(id);
  }, []);
  const fences = reactExports.useMemo(() => geofences.filter((g) => g.active), []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl border border-border shadow-sm", style: { height }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MapContainer, { center: [HQ.lat, HQ.lng], zoom: 13, className: "h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ResizeFix, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TileLayer,
      {
        attribution: "© OpenStreetMap",
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      }
    ),
    showGeofences && fences.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Circle,
      {
        center: [g.lat, g.lng],
        radius: g.radius,
        pathOptions: { color: "#F59E0B", fillColor: "#F59E0B", fillOpacity: 0.08, weight: 2, dashArray: "6 6" }
      },
      g.id
    )),
    fleet.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(Marker, { position: [e.lat, e.lng], icon: iconFor(e.status), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Popup, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold", children: e.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-neutral-500", children: [
        e.id,
        " · ",
        e.type
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "Status: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "capitalize", children: e.status })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "Speed: ",
        e.speed,
        " km/h"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "Operator: ",
        e.operator
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "Site: ",
        e.site
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-neutral-500", children: [
        e.lat.toFixed(5),
        ", ",
        e.lng.toFixed(5)
      ] })
    ] }) }) }, e.id))
  ] }) });
}
export {
  FleetMap
};
