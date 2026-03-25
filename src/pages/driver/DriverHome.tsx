import DriverLayout from "@/components/driver/DriverLayout";
import { DollarSign, BarChart3, Star, ChevronRight, Package, Bike, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import MapComponent from "@/components/MapComponent";

const dummyOrders = [
  {
    id: "ORD-A1B2C3",
    service_type: "ride",
    amount: 25000,
    pickup_address: "Jl. Sudirman No. 45, Jakarta Pusat",
    destination_address: "Mall Grand Indonesia, Thamrin",
  },
  {
    id: "ORD-D4E5F6",
    service_type: "food",
    amount: 42000,
    pickup_address: "Warung Nasi Padang Sederhana, Menteng",
    destination_address: "Apartemen Sudirman Park Lt. 12",
  },
];

const DriverHome = () => {
  const navigate = useNavigate();

  const summary = [
    { icon: DollarSign, label: "Pendapatan Hari Ini", value: "Rp 125.000", color: "text-driver-success", bg: "bg-driver-success-light", path: "/driver/earnings" },
    { icon: BarChart3, label: "Order Selesai", value: "12", color: "text-driver-info", bg: "bg-driver-info-light", path: "/driver/performance" },
    { icon: Star, label: "Rating Anda", value: "4.9", color: "text-driver-warning", bg: "bg-driver-warning-light", path: "/driver/performance" },
  ];

  return (
    <DriverLayout>
      <div className="flex flex-col gap-8 p-4">
        {/* Map View */}
        <section aria-label="Peta Lokasi" className="relative">
          <MapComponent height="200px" />
        </section>

        {/* Today's Summary */}
        <div className="grid grid-cols-3 gap-3">
          {summary.map((item) => (
            <div
              key={item.label}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card border border-border/50 shadow-sm text-center cursor-pointer hover:shadow-md transition-all active:scale-95"
            >
              <div className={cn("p-2 rounded-xl", item.bg)}>
                <item.icon className={cn("h-5 w-5", item.color)} />
              </div>
              <div>
                <p className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest leading-tight">{item.label}</p>
                <p className="text-sm font-black tracking-tight leading-tight mt-1">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Available Orders */}
        <section aria-label="Order Masuk">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-black tracking-tight">Order Masuk</h2>
            <button className="text-xs font-bold text-primary hover:underline">Lihat Semua</button>
          </div>

          <div className="space-y-4">
            {dummyOrders.map((order) => (
              <div
                key={order.id}
                className="p-5 rounded-3xl bg-card border border-border/50 shadow-md hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "p-2.5 rounded-2xl shadow-sm group-hover:scale-110 transition-transform",
                      order.service_type === "food" ? "bg-destructive" : "bg-primary"
                    )}>
                      {order.service_type === "ride" ? <Bike className="h-6 w-6 text-primary-foreground" /> : <Package className="h-6 w-6 text-destructive-foreground" />}
                    </div>
                    <div>
                      <p className="text-sm font-black tracking-tight capitalize">K-{order.service_type}</p>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest truncate max-w-[100px]">ID: {order.id}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-primary leading-tight">Rp {order.amount.toLocaleString()}</p>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Baru Saja</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-dashed border-border mb-4">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-driver-info" />
                      <div className="w-0.5 h-6 bg-muted-foreground/20 rounded-full" />
                      <div className="h-3 w-3 rounded-full bg-destructive" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">Jemput</p>
                        <p className="text-sm font-bold leading-tight line-clamp-1">{order.pickup_address}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">Tujuan</p>
                        <p className="text-sm font-bold leading-tight line-clamp-1">{order.destination_address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-black text-sm uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-all">
                  Terima Order
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Overview */}
        <section aria-label="Ringkasan Performa">
          <div
            onClick={() => navigate("/driver/performance")}
            className="p-6 rounded-3xl bg-muted/50 border border-border/50 flex items-center justify-between cursor-pointer hover:bg-muted/80 transition-all active:scale-95 shadow-sm"
          >
            <div className="flex gap-4 items-center">
              <div className="p-3 rounded-2xl bg-card shadow-sm">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-black text-base tracking-tight leading-tight">Performa Hari Ini</h3>
                <p className="text-xs font-bold text-muted-foreground mt-1">Luar biasa! Pertahankan terus.</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-primary leading-tight">98%</p>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Target: 95%</p>
            </div>
          </div>
        </section>
      </div>
    </DriverLayout>
  );
};

export default DriverHome;
