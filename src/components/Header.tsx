import { Bell, Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card px-4 py-3 shadow-sm">
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <div className="flex items-center gap-1">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-extrabold text-sm">G</span>
          </div>
          <span className="font-extrabold text-lg text-foreground tracking-tight">gojek</span>
        </div>

        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari layanan, makanan, & tujuan"
            className="w-full rounded-full bg-muted pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <button className="relative p-2 rounded-full hover:bg-muted transition-colors">
          <Bell className="h-5 w-5 text-foreground" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
        </button>

        <button className="p-1 rounded-full border-2 border-primary">
          <User className="h-5 w-5 text-primary" />
        </button>
      </div>
    </header>
  );
};

export default Header;
