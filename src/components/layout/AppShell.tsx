import { Link, useLocation } from "@tanstack/react-router";
import {
  LayoutDashboard,
  MapPin,
  Hexagon,
  Bell,
  Truck,
  History,
  Settings,
  Search,
  LogOut,
  Menu,
  X,
  Cog,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/tracking", label: "Live Tracking", icon: MapPin },
  { to: "/geofences", label: "Geofences", icon: Hexagon },
  { to: "/equipment", label: "Equipment", icon: Truck },
  { to: "/alerts", label: "Alerts", icon: Bell },
  { to: "/history", label: "Tracking History", icon: History },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

export function AppShell({ children, title, subtitle }: { children: ReactNode; title: string; subtitle?: string }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-transform lg:static lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Cog className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-wide">HuluCart</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-sidebar-foreground/60">Fleet Ops</div>
          </div>
        </div>
        <nav className="flex flex-col gap-1 p-3">
          {nav.map(({ to, label, icon: Icon }) => {
            const active = location.pathname === to || (to !== "/" && location.pathname.startsWith(to));
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute inset-x-3 bottom-3 rounded-lg border border-sidebar-border bg-sidebar-accent/40 p-3 text-xs text-sidebar-foreground/80">
          <div className="mb-1 flex items-center gap-2">
            <span className="status-dot text-success" />
            <span className="font-semibold text-sidebar-foreground">System Online</span>
          </div>
          <div>GPS Gateway · 8/8 nodes</div>
          <div>Last sync: just now</div>
        </div>
      </aside>

      {/* Backdrop */}
      {open && (
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur lg:px-8">
          <button
            onClick={() => setOpen(v => !v)}
            className="rounded-md p-2 text-foreground hover:bg-muted lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-base font-semibold text-foreground lg:text-lg">{title}</h1>
            {subtitle && <p className="truncate text-xs text-muted-foreground">{subtitle}</p>}
          </div>
          <div className="relative hidden md:block">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search equipment, sites, alerts…"
              className="h-9 w-72 rounded-md border border-input bg-card pl-8 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button className="relative rounded-md border border-border bg-card p-2 hover:bg-muted">
            <Bell className="h-4 w-4" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive" />
          </button>
          <div className="flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              AT
            </div>
            <div className="hidden text-left text-xs leading-tight md:block">
              <div className="font-semibold">Amanuel T.</div>
              <div className="text-muted-foreground">Fleet Admin</div>
            </div>
            <Link to="/login" className="ml-1 rounded p-1 text-muted-foreground hover:text-foreground" title="Logout">
              <LogOut className="h-4 w-4" />
            </Link>
          </div>
        </header>
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
