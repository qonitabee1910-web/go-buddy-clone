import ServiceLayout from "@/components/ServiceLayout";
import { Bike, Loader2 } from "lucide-react";
import MapComponent from "@/components/MapComponent";
import LocationSearch from "@/components/LocationSearch";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/AuthProvider";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const GoRide = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [mapCenter, setMapCenter] = useState<[number, number]>([-6.200000, 106.816666]);
  const [destination, setDestination] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLocationSelect = (lat: number, lng: number, address: string) => {
    setMapCenter([lat, lng]);
    setDestination(address);
  };

  const handleRequestRide = async () => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Belum Login",
        description: "Silakan login terlebih dahulu untuk memesan K-Ride.",
      });
      navigate("/login");
      return;
    }

    if (!destination) {
      toast({
        variant: "destructive",
        title: "Tujuan Kosong",
        description: "Silakan pilih lokasi tujuan Anda terlebih dahulu.",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('orders')
        .insert([
          {
            customer_id: user.id,
            service_type: 'ride',
            status: 'searching',
            pickup_address: 'Posisi Saat Ini',
            destination_address: destination,
            pickup_lat: -6.200000, // Simulasi koordinat saat ini
            pickup_lng: 106.816666,
            destination_lat: mapCenter[0],
            destination_lng: mapCenter[1],
            amount: 15000, // Simulasi harga tetap
          }
        ])
        .select();

      if (error) throw error;

      toast({
        title: "Mencari Driver",
        description: "Pesanan K-Ride Anda sedang diproses. Mohon tunggu.",
      });

      // Simulasi trigger Edge Function match-driver
      // In production, this would be an automatic trigger or a separate call
      
      setTimeout(() => navigate("/orders"), 1500);
    } catch (error: any) {
      console.error("Order error:", error);
      toast({
        variant: "destructive",
        title: "Gagal Memesan",
        description: error.message || "Terjadi kesalahan saat membuat pesanan.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ServiceLayout title="K-Ride">
      <div className="flex flex-col gap-6">
        {/* Map Integration */}
        <MapComponent height="250px" center={mapCenter} markers={[{ lat: mapCenter[0], lng: mapCenter[1] }]} />

        <div className="flex flex-col items-center justify-center py-4 text-center">
          <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center mb-4 shadow-lg">
            <Bike className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-xl font-bold mb-1">Mau ke mana hari ini?</h2>
          <p className="text-sm text-muted-foreground mb-6">Pilih tujuanmu dan nikmati perjalanan aman dengan K-Ride.</p>
          
          <div className="w-full space-y-4">
            <div className="p-4 rounded-2xl bg-muted border border-border/50 text-left">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Lokasi Jemput</p>
              <p className="text-sm font-bold">Posisi Saat Ini</p>
            </div>
            
            <div className="space-y-2 text-left">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-2">Tujuan</p>
              <LocationSearch 
                onSelect={handleLocationSelect} 
                placeholder="Cari lokasi tujuan..."
              />
            </div>
          </div>

          <button 
            onClick={handleRequestRide}
            disabled={isLoading}
            className="w-full mt-8 py-4 rounded-2xl bg-primary text-white font-black text-sm uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center justify-center"
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : null}
            {isLoading ? "Memproses..." : "Cari Driver K-Ride"}
          </button>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default GoRide;
