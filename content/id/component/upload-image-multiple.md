---
title: Upload Image Multiple
description: 'Badaso CRUD generator upload multiple image field details'
position: 23
category: 'Components'
version: 1
---

Badaso menyediakan sebuah komponen untuk mengunggah beberapa file gambar sekaligus, yaitu BadasoUploadImageMultiple. Setiap file yang diunggah, akan di generate menjadi base64 untuk dikirim ke backend. Beda dengan BadasoUploadFile, BadasoUploadImage dan BadasoUploadImageMultiple akan langsung menampilkan gambar setelah diunggah. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoUploadImageMultiple

Kode di bawah merupakan sampel untuk penggunaan BadasoUploadImageMultiple pada Vue Template.


```vue
<badaso-upload-image-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-image-multiple>
```

## `props`

Berikut merupakan daftar props yang disediakan komponen ini.

```js
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Upload Image Multiple",
},
placeholder: {
    type: String,
    default: "Upload Image Multiple",
},
value: {
    type: Array,
    default: () => {
    return [];
    },
},
additionalInfo: {
    type: String,
    default: "",
},
alert: {
    type: String|Array,
    default: "",
},
type: {
    type: String,
},
```

<alert>
Untuk props <code>type</code>, dapat dipilih antara <code>private-only</code> atau <code>shares-only</code>.
</alert>