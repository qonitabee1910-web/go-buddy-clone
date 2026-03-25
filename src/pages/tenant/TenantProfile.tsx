import { TenantLayout } from "@/components/tenant/TenantLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Store, MapPin, Clock, Phone, Star } from "lucide-react";

export default function TenantProfile() {
  return (
    <TenantLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Profil Toko</h1>
          <p className="text-muted-foreground font-medium">Kelola informasi dan pengaturan toko Anda.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Informasi Toko</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-20 w-20 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <Store className="h-10 w-10 text-accent" />
                  </div>
                  <div>
                    <p className="font-extrabold text-xl">Warung Barokah</p>
                    <p className="text-sm text-muted-foreground">K-Food Partner sejak Jan 2024</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Nama Toko</Label>
                    <Input defaultValue="Warung Barokah" />
                  </div>
                  <div className="space-y-2">
                    <Label>No. Telepon</Label>
                    <Input defaultValue="0812-3456-7890" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label>Alamat</Label>
                    <Input defaultValue="Jl. Klumpang Raya No. 45, Medan" />
                  </div>
                  <div className="space-y-2">
                    <Label>Jam Buka</Label>
                    <Input defaultValue="08:00" type="time" />
                  </div>
                  <div className="space-y-2">
                    <Label>Jam Tutup</Label>
                    <Input defaultValue="22:00" type="time" />
                  </div>
                </div>
                <Button className="mt-4">Simpan Perubahan</Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Pengaturan Notifikasi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Pesanan baru masuk", desc: "Notifikasi setiap ada pesanan baru", on: true },
                  { label: "Pesanan dibatalkan", desc: "Notifikasi pembatalan pesanan", on: true },
                  { label: "Ulasan pelanggan", desc: "Notifikasi ulasan dan rating baru", on: false },
                  { label: "Laporan harian", desc: "Ringkasan penjualan setiap hari", on: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-bold text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <Switch defaultChecked={item.on} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Ringkasan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: Star, label: "Rating", value: "4.8 / 5.0", color: "text-yellow-500" },
                  { icon: MapPin, label: "Area", value: "Klumpang, Medan", color: "text-blue-500" },
                  { icon: Clock, label: "Jam Operasi", value: "08:00 - 22:00", color: "text-green-500" },
                  { icon: Phone, label: "Telepon", value: "0812-3456-7890", color: "text-purple-500" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="font-bold text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </TenantLayout>
  );
}
