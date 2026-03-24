import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function AdminSettings() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight">Pengaturan Sistem</h1>
          <p className="text-muted-foreground font-medium">Konfigurasi parameter sistem, integrasi API, dan profil admin.</p>
        </div>
        <Card className="border-none shadow-sm min-h-[400px] flex items-center justify-center">
          <CardContent className="text-center">
            <Settings className="h-16 w-16 text-primary/20 mx-auto mb-4" />
            <h2 className="text-xl font-bold">Halaman Pengaturan</h2>
            <p className="text-muted-foreground">Konfigurasi sistem akan muncul di sini.</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
