import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings · HuluCart Fleet" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <AppShell title="System Settings" subtitle="Manage workspace, integrations and notification preferences">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Workspace">
          <Row label="Organization" value="HuluCart Ethiopia" />
          <Row label="Region" value="Addis Ababa, ET" />
          <Row label="Plan" value="Enterprise Fleet" />
        </Card>
        <Card title="GPS & Integrations">
          <Row label="GPS Provider" value="Teltonika · OsmAnd Gateway" />
          <Row label="Realtime channel" value="Socket.IO · /fleet" />
          <Row label="Map provider" value="OpenStreetMap" />
        </Card>
        <Card title="Notification Channels">
          <Row label="Email alerts" value="enabled" />
          <Row label="SMS (Ethio Telecom)" value="enabled" />
          <Row label="Push notifications" value="enabled" />
        </Card>
        <Card title="Security">
          <Row label="Auth" value="JWT · 7d refresh" />
          <Row label="2FA" value="required for admins" />
          <Row label="Audit log retention" value="365 days" />
        </Card>
      </div>
    </AppShell>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{title}</h2>
      <dl className="divide-y divide-border">{children}</dl>
    </section>
  );
}
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3 text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-semibold">{value}</dd>
    </div>
  );
}
