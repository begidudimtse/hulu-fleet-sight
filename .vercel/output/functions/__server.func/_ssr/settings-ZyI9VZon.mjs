import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BcWOBWpp.mjs";
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
import "../_libs/lucide-react.mjs";
function SettingsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: "System Settings", subtitle: "Manage workspace, integrations and notification preferences", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Workspace", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Organization", value: "HuluCart Ethiopia" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Region", value: "Addis Ababa, ET" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Plan", value: "Enterprise Fleet" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "GPS & Integrations", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "GPS Provider", value: "Teltonika · OsmAnd Gateway" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Realtime channel", value: "Socket.IO · /fleet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Map provider", value: "OpenStreetMap" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Notification Channels", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Email alerts", value: "enabled" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "SMS (Ethio Telecom)", value: "enabled" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Push notifications", value: "enabled" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Security", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Auth", value: "JWT · 7d refresh" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "2FA", value: "required for admins" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Audit log retention", value: "365 days" })
    ] })
  ] }) });
}
function Card({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-5 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "divide-y divide-border", children })
  ] });
}
function Row({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-semibold", children: value })
  ] });
}
export {
  SettingsPage as component
};
