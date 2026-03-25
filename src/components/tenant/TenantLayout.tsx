import { ReactNode } from "react";
import { TenantSidebar } from "./TenantSidebar";
import { Bell, Search, Store } from "lucide-react";

interface TenantLayoutProps {
  children: ReactNode;
}

export function TenantLayout({ children }: TenantLayoutProps) {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <TenantSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b bg-card px-8">
          <div className="flex flex-1 max-w-md items-center relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari produk atau pesanan..."
              className="w-full rounded-full bg-muted pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-muted transition-colors active:scale-95">
              <Bell className="h-5 w-5 text-foreground" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive border-2 border-card" />
            </button>
            <div className="flex items-center gap-3 border-l pl-4">
              <div className="text-right">
                <p className="text-sm font-bold">Warung Barokah</p>
                <p className="text-[10px] text-muted-foreground">K-Food Partner</p>
              </div>
              <button className="h-10 w-10 rounded-full border-2 border-accent p-0.5 hover:bg-accent/10 transition-colors overflow-hidden">
                <Store className="h-full w-full text-accent" />
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
          <div className="mx-auto max-w-6xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
