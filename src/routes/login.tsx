import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Cog, ShieldCheck, MapPin, Activity } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in · HuluCart Fleet" }] }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@hulucart.et");
  const [pw, setPw] = useState("demo1234");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/" });
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden flex-col justify-between bg-sidebar p-10 text-sidebar-foreground lg:flex">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Cog className="h-6 w-6" />
          </div>
          <div>
            <div className="font-bold tracking-wide">HuluCart</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-sidebar-foreground/60">Fleet Operations</div>
          </div>
        </div>

        <div>
          <h1 className="max-w-md text-4xl font-bold leading-tight">
            Smart GPS tracking & geofencing for Ethiopia's heavy equipment fleet.
          </h1>
          <p className="mt-4 max-w-md text-sidebar-foreground/70">
            Monitor excavators, cranes, bulldozers, loaders and forklifts in realtime. Define site boundaries, trigger
            alerts, and keep every rental accountable.
          </p>
          <div className="mt-8 grid max-w-md grid-cols-3 gap-4 text-xs">
            <Mini icon={MapPin} label="Live GPS" />
            <Mini icon={ShieldCheck} label="Geofencing" />
            <Mini icon={Activity} label="Realtime alerts" />
          </div>
        </div>

        <div className="text-xs text-sidebar-foreground/60">© 2026 HuluCart Ethiopia · Fleet Ops v1.0</div>
        <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      </div>

      {/* Form */}
      <div className="flex items-center justify-center bg-background px-6 py-12">
        <form onSubmit={submit} className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Cog className="h-5 w-5" />
              </div>
              <div className="font-bold">HuluCart Fleet Ops</div>
            </div>
          </div>
          <h2 className="text-2xl font-bold">Sign in to your workspace</h2>
          <p className="mt-1 text-sm text-muted-foreground">Use your fleet operator credentials.</p>

          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-1 block text-xs font-semibold text-muted-foreground">Email</span>
              <input
                value={email} onChange={e => setEmail(e.target.value)}
                className="h-11 w-full rounded-md border border-input bg-card px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold text-muted-foreground">Password</span>
              <input
                type="password" value={pw} onChange={e => setPw(e.target.value)}
                className="h-11 w-full rounded-md border border-input bg-card px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <div className="flex items-center justify-between text-xs">
              <label className="inline-flex items-center gap-2"><input type="checkbox" defaultChecked /> Remember device</label>
              <a className="font-semibold text-primary hover:underline">Forgot password?</a>
            </div>
            <button className="h-11 w-full rounded-md bg-primary font-semibold text-primary-foreground hover:opacity-90">
              Sign in
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Demo credentials prefilled · JWT secured session
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

function Mini({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="rounded-lg border border-sidebar-border bg-sidebar-accent/40 p-3">
      <Icon className="mb-2 h-4 w-4 text-primary" />
      <div className="font-semibold text-sidebar-foreground">{label}</div>
    </div>
  );
}
