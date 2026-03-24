import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function AdminUsers() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight">Manajemen Pengguna</h1>
          <p className="text-muted-foreground font-medium">Kelola data pengguna, status akun, dan peran (admin/user).</p>
        </div>
        <Card className="border-none shadow-sm min-h-[400px] flex items-center justify-center">
          <CardContent className="text-center">
            <Users className="h-16 w-16 text-primary/20 mx-auto mb-4" />
            <h2 className="text-xl font-bold">Daftar Pengguna Kosong</h2>
            <p className="text-muted-foreground">Data pengguna akan muncul di sini.</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
