import { TenantLayout } from "@/components/tenant/TenantLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  { id: 1, name: "Nasi Goreng Spesial", price: "Rp 18.000", category: "Makanan", stock: 50, active: true },
  { id: 2, name: "Mie Ayam Bakso", price: "Rp 15.000", category: "Makanan", stock: 30, active: true },
  { id: 3, name: "Ayam Geprek", price: "Rp 16.000", category: "Makanan", stock: 0, active: false },
  { id: 4, name: "Soto Ayam", price: "Rp 18.000", category: "Makanan", stock: 25, active: true },
  { id: 5, name: "Es Teh Manis", price: "Rp 5.000", category: "Minuman", stock: 100, active: true },
  { id: 6, name: "Jus Alpukat", price: "Rp 12.000", category: "Minuman", stock: 15, active: true },
  { id: 7, name: "Kopi Susu", price: "Rp 10.000", category: "Minuman", stock: 40, active: true },
  { id: 8, name: "Nasi Uduk", price: "Rp 14.000", category: "Makanan", stock: 0, active: false },
];

export default function TenantProducts() {
  return (
    <TenantLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Produk</h1>
            <p className="text-muted-foreground font-medium">Kelola menu dan produk toko Anda.</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Tambah Produk
          </Button>
        </div>

        <Card className="border-none shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-muted-foreground">
                    <th className="p-4 font-bold">PRODUK</th>
                    <th className="p-4 font-bold">KATEGORI</th>
                    <th className="p-4 font-bold">HARGA</th>
                    <th className="p-4 font-bold">STOK</th>
                    <th className="p-4 font-bold">STATUS</th>
                    <th className="p-4 font-bold">AKSI</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-bold">{product.name}</td>
                      <td className="p-4">
                        <Badge variant="secondary">{product.category}</Badge>
                      </td>
                      <td className="p-4 font-medium">{product.price}</td>
                      <td className="p-4">
                        <span className={cn("font-bold", product.stock === 0 ? "text-destructive" : "text-foreground")}>
                          {product.stock === 0 ? "Habis" : product.stock}
                        </span>
                      </td>
                      <td className="p-4">
                        <Badge variant={product.active ? "default" : "outline"} className={cn(product.active ? "bg-green-100 text-green-700 hover:bg-green-100" : "")}>
                          {product.active ? "Aktif" : "Nonaktif"}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Pencil className="h-3 w-3" /> Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </TenantLayout>
  );
}
