import { ClipboardList } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";

const Orders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-lg px-4 py-16 pb-24 flex flex-col items-center justify-center text-center">
        <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
          <ClipboardList className="h-8 w-8 text-muted-foreground" />
        </div>
        <h1 className="text-lg font-bold text-foreground">Belum ada pesanan</h1>
        <p className="text-sm text-muted-foreground mt-1">Pesanan kamu akan muncul di sini</p>
      </main>
      <BottomNav />
    </div>
  );
};

export default Orders;
