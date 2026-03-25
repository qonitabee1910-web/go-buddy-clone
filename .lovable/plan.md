

## Tenant Dashboard untuk Gojek Clone

Dashboard untuk merchant/mitra (restoran, toko) yang terhubung dengan aplikasi utama. Mengikuti pola yang sudah ada di Admin Dashboard.

### Konsep Tenant
Tenant = Mitra usaha (restoran K-Food, toko K-Mart, dll) yang mengelola produk, pesanan, dan pendapatan mereka.

### Halaman & Komponen

**1. Tenant Dashboard (`/tenant`)**
- Statistik: Total Pesanan Hari Ini, Pendapatan, Produk Aktif, Rating
- Daftar pesanan masuk terbaru dengan status
- Grafik pendapatan mingguan (placeholder)

**2. Tenant Menu/Produk (`/tenant/products`)**
- Daftar menu/produk dengan harga, stok, status aktif/nonaktif
- Tombol tambah produk baru (dummy)

**3. Tenant Pesanan (`/tenant/orders`)**
- Tabel pesanan dengan filter status (Baru, Diproses, Selesai, Dibatalkan)
- Detail pesanan: item, pelanggan, driver, waktu

**4. Tenant Laporan (`/tenant/reports`)**
- Ringkasan pendapatan harian/mingguan/bulanan
- Produk terlaris, jam sibuk

**5. Tenant Profil (`/tenant/profile`)**
- Info toko: nama, alamat, jam operasional, foto
- Pengaturan notifikasi

### File Baru

| File | Deskripsi |
|------|-----------|
| `src/components/tenant/TenantLayout.tsx` | Layout wrapper (sidebar + header) |
| `src/components/tenant/TenantSidebar.tsx` | Sidebar navigasi tenant |
| `src/pages/tenant/TenantDashboard.tsx` | Halaman overview |
| `src/pages/tenant/TenantProducts.tsx` | Kelola menu/produk |
| `src/pages/tenant/TenantOrders.tsx` | Kelola pesanan |
| `src/pages/tenant/TenantReports.tsx` | Laporan pendapatan |
| `src/pages/tenant/TenantProfile.tsx` | Profil & pengaturan toko |

### Koneksi dengan Aplikasi
- Tambah 5 route baru di `App.tsx` (`/tenant/*`)
- Link "Keluar ke User App" di sidebar tenant mengarah ke `/`
- Link "Keluar ke Admin" di sidebar tenant mengarah ke `/admin`
- Tombol akses tenant dari Admin sidebar (menu "Tenants")

### Desain
- Reuse pola `AdminLayout`/`AdminSidebar` dengan warna aksen oranye untuk membedakan dari Admin (hijau)
- Mobile-responsive, card-based
- Semua data dummy/hardcoded

### Technical Details
- Mengikuti pattern existing: `AdminLayout` wraps pages, sidebar dengan active state via `useLocation`
- Komponen UI shadcn yang sudah ada: Card, Table, Badge, Progress, Tabs
- Tidak ada backend — semua data hardcoded sesuai scope proyek

