

## Setup Native Android App (Capacitor)

Menggunakan **Capacitor** untuk membungkus aplikasi web menjadi APK Android native.

### Langkah di Lovable

1. **Install dependencies Capacitor** — `@capacitor/core`, `@capacitor/cli`, `@capacitor/android`
2. **Inisialisasi Capacitor** — `npx cap init` dengan config:
   - `appId`: `app.lovable.b7f4980e34ba46bdbd6c952f24c4e2fb`
   - `appName`: `go-buddy-clone`
   - Server URL untuk hot-reload: `https://b7f4980e-34ba-46bd-bd6c-952f24c4e2fb.lovableproject.com?forceHideBadge=true`
3. **Buat file `capacitor.config.ts`** di root project

### Langkah di Komputer Anda (setelah setup di Lovable)

Anda perlu melakukan langkah berikut di komputer lokal:

1. **Export ke GitHub** — klik tombol "Export to Github" di Lovable
2. **Clone & install** — `git clone` lalu `npm install`
3. **Tambah platform Android** — `npx cap add android`
4. **Build & sync** — `npm run build && npx cap sync`
5. **Jalankan di emulator/device** — `npx cap run android`

**Prasyarat**: Android Studio harus terinstall di komputer Anda.

### File yang Diubah/Dibuat

| File | Perubahan |
|------|-----------|
| `package.json` | Tambah dependencies Capacitor |
| `capacitor.config.ts` | Konfigurasi Capacitor baru |

### Catatan Penting
- APK tidak bisa di-generate langsung di Lovable — perlu Android Studio di komputer lokal
- Hot-reload tersedia saat development via server URL
- Untuk publish ke Play Store, build release APK via Android Studio

Referensi lengkap: [Lovable Mobile Development Blog](https://docs.lovable.dev/tips-tricks/mobile-development)

