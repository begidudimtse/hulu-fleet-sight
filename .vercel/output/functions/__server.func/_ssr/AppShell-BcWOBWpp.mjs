import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useLocation, L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { C as Cog, L as LayoutDashboard, M as MapPin, H as Hexagon, h as Truck, B as Bell, k as History, l as Settings, X, m as Menu, S as Search, n as LogOut } from "../_libs/lucide-react.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/tracking", label: "Live Tracking", icon: MapPin },
  { to: "/geofences", label: "Geofences", icon: Hexagon },
  { to: "/equipment", label: "Equipment", icon: Truck },
  { to: "/alerts", label: "Alerts", icon: Bell },
  { to: "/history", label: "Tracking History", icon: History },
  { to: "/settings", label: "Settings", icon: Settings }
];
function AppShell({ children, title, subtitle }) {
  const location = useLocation();
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "aside",
      {
        className: cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-transform lg:static lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-16 items-center gap-2 border-b border-sidebar-border px-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cog, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold tracking-wide", children: "HuluCart" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-sidebar-foreground/60", children: "Fleet Ops" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-1 p-3", children: nav.map(({ to, label, icon: Icon }) => {
            const active = location.pathname === to || to !== "/" && location.pathname.startsWith(to);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to,
                onClick: () => setOpen(false),
                className: cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  active ? "bg-primary text-primary-foreground shadow-sm" : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
                  label
                ]
              },
              to
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-3 bottom-3 rounded-lg border border-sidebar-border bg-sidebar-accent/40 p-3 text-xs text-sidebar-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "status-dot text-success" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sidebar-foreground", children: "System Online" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "GPS Gateway · 8/8 nodes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Last sync: just now" })
          ] })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        "aria-label": "Close menu",
        onClick: () => setOpen(false),
        className: "fixed inset-0 z-30 bg-black/40 lg:hidden"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setOpen((v) => !v),
            className: "rounded-md p-2 text-foreground hover:bg-muted lg:hidden",
            children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "truncate text-base font-semibold text-foreground lg:text-lg", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-xs text-muted-foreground", children: subtitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden md:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              placeholder: "Search equipment, sites, alerts…",
              className: "h-9 w-72 rounded-md border border-input bg-card pl-8 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "relative rounded-md border border-border bg-card p-2 hover:bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground", children: "AT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden text-left text-xs leading-tight md:block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Amanuel T." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Fleet Admin" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "ml-1 rounded p-1 text-muted-foreground hover:text-foreground", title: "Logout", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 p-4 lg:p-8", children })
    ] })
  ] });
}
export {
  AppShell as A,
  cn as c
};
