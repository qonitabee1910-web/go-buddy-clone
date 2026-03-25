import { TenantLayout } from "@/components/tenant/TenantLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Award, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const topProducts = [
  { name: "Nasi Goreng Spesial", sold: 156, revenue: "Rp 2.808.000" },
  { name: "Ayam Geprek", sold: 132, revenue: "Rp 2.112.000" },
  { name: "Mie Ayam Bakso", sold: 98, revenue: "Rp 1.470.000" },
  { name: "Es Teh Manis", sold: 210, revenue: "Rp 1.050.000" },
  { name: "Soto Ayam", sold: 75, revenue: "Rp 1.350.000" },
];

const peakHours = [
  { hour: "11:00-12:00", orders: 45, pct: 90 },
  { hour: "12:00-13:00", orders: 50, pct: 100 },
  { hour: "13:00-14:00", orders: 38, pct: 76 },
  { hour: "18:00-19:00", orders: 42, pct: 84 },
  { hour: "19:00-20:00", orders: 35, pct: 70 },
];

const periodData = {
  harian: { revenue: "Rp 2,4jt", orders: 42, avg: "Rp 57.143" },
  mingguan: { revenue: "Rp 14,2jt", orders: 287, avg: "Rp 49.477" },
  bulanan: { revenue: "Rp 52,8jt", orders: 1124, avg: "Rp 46.975" },
};

export default function TenantReports() {
  return (
    <TenantLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Laporan</h1>
          <p className="text-muted-foreground font-medium">Analisis pendapatan dan performa toko.</p>
        </div>

        <Tabs defaultValue="harian">
          <TabsList>
            <TabsTrigger value="harian">Harian</TabsTrigger>
            <TabsTrigger value="mingguan">Mingguan</TabsTrigger>
            <TabsTrigger value="bulanan">Bulanan</TabsTrigger>
          </TabsList>

          {Object.entries(periodData).map(([key, data]) => (
            <TabsContent key={key} value={key}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <p className="text-sm font-bold text-muted-foreground uppercase">Pendapatan</p>
                    <p className="text-2xl font-black mt-1">{data.revenue}</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6 text-center">
                    <Award className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <p className="text-sm font-bold text-muted-foreground uppercase">Total Pesanan</p>
                    <p className="text-2xl font-black mt-1">{data.orders}</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6 text-center">
                    <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-sm font-bold text-muted-foreground uppercase">Rata-rata/Pesanan</p>
                    <p className="text-2xl font-black mt-1">{data.avg}</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Produk Terlaris</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, i) => (
                  <div key={product.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-black text-muted-foreground w-6">{i + 1}.</span>
                      <div>
                        <p className="font-bold text-sm">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.sold} terjual</p>
                      </div>
                    </div>
                    <span className="font-bold text-sm">{product.revenue}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Jam Sibuk</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {peakHours.map((hour) => (
                  <div key={hour.hour} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-bold">{hour.hour}</span>
                      <span className="text-muted-foreground">{hour.orders} pesanan</span>
                    </div>
                    <Progress value={hour.pct} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TenantLayout>
  );
}
