import { TenantLayout } from "@/components/tenant/TenantLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const orders = [
  { id: "TRX-101", customer: "Andi Saputra", items: "Nasi Goreng x2, Es Teh x2", driver: "Budi (K-Ride)", status: "Baru", amount: "Rp 46.000", time: "14:32" },
  { id: "TRX-102", customer: "Citra Lestari", items: "Mie Ayam Bakso", driver: "Rudi (K-Ride)", status: "Diproses", amount: "Rp 15.000", time: "14:25" },
  { id: "TRX-103", customer: "Dewi Putri", items: "Ayam Geprek x3, Jus Alpukat x3", driver: "Sari (K-Ride)", status: "Diproses", amount: "Rp 84.000", time: "14:10" },
  { id: "TRX-104", customer: "Eko Prasetyo", items: "Soto Ayam x2", driver: "Adi (K-Ride)", status: "Selesai", amount: "Rp 36.000", time: "13:55" },
  { id: "TRX-105", customer: "Fitri Handayani", items: "Nasi Uduk, Kopi Susu", driver: "-", status: "Dibatalkan", amount: "Rp 24.000", time: "13:40" },
  { id: "TRX-106", customer: "Gilang Ramadhan", items: "Nasi Goreng Spesial", driver: "Wawan (K-Ride)", status: "Selesai", amount: "Rp 18.000", time: "13:20" },
];

const statusColor = (status: string) => {
  switch (status) {
    case "Baru": return "bg-orange-100 text-orange-700";
    case "Diproses": return "bg-blue-100 text-blue-700";
    case "Selesai": return "bg-green-100 text-green-700";
    case "Dibatalkan": return "bg-red-100 text-red-700";
    default: return "bg-muted text-muted-foreground";
  }
};

function OrderTable({ data }: { data: typeof orders }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-left text-muted-foreground">
            <th className="p-4 font-bold">ID</th>
            <th className="p-4 font-bold">PELANGGAN</th>
            <th className="p-4 font-bold">ITEM</th>
            <th className="p-4 font-bold">DRIVER</th>
            <th className="p-4 font-bold">STATUS</th>
            <th className="p-4 font-bold">JUMLAH</th>
            <th className="p-4 font-bold">WAKTU</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.length === 0 ? (
            <tr><td colSpan={7} className="p-8 text-center text-muted-foreground">Tidak ada pesanan.</td></tr>
          ) : data.map((order) => (
            <tr key={order.id} className="hover:bg-muted/30 transition-colors">
              <td className="p-4 font-bold">{order.id}</td>
              <td className="p-4">{order.customer}</td>
              <td className="p-4 font-medium max-w-[200px] truncate">{order.items}</td>
              <td className="p-4 text-muted-foreground">{order.driver}</td>
              <td className="p-4">
                <span className={cn("rounded-full px-2 py-1 text-[10px] font-extrabold uppercase", statusColor(order.status))}>
                  {order.status}
                </span>
              </td>
              <td className="p-4 font-bold">{order.amount}</td>
              <td className="p-4 text-muted-foreground">{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TenantOrders() {
  return (
    <TenantLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Pesanan</h1>
          <p className="text-muted-foreground font-medium">Kelola pesanan masuk dan riwayat.</p>
        </div>

        <Tabs defaultValue="semua">
          <TabsList>
            <TabsTrigger value="semua">Semua ({orders.length})</TabsTrigger>
            <TabsTrigger value="baru">Baru ({orders.filter(o => o.status === "Baru").length})</TabsTrigger>
            <TabsTrigger value="diproses">Diproses ({orders.filter(o => o.status === "Diproses").length})</TabsTrigger>
            <TabsTrigger value="selesai">Selesai ({orders.filter(o => o.status === "Selesai").length})</TabsTrigger>
            <TabsTrigger value="dibatalkan">Dibatalkan ({orders.filter(o => o.status === "Dibatalkan").length})</TabsTrigger>
          </TabsList>
          <Card className="border-none shadow-sm mt-4">
            <CardContent className="p-0">
              <TabsContent value="semua" className="m-0"><OrderTable data={orders} /></TabsContent>
              <TabsContent value="baru" className="m-0"><OrderTable data={orders.filter(o => o.status === "Baru")} /></TabsContent>
              <TabsContent value="diproses" className="m-0"><OrderTable data={orders.filter(o => o.status === "Diproses")} /></TabsContent>
              <TabsContent value="selesai" className="m-0"><OrderTable data={orders.filter(o => o.status === "Selesai")} /></TabsContent>
              <TabsContent value="dibatalkan" className="m-0"><OrderTable data={orders.filter(o => o.status === "Dibatalkan")} /></TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      </div>
    </TenantLayout>
  );
}
