import ServiceLayout from "@/components/ServiceLayout";
import { UtensilsCrossed, Search, MapPin, Loader2 } from "lucide-react";
import MapComponent from "@/components/MapComponent";
import LocationSearch from "@/components/LocationSearch";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/AuthProvider";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const GoFood = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [mapCenter, setMapCenter] = useState<[number, number]>([-6.200000, 106.816666]);
  const [address, setAddress] = useState("Rumah • Jl. Sudirman No. 123...");
  const [isLoading, setIsLoading] = useState(false);

  const handleLocationSelect = (lat: number, lng: number, addr: string) => {
    setMapCenter([lat, lng]);
    setAddress(addr);
  };

  const handleOrderFood = async () => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Belum Login",
        description: "Silakan login untuk memesan K-Food.",
      });
      navigate("/login");
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('orders')
        .insert([
          {
            customer_id: user.id,
            service_type: 'food',
            status: 'searching',
            pickup_address: 'Restoran Pilihan',
            destination_address: address,
            pickup_lat: -6.190000,
            pickup_lng: 106.810000,
            destination_lat: mapCenter[0],
            destination_lng: mapCenter[1],
            amount: 45000,
          }
        ]);

      if (error) throw error;

      toast({
        title: "Pesanan Dibuat",
        description: "Mencari driver untuk mengantar makananmu.",
      });

      setTimeout(() => navigate("/orders"), 1500);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Gagal Memesan",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ServiceLayout title="K-Food">
      <div className="flex flex-col gap-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Mau makan apa hari ini?"
            className="w-full rounded-2xl bg-muted pl-12 pr-4 py-4 text-sm font-bold placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
          />
        </div>

        {/* Delivery Location Map */}
        <section className="space-y-3">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground">Antar ke</h3>
            <button className="text-xs font-bold text-primary">Ubah Alamat</button>
          </div>
          
          <div className="space-y-4">
            <LocationSearch 
              onSelect={handleLocationSelect} 
              placeholder="Cari alamat pengantaran..."
            />
            
            <div className="relative h-[150px] rounded-2xl overflow-hidden border border-border/50">
              <MapComponent height="150px" center={mapCenter} markers={[{ lat: mapCenter[0], lng: mapCenter[1] }]} />
              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm flex items-center gap-3 z-[1000]">
                <MapPin className="h-4 w-4 text-destructive shrink-0" />
                <p className="text-[10px] font-bold truncate">{address}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center justify-center py-8 text-center bg-destructive/10 rounded-3xl p-6 border border-destructive/20">
          <div className="h-20 w-20 rounded-2xl bg-destructive flex items-center justify-center mb-4 shadow-lg">
            <UtensilsCrossed className="h-10 w-10 text-primary-foreground" />
          </div>
          <h2 className="text-xl font-black mb-2 tracking-tight">Cari Makanan Favorit</h2>
          <p className="text-sm text-muted-foreground">Berbagai pilihan restoran lezat menantimu di K-Food.</p>
          
          <button 
            onClick={handleOrderFood}
            disabled={isLoading}
            className="w-full mt-6 py-4 rounded-2xl bg-destructive text-white font-black text-sm uppercase tracking-widest shadow-lg shadow-destructive/20 active:scale-95 transition-all flex items-center justify-center"
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : null}
            {isLoading ? "Memesan..." : "Pesan Sekarang"}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-video rounded-2xl bg-orange-100 flex items-center justify-center p-4 border border-orange-200">
             <span className="text-sm font-black text-orange-700 uppercase tracking-tighter">Diskon Kilat</span>
          </div>
          <div className="aspect-video rounded-2xl bg-blue-100 flex items-center justify-center p-4 border border-blue-200">
             <span className="text-sm font-black text-blue-700 uppercase tracking-tighter">Gratis Ongkir</span>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default GoFood;
