import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";

export default function AdminOrders() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight">Manajemen Pesanan</h1>
          <p className="text-muted-foreground font-medium">Kelola seluruh pesanan pengguna di sini.</p>
        </div>
        <Card className="border-none shadow-sm min-h-[400px] flex items-center justify-center">
          <CardContent className="text-center">
            <ClipboardList className="h-16 w-16 text-primary/20 mx-auto mb-4" />
            <h2 className="text-xl font-bold">Daftar Pesanan Kosong</h2>
            <p className="text-muted-foreground">Belum ada pesanan yang masuk saat ini.</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
