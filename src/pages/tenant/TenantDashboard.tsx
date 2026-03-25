import { TenantLayout } from "@/components/tenant/TenantLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, DollarSign, Package, Star, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Pesanan Hari Ini", value: "42", icon: ClipboardList, change: "+8.3%", color: "text-blue-500", bg: "bg-blue-100", path: "/tenant/orders" },
  { label: "Pendapatan Hari Ini", value: "Rp 2,4jt", icon: DollarSign, change: "+12.1%", color: "text-green-500", bg: "bg-green-100", path: "/tenant/reports" },
  { label: "Produk Aktif", value: "28", icon: Package, change: "+2", color: "text-orange-500", bg: "bg-orange-100", path: "/tenant/products" },
  { label: "Rating Toko", value: "4.8", icon: Star, change: "+0.1", color: "text-yellow-500", bg: "bg-yellow-100", path: "/tenant/profile" },
];

const recentOrders = [
  { id: "TRX-101", customer: "Andi S.", items: "Nasi Goreng x2", status: "Baru", amount: "Rp 36.000", time: "1 menit lalu" },
  { id: "TRX-102", customer: "Budi R.", items: "Mie Ayam, Es Teh", status: "Diproses", amount: "Rp 25.000", time: "5 menit lalu" },
  { id: "TRX-103", customer: "Citra L.", items: "Ayam Geprek x3", status: "Selesai", amount: "Rp 54.000", time: "12 menit lalu" },
  { id: "TRX-104", customer: "Dewi P.", items: "Soto Ayam", status: "Dibatalkan", amount: "Rp 18.000", time: "20 menit lalu" },
];

export default function TenantDashboard() {
  const navigate = useNavigate();

  return (
    <TenantLayout>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight">Dashboard Tenant</h1>
          <p className="text-muted-foreground font-medium">Selamat datang, Warung Barokah! Berikut ringkasan toko hari ini.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="border-none shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
              onClick={() => navigate(stat.path)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-xl ${stat.bg}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <span className={cn("text-xs font-bold", stat.change.startsWith("+") ? "text-green-600" : "text-muted-foreground")}>
                    {stat.change}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  <p className="text-2xl font-black mt-1">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-bold">Pesanan Terbaru</CardTitle>
              <button onClick={() => navigate("/tenant/orders")} className="text-sm font-bold text-primary hover:underline underline-offset-4">
                Lihat Semua
              </button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left text-muted-foreground">
                      <th className="pb-3 font-bold">ID</th>
                      <th className="pb-3 font-bold">PELANGGAN</th>
                      <th className="pb-3 font-bold">ITEM</th>
                      <th className="pb-3 font-bold">STATUS</th>
                      <th className="pb-3 font-bold">JUMLAH</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-muted/30 transition-colors">
                        <td className="py-4 font-bold">{order.id}</td>
                        <td className="py-4">{order.customer}</td>
                        <td className="py-4 font-medium">{order.items}</td>
                        <td className="py-4">
                          <span className={cn(
                            "rounded-full px-2 py-1 text-[10px] font-extrabold uppercase",
                            order.status === "Selesai" ? "bg-green-100 text-green-700" :
                            order.status === "Diproses" ? "bg-blue-100 text-blue-700" :
                            order.status === "Baru" ? "bg-orange-100 text-orange-700" :
                            "bg-red-100 text-red-700"
                          )}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 font-bold">{order.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Pendapatan Minggu Ini</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4 opacity-50" />
                <p className="text-2xl font-black">Rp 14,2jt</p>
                <p className="text-sm font-bold text-muted-foreground mt-1">+15.3% dari minggu lalu</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TenantLayout>
  );
}
