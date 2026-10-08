# Diary App

Aplikasi buku harian sederhana berbasis React Native + Expo.

## Identitas

- **Nama:** Samie Al Fauzan
- **NIM:** 2430511009
- **Mata Kuliah:** Mobile Programming (React Native + Expo CLI)

## Fitur yang Diselesaikan

- Total **5 entri** diary (2 entri baru ditambahkan: id 4 dan 5).
- Semua gambar mood memakai **gambar lokal** dari `assets/moods`.
- **Avatar pengguna** pada header menggunakan komponen `Image` (`assets/avatar/profile.jpg`).
- **Variasi tampilan kartu berdasarkan mood** (warna border, warna latar, ketebalan border, aksen kiri, dan label mood).
- Struktur folder rapi: data, konstanta, komponen, dan layar dipisah.

## Struktur Folder

```
diary-app/
├── App.js
├── assets/
│   ├── avatar/profile.jpg
│   └── moods/ (happy, focus, calm, sad, excited .jpg)
└── src/
    ├── components/ (DiaryCard.js, Header.js)
    ├── constants/moodStyles.js
    ├── data/diaryEntries.js
    └── screens/DiaryListScreen.js
```

## Cara Menjalankan

1. Pastikan Node.js dan npm sudah terpasang.
2. Masuk ke folder proyek:
```
   cd diary-app
```
3. Pasang dependensi:
```
   npm install
```
4. Jalankan aplikasi:
```
   npx expo start -c
```
5. Scan QR code dengan **Expo Go** di HP (satu jaringan Wi-Fi dengan laptop, dan login dengan akun Expo yang sama), atau tekan `a` untuk emulator Android.