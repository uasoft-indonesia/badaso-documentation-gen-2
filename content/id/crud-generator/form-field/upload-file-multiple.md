---
title: Upload File Multiple
description: 'Badaso CRUD generator upload multiple file field details'
position: 21
category: 'Form Field'
version: 1
---

Badaso menyediakan sebuah komponen pengunggah beberapa file sekaligus, yaitu BadasoUploadFileMultiple. Setiap file yang diunggah, akan di generate menjadi base64 untuk dikirim ke backend. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoUploadFileMultiple

Kode di bawah merupakan sampel untuk penggunaan BadasoUploadFileMultiple pada Vue Template.

```vue
<badaso-upload-file-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-file-multiple>
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
    default: "Upload File Multiple",
},
placeholder: {
    type: String,
    default: "Upload File Multiple",
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