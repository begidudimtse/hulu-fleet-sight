import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BcWOBWpp.mjs";
import { a as geofences } from "./mock-data-DKvKUEDy.mjs";
import { c as Circle, d as SquarePen, T as Trash2, P as Plus, M as MapPin } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function GeofencesPage() {
  const [radius, setRadius] = reactExports.useState(600);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Geofence Management", subtitle: "Define site boundaries and trigger location-based alerts", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[1fr_380px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-5 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "Configured Geofences" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            geofences.length,
            " zones"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: geofences.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4 p-5 hover:bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: g.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase " + (g.active ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"), children: g.active ? "Active" : "Disabled" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              g.site,
              " · ",
              g.id
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 grid grid-cols-3 gap-4 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Radius:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                  g.radius,
                  " m"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Equipment:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: g.assigned })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-muted-foreground", children: [
                g.lat.toFixed(4),
                ", ",
                g.lng.toFixed(4)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded p-2 text-muted-foreground hover:bg-muted hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
          ] })
        ] }, g.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "rounded-xl border border-border bg-card p-5 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "Create Geofence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs text-muted-foreground", children: "Draw a circular boundary or define by coordinates." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Zone name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", placeholder: "e.g. Bole Tower Site" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Assigned site", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Bole Tower Project" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Megenagna Road Works" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Kality Logistics Hub" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Akaki Quarry" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Latitude", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", placeholder: "9.0108" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Longitude", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", placeholder: "38.7613" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: `Radius: ${radius} m`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 100, max: 2e3, step: 50, value: radius, onChange: (e) => setRadius(Number(e.target.value)), className: "w-full accent-[var(--color-primary)]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Shape", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "flex-1 rounded-md border border-primary bg-primary/10 px-3 py-2 text-xs font-semibold text-primary", children: "Circle" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "flex-1 rounded-md border border-border px-3 py-2 text-xs font-semibold text-muted-foreground hover:bg-muted", children: "Polygon" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            " Create Geofence"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-lg border border-dashed border-border bg-muted/30 p-3 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mb-1 h-4 w-4 text-primary" }),
          "Tip: use the Live Tracking map to drop a pin and convert it into a zone."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .input { width:100%; height:38px; border:1px solid var(--color-input); background:var(--color-background); border-radius:6px; padding:0 10px; font-size:13px; outline:none; }
        .input:focus { box-shadow: 0 0 0 2px var(--color-ring); }
      ` })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1 block text-xs font-semibold text-muted-foreground", children: label }),
    children
  ] });
}
export {
  GeofencesPage as component
};
