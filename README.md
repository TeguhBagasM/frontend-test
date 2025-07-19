# Full stack Developer Intern Test - PT Aksamedia

**Nama:** Teguh Bagas Mardiansyah  
**Posisi:** Full stack Developer Intern  
**Perusahaan:** PT Aksamedia Mulia Digital

## 📋 Deskripsi Project

Aplikasi web responsif yang dibuat untuk memenuhi test masuk magang Frontend Developer di PT Aksamedia Mulia Digital. Aplikasi ini menampilkan kemampuan dalam membuat website yang interaktif, responsif, dan modern menggunakan teknologi web terkini.

## 🚀 Teknologi yang Digunakan

- **React 18** - JavaScript library untuk membangun user interface
- **Tailwind CSS** - Utility-first CSS framework untuk styling
- **Local Storage** - Browser storage untuk persistence data

## ✨ Fitur Utama

### 🔐 Authentication System

- Login tanpa API dengan static credentials
- Session persistence setelah browser refresh
- Route protection untuk halaman yang memerlukan autentikasi
- Logout functionality dengan dropdown di navbar

### 📊 CRUD Operations

- **Create** - Tambah data baru
- **Read** - Tampilkan daftar data dengan pagination
- **Update** - Edit data yang sudah ada
- **Delete** - Hapus data
- **Search/Filter** - Pencarian data real-time
- **Pagination** - Navigasi halaman data (custom implementation)
- **State Persistence** - Maintain state saat refresh menggunakan query string

### 🎨 Theme System

- **Light Mode** - Tema terang
- **Dark Mode** - Tema gelap
- **System Mode** - Mengikuti preferensi sistem operasi
- Auto-detection perubahan theme sistem
- Theme persistence di localStorage

### 👤 Profile Management

- Edit profile user yang sedang login
- Real-time update nama di navbar
- Data persistence setelah refresh

### 📱 Responsive Design

- **Desktop** - Layout optimal untuk layar besar
- **Tablet** - Adaptasi untuk layar medium
- **Mobile** - User-friendly untuk smartphone
- Modern UI/UX dengan Tailwind CSS

## 🏗️ Struktur Project

```
src/
├── components/
│   ├── Auth/
│   │   └── Login.jsx
│   ├── Common/
│   │   ├── Dropdown.jsx
│   │   ├── Modal.jsx
│   │   └── Pagination.jsx
│   ├── CRUD/
│   │   ├── DataEdit.jsx
│   │   ├── DataForm.jsx
│   │   └── DataList.jsx
│   ├── Layout/
│   │   ├── Layout.jsx
│   │   └── Navbar.jsx
│   └── Profile/
│       └── ProfileEdit.jsx
├── contexts/
│   ├── AuthContext.js
│   └── ThemeContext.js
├── hooks/
│   ├── useAuth.js
│   ├── useLocalStorage.js
│   └── useTheme.js
├── utils/
│   └── storage.js
├── App.jsx
├── App.css
└── main.jsx
```

## 🔧 Setup dan Instalasi

### Prerequisites

- Node.js (v16 atau lebih baru)
- npm atau yarn

### Langkah Instalasi

1. **Clone repository**

   ```bash
   git clone https://github.com/TeguhBagasM/frontend-test.git
   cd frontend-test
   ```

2. **Install dependencies**

   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Jalankan development server**

   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. **Build untuk production**
   ```bash
   npm run build
   # atau
   yarn build
   ```

## 🔑 Cara Penggunaan

### Login

- **Username:** `admin`
- **Password:** `pastibisa`

### Navigasi

1. **Dashboard** - Halaman utama dengan overview fitur
2. **Data Management** - CRUD operations dengan search dan pagination
3. **Profile** - Edit informasi profile user
4. **Theme Toggle** - Ubah tema aplikasi

### Fitur CRUD

- **Tambah Data:** Klik tombol "Add New" di halaman Data List
- **Edit Data:** Klik tombol "Edit" di setiap row data
- **Hapus Data:** Klik tombol "Delete" di setiap row data
- **Search:** Gunakan search box untuk mencari data
- **Pagination:** Navigasi halaman di bagian bawah tabel

## 📝 Fitur Khusus

### State Persistence

- Aplikasi mempertahankan state saat refresh browser
- Posisi pagination dan keyword search tersimpan di URL
- User tetap login sampai logout manual

### Theme Management

- Mendukung 3 mode theme: Light, Dark, System
- Auto-detection perubahan theme sistem operasi
- Smooth transition antar tema

### Responsive Design

- Mobile-first approach
- Breakpoints yang optimal untuk semua device
- Touch-friendly interface untuk mobile

## 🎯 Pemenuhan Requirement

### ✅ Requirement Terpenuhi

- [x] HTML semantic dan clean code
- [x] CSS dengan Tailwind (tanpa library UI)
- [x] JavaScript ES6+ modern features
- [x] React.js untuk komponen interaktif
- [x] Responsive design (desktop, tablet, mobile)
- [x] Authentication tanpa API
- [x] CRUD operations dengan localStorage
- [x] Search/filter dan pagination custom
- [x] State persistence dengan query string
- [x] Route protection
- [x] Dark/Light/System theme mode
- [x] Profile edit dengan real-time update
- [x] Dropdown custom tanpa library

### 🎨 Kualitas Kode

- Clean code dengan struktur yang terorganisir
- Reusable components dan custom hooks
- Consistent naming conventions
- Responsive design patterns
- Modern React patterns (Hooks, Context API)

## 🔗 Links

- **Live Demo:** https://frontend-intern-aksamedia.vercel.app/

## 👨‍💻 Developer

**Teguh Bagas Mardiansyah**  
Frontend Developer Intern Candidate  
PT Aksamedia Mulia Digital

---

_Dibuat dengan ❤️ untuk test masuk magang Fullstack Developer_
