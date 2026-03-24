import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Package } from "lucide-react";

export default function AdminServices() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight">Manajemen Layanan</h1>
          <p className="text-muted-foreground font-medium">Tambah, edit, atau nonaktifkan layanan aplikasi.</p>
        </div>
        <Card className="border-none shadow-sm min-h-[400px] flex items-center justify-center">
          <CardContent className="text-center">
            <Package className="h-16 w-16 text-primary/20 mx-auto mb-4" />
            <h2 className="text-xl font-bold">Daftar Layanan Kosong</h2>
            <p className="text-muted-foreground">Layanan aplikasi akan muncul di sini.</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
