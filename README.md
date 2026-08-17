# RPK Law Firm Website

Website company profile RPK Law Firm dibangun menggunakan Next.js App Router, React, TypeScript, dan Vanilla/Modern CSS.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`. Validasi produksi:

```bash
npm run lint
npm run typecheck
npm run build
```

## Struktur utama

- `src/app` — seluruh route dan metadata halaman
- `src/components` — komponen antarmuka reusable
- `src/data/site.ts` — identitas firma, navigasi, kontak, dan referensi aset
- `src/data/team.ts` — satu-satunya sumber data tim
- `src/data/practice-areas.ts` — data area praktik
- `src/data/insights.ts` — data artikel dan isi artikel
- `public/images` — aset visual lokal
- `CONTENT_TODO.md` — daftar data yang harus diverifikasi/diganti

## Mengganti konten

- Logo: edit komponen `src/components/logo.tsx` atau ganti dengan SVG final.
- Kontak dan foto kantor: edit `src/data/site.ts`.
- Anggota tim: tambah/ubah satu objek di `src/data/team.ts`; route profil dibuat otomatis dari `slug`.
- Area praktik: tambah/ubah objek di `src/data/practice-areas.ts`.
- Artikel: tambah/ubah objek di `src/data/insights.ts`.
- Foto: simpan file baru di `public/images`, lalu ubah path pada data terkait.

## Status placeholder

Nama dan gelar anggota tim adalah data yang diberikan. Jabatan, portrait, bio, pengalaman, pendidikan, bahasa, email, cakupan layanan, kontak kantor, dan artikel masih placeholder sampai diverifikasi. Form kontak hanya menampilkan success state lokal dan tidak mengirim data.
