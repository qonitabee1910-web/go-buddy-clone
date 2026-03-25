

## Driver UI/UX untuk Gojek Clone

Membuat section driver terpisah di `/driver` dengan tampilan khas aplikasi driver Gojek.

### Halaman & Komponen

**1. Driver Home (`/driver`)**
- **DriverHeader**: Nama driver, foto profil, rating bintang, status online/offline toggle
- **DriverStatsCard**: Kartu statistik hari ini — jumlah order, pendapatan, jam online
- **DriverOrderCard**: Kartu order masuk (dummy) — nama pelanggan, alamat pickup & dropoff, estimasi jarak & harga, tombol Terima/Tolak
- **DriverEarnings**: Ringkasan pendapatan mingguan dengan progress bar target
- **DriverBottomNav**: Navigation bar: Home, Riwayat, Performa, Akun

**2. Driver Riwayat (`/driver/history`)**
- Daftar order yang sudah selesai (dummy data) dengan waktu, rute, dan pendapatan per trip

**3. Driver Performa (`/driver/performance`)**
- Rating rata-rata, completion rate, acceptance rate, tips yang diterima
- Badge/level driver (Silver, Gold, Platinum)

**4. Driver Akun (`/driver/account`)**
- Profil driver: nama, kendaraan, plat nomor, saldo
- Menu: Bantuan, Pengaturan, Keluar

### Komponen Baru
| File | Deskripsi |
|------|-----------|
| `src/pages/driver/DriverHome.tsx` | Halaman utama driver |
| `src/pages/driver/DriverHistory.tsx` | Riwayat order |
| `src/pages/driver/DriverPerformance.tsx` | Halaman performa |
| `src/pages/driver/DriverAccount.tsx` | Halaman akun |
| `src/components/driver/DriverHeader.tsx` | Header dengan toggle online/offline |
| `src/components/driver/DriverStatsCard.tsx` | Statistik harian |
| `src/components/driver/DriverOrderCard.tsx` | Kartu order masuk |
| `src/components/driver/DriverEarnings.tsx` | Ringkasan pendapatan |
| `src/components/driver/DriverBottomNav.tsx` | Bottom navigation driver |

### Desain
- Warna utama tetap hijau Gojek, dengan aksen biru untuk status online
- Toggle online/offline yang mencolok di header
- Card-based layout, mobile-first
- Animasi slide-up untuk order masuk

### Routing
- Tambah route `/driver`, `/driver/history`, `/driver/performance`, `/driver/account` di App.tsx

