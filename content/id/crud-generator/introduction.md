---
title: Introduction
description: 'Pengenalan badaso CRUD generator'
position: 7
category: 'CRUD Generator'
version: 1
---

Ketika menambahkan atau mengubah CRUD yang telah ada, kamu akan melihat beberapa info yang dapat kamu ubah yaitu Display Name (Singular dan Plural), Server Side, URL Slug, Icon, Model Name, Controller Name, Order Column, Order Display Column, Order Direction dan Description. Kamu juga dapat memilih jika kamu ingin membuat permission secara otomatis.

## Membuat Deskripsi Tabel
![crud-add-image](/crud-generator/introduction/crud-add-part-1.png)

## Setel Properti Field
* BROWSE (menyetel field yang akan tampil ketika kamu menjelajahi data).
* READ (menyetel field yang akan tampil ketika kamu menampilkan satu data).
* EDIT (menyetel field yang akan tampil dan dapat diubah ketika kamu mengubah data).
* ADD (menyetel field yang akan tampil dan dapat ditambah ketika kamu menambahkan data).
* DELETE (tidak memiliki efek apapun, jadi ini bisa dicentang atau tidak).

![generate-crud](/crud-generator/introduction/generate-crud.png)

## Add CRUD

- Table Name

  Nama table untuk membuat CRUD generator

- Display Name (Singular)

  Nama ini untuk di tampilkan pada breadcrumb dan title dari browse data tabel 
- URL Slug (must be unique)

  Nama ini untuk di tampilkan pada alamat url sebagai slug yang nanti akan menjadi pembeda page untuk browse data table lain, nama slug harus bersifat unique

- Model Name

  Berupa gambungan dari namespace dan name class pada model, contoh : App/Models/User. Badaso akan menggunakan model anda untuk proses CRUD
  
- Order Columns

  Pilih nama column untuk di jadikan urutan awal dari browse data table 

- Generate Permission

  Hidupkan generate permission untuk membuat user permission CRUD data table secara otomatis

- Server Side

  Hidupkan server side jika membutuhkan data secara query pada server dan untuk menagani data dalam jumlah besar 

- Create Soft Delete

  Buat soft delete jika membutuhkan data yang di hapus dapat di kembalikan ulang, khusus untuk soft delete sebelum mengaktifkan ini pastikan terlebidahulu pada table kamu terdapat colums dengan nama "deleted_at" dan tipe data "timestamp"

- Display Name (Plural)

  Nama yang di isi pada display name akan ditampilkan pada item menu admin

- Icon

  Icon yang akan ditampilkan pada item admin menu 

- Controller Name

  Overrite controller CRUD generator dengan menginputkan namespace dan nama class pada conttroler, contoh : App\Http\Controllers\TestController

- Order Display Column

  Column yang di pilih pada bagian ini akan diisi dengan angka secara otomatis untuk mengurutkan data

- Order Direction

  Terdapat dua pilihan untuk mengurutkan data secara asscending atau descending

- Active Event Notification

  Event untuk mengirimkan notifikasi, terdapat pilihan On Create event notifikasi saat membuat data baru, On Read event notifikasi saat membaca data, On Update event notifikasi saat mengedit data, dan On Delete event notifikasi saat menghapus data.

- Description

  Memberikan desckripsi pada CRUD generator data tabel

## Hasil Form

Berikut ini hasil tampilan dari field yang tersedia di Badaso.

![form-field](/crud-generator/introduction/form-field.png)

## Output Form

Setiap form yang di generate, akan menggunakan Vue Component yang sudah disediakan Badaso. Pada JSON di bawah, properti value adalah output nilai dari tiap form, dan field adalah nama kolom dari tabel yang di generate.

```json [JSON]
{
  "data": [
    {
      "field": "badaso_text",
      "value": 227
    },
    {
      "field": "badaso_password",
      "value": "password"
    },
    {
      "field": "badaso_textarea",
      "value": "textarea"
    },
    {
      "field": "badaso_search",
      "value": "search"
    },
    {
      "field": "badaso_checkbox",
      "value": [
        "this_is_value"
      ]
    },
    {
      "field": "badaso_number",
      "value": "1"
    },
    {
      "field": "badaso_url",
      "value": "http://dev.programming-bot.com/badaso-admin/main/data-test/add"
    },
    {
      "field": "badaso_time",
      "value": "2021-01-27T10:18:00.000Z"
    },
    {
      "field": "badaso_date",
      "value": "2021-01-27T00:00:00.000Z"
    },
    {
      "field": "badaso_select",
      "value": "this_is_value"
    },
    {
      "field": "badaso_datetime",
      "value": "2021-01-27T10:18:00.000Z"
    },
    {
      "field": "badaso_select_multiple",
      "value": [
        "this_is_value"
      ]
    },
    {
      "field": "badaso_radio",
      "value": "this_is_value"
    },
    {
      "field": "badaso_switch",
      "value": true
    },
    {
      "field": "badaso_slider",
      "value": 22
    },
    {
      "field": "badaso_editor",
      "value": "<p>editor</p>"
    },
    {
      "field": "badaso_tags",
      "value": "badaso,tags"
    },
    {
      "field": "badaso_color_picker",
      "value": "#754B4B"
    },
    {
      "field": "badaso_upload_image",
      "value": {
        "name": "blog.jpg",
        "base64": "string too long",
        "file": {}
      }
    },
    {
      "field": "badaso_upload_image_multiple",
      "value": [
        {
          "name": "categories.jpg",
          "base64": "string too long",
          "file": {}
        },
        {
          "name": "event.jpg",
          "base64": "string too long",
          "file": {}
        }
      ]
    },
    {
      "field": "badaso_upload_file",
      "value": {
        "name": "halaman.jpg",
        "base64": "string too long",
        "file": {}
      }
    },
    {
      "field": "badaso_upload_file_multiple",
      "value": [
        {
          "name": "kelas.jpg",
          "base64": "string too long",
          "file": {}
        },
        {
          "name": "mentor.jpg",
          "base64": "string too long",
          "file": {}
        }
      ]
    },
    {
      "field": "badaso_hidden",
      "value": "hidden"
    }
  ]
}
```
## Catatan

Setiap komponen yang disediakan Badaso ditujukan untuk digunakan di dalam tag dengan css class `row`. Semua komponen yang disedikan Badaso merupakan komponen yang terdiri dari `vs-col`. Jadi pada CRUD generator, bagian Optional Details dapat di isi JSON dengan properti `size`. Properti size ini berisi angka 1-12 yang mana angka ini adalah nilai untuk diterapkan pada `vs-col`. Contoh:

```vue [.vue]
<vs-row>{{component}}</vs-row>
```