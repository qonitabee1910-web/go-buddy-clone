import ServiceLayout from "@/components/ServiceLayout";
import { useLocation } from "react-router-dom";
import { Bike, Car, UtensilsCrossed, Send, ShoppingCart, ShoppingBag, Play, Pill, Star, Truck, LucideIcon } from "lucide-react";

const GenericService = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "").toLowerCase();
  
  const services: Record<string, { title: string, icon: LucideIcon, color: string, desc: string }> = {
    gocar: { title: "GoCar", icon: Car, color: "bg-primary", desc: "Nikmati perjalanan nyaman dengan armada mobil terbaik." },
    gosend: { title: "GoSend", icon: Send, color: "bg-primary", desc: "Kirim paket instan dan terpercaya dalam satu sentuhan." },
    gomart: { title: "GoMart", icon: ShoppingCart, color: "bg-destructive", desc: "Belanja kebutuhan harian praktis dari supermarket pilihan." },
    goshop: { title: "GoShop", icon: ShoppingBag, color: "bg-accent", desc: "Titip belanjaan apapun di mana saja." },
    goplay: { title: "GoPlay", icon: Play, color: "bg-accent", desc: "Nonton film, serial, dan konten seru lainnya." },
    gomed: { title: "GoMed", icon: Pill, color: "bg-primary", desc: "Beli obat dan konsultasi kesehatan jadi lebih mudah." },
    goclub: { title: "GoClub", icon: Star, color: "bg-accent", desc: "Nikmati berbagai keuntungan eksklusif di GoClub." },
    gobox: { title: "GoBox", icon: Truck, color: "bg-primary", desc: "Kirim barang dalam jumlah besar dengan truk pilihan." }
  };

  const currentService = services[path] || { title: "Layanan Gojek", icon: Bike, color: "bg-primary", desc: "Layanan terbaik untuk kebutuhan harianmu." };
  const Icon = currentService.icon;

  return (
    <ServiceLayout title={currentService.title}>
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className={`h-24 w-24 rounded-3xl ${currentService.color} flex items-center justify-center mb-6 shadow-lg`}>
          <Icon className="h-12 w-12 text-primary-foreground" />
        </div>
        <h2 className="text-2xl font-black mb-3 tracking-tight">{currentService.title}</h2>
        <p className="text-muted-foreground leading-relaxed">{currentService.desc}</p>
        
        <div className="mt-12 w-full p-8 rounded-3xl bg-muted/50 border border-dashed border-muted-foreground/30">
          <p className="text-sm font-bold text-muted-foreground italic">Fitur ini akan segera hadir.</p>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default GenericService;
