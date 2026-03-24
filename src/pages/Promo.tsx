import { Tag } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";

const promos = [
  { id: 1, title: "GoFood Festival", desc: "Diskon hingga 60% makanan favorit kamu!", tag: "MAKANAN" },
  { id: 2, title: "GoRide Hemat Pagi", desc: "Potongan Rp15.000 sebelum jam 9 pagi", tag: "TRANSPORT" },
  { id: 3, title: "GoPay Cashback", desc: "Cashback 25% setiap transaksi di merchant pilihan", tag: "PEMBAYARAN" },
  { id: 4, title: "GoMart Gratis Ongkir", desc: "Gratis ongkir belanja kebutuhan harian", tag: "BELANJA" },
  { id: 5, title: "GoPlay Premium", desc: "Langganan 1 bulan hanya Rp29.000", tag: "HIBURAN" },
];

const Promo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-lg px-4 py-4 pb-24">
        <h1 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Tag className="h-5 w-5 text-primary" />
          Promo untukmu
        </h1>
        <div className="space-y-3">
          {promos.map((p) => (
            <div key={p.id} className="rounded-xl bg-card p-4 shadow-sm border border-border">
              <span className="text-[10px] font-bold text-muted-foreground tracking-wider">{p.tag}</span>
              <h3 className="text-sm font-bold text-card-foreground mt-1">{p.title}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Promo;
