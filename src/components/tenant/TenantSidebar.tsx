import { LayoutDashboard, ClipboardList, Package, BarChart3, UserCircle, LogOut, Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/tenant" },
  { icon: ClipboardList, label: "Pesanan", path: "/tenant/orders" },
  { icon: Package, label: "Produk", path: "/tenant/products" },
  { icon: BarChart3, label: "Laporan", path: "/tenant/reports" },
  { icon: UserCircle, label: "Profil Toko", path: "/tenant/profile" },
];

export function TenantSidebar() {
  const location = useLocation();

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card">
      <div className="flex h-16 items-center border-b px-6">
        <Link to="/tenant" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-extrabold text-sm">T</span>
          </div>
          <span className="font-extrabold text-xl text-foreground tracking-tight">Tenant Panel</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t p-4 space-y-1">
        <Link
          to="/admin"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <Shield className="h-5 w-5" />
          Ke Admin Panel
        </Link>
        <Link
          to="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Keluar ke User App
        </Link>
      </div>
    </div>
  );
}
