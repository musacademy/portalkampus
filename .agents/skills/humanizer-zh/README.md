# Humanizer: Skill Poles Bahasa Indonesia Santai & Luwes

Skill ini bertugas mengedit tulisan artikel, opini, blog, dokumen, hingga teks website agar bahasanya lebih santai, mengalir alami, dan enak dibaca. Fokusnya adalah membersihkan gaya bahasa kaku, repetitif, dan pola klise ala AI (slop), sambil tetap menjaga fakta asli, tingkat kepastian, dan karakter penulisnya.

Bisa dipakai untuk teks langsung atau dokumen file. Output utamanya adalah versi akhir yang sudah rapi dan siap pakai. Kalimat yang memang sudah bagus tidak akan diubah seenaknya.

> **Catatan:** Ini adalah panduan instruksi (skill) untuk AI Agent, bukan software detektor plagiarisme/AI. Tujuannya adalah meningkatkan kualitas rasa bahasa agar tidak kaku, bukan untuk memalsukan identitas penulis.

---

## Cara Pakai

### Untuk Mengedit Teks Langsung
```text
Tolong poles teks berikut dengan humanizer, bikin lebih santai dan mengalir:
[teks asli kamu di sini]
```

### Untuk Mengedit File Dokumen
```text
Tolong poles teks di file artikel.md pakai humanizer, bikin lebih santai tapi tetap informatif.
```

---

## Prinsip Pengeditan

1. **Jaga Fakta:** Tidak mengarang data, angka, nama orang, tanggal, atau kutipan baru.
2. **Kesesuaian Nada:** Menyesuaikan gaya bicara (santai untuk blog/opini, jelas & to-the-point untuk dokumentasi/web, rapi untuk teks formal).
3. **Pembersihan Pola Kaku:** Memangkas basa-basi kosong, kalimat dramatis lebay, buzzword AI, dan struktur kalimat pasif yang bikin pusing.
4. **Perlindungan File:** Kode program, tautan link, ID elemen, dan struktur dokumen tetap aman terlindungi.

---

## Ringkasan 31 Pola yang Diperbaiki

| Kategori | Pola Masalah yang Ditangani |
|---|---|
| **A: Basa-basi & Drama Kosong (1–5)** | Pola "Bukan cuma X tapi Y", kalimat terpotong dramatis, sok puitis/bijak, basa-basi pembuka, debat dengan musuh khayalan |
| **B: Formula Monoton & Kaku (6–11)** | Maksa format 3 kata, pengulangan subjek di tiap awal kalimat, overuse dash (—), tumpukan kata peragu, istilah aneh buatan sendiri, pasif tanpa subjek |
| **C: Berlebihan & Sok Berwibawa (12–18)** | Buzzword AI ("merevolusi", "holistik", "sinergi"), mendramatisir hal sepele, relasi berbelit-belit, ekor puji-pujian, nada brosur lebay, catut ahli tanpa nama, kalimat muter-muter |
| **D: Format & Tipografi Kaku (19–21)** | Tebal (bold) sembarangan, judul penuh hiasan/emoji lebay, tanda kutip dan baca yang berantakan |
| **E: Sisa Gaya Chatbot / Draf (22–25)** | Nada CS robotik ("Pertanyaan bagus!"), disclaimer berulang, mengulang judul di kalimat pertama, membicarakan riwayat revisi di teks final |
| **F: Bahasa Indonesia Kaku (26–31)** | Menumpuk kata "yang/dari", pola kaku "melakukan + kata kerja", pasif bertubi-tubi, klise 4 kata serangkai, pembuka klise "Seiring berkembangnya zaman...", penutup normatif kosong |

Penjelasan detail dan contoh sebelum vs sesudah untuk tiap pola bisa dilihat langsung di [`SKILL.md`](SKILL.md).

---

## Lisensi & Referensi

- Berdasarkan [blader/humanizer](https://github.com/blader/humanizer) dan [Humanizer-zh](https://github.com/op7418/Humanizer-zh).
- Referensi [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop).
- Berlisensi di bawah [MIT License](LICENSE).
