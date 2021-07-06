---
title: Multi Language
description: 'Bagian multi language badaso'
position: 40
category: 'Core Concept'
version: 1
---

## Backend

Badaso menyediakan bahasa inggris secara default untuk bahasa dari backend. Untuk mengubah bahasa, perlu dibuatkan konfigurasi lokalisasi untuk laravel, konfigurasi ini dapat diatur melalui `.env`. Kode di bawah adalah struktur direktori untuk menambahkan bahasa baru.

```
📦 Your Project
┃ ┣ 📂 resources
┃ ┃ ┣ 📂 lang
┃ ┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┃ ┣ 📂 en
┃ ┃ ┃ ┃ ┃ ┣ 📜 api_response.php
┃ ┃ ┃ ┃ ┃ ┣ 📜 validation.php
┃ ┃ ┃ ┃ ┣ 📂 add your lang
┃ ┃ ┃ ┃ ┃ ┣ 📜 api_response.php
┃ ┃ ┃ ┃ ┃ ┣ 📜 validation.php
```

## Frontend

For some labels on the frontend, also use a separate language from backend. The code below is the language directory structure in frontend. The language on the frontend can be changed via the header navbar on the dashboard. The language in frontend only changes labels on frontend, not including responses from backend Badaso.

```
📦 Your Project
┃ ┣ 📂 resources
┃ ┃ ┣ 📂 js
┃ ┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┃ ┣ 📂 lang
┃ ┃ ┃ ┃ ┃ ┣ 📜 en.js
┃ ┃ ┃ ┃ ┃ ┣ 📜 id.js
```