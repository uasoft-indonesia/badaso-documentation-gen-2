---
title: Upload File
description: 'Badaso CRUD generator upload file field details'
position: 30
category: 'Components'
version: 1
---

Badaso menyediakan sebuah komponen untuk mengunggah file, yaitu BadasoUploadFile. File yang diunggah, akan di generate menjadi base64 untuk dikirim ke backend. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoUploadFile

Kode di bawah merupakan sampel untuk penggunaan BadasoUploadFile pada Vue Template.


```vue
<badaso-upload-file
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-file>
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
    default: "Upload File",
},
placeholder: {
    type: String,
    default: "Upload File",
},
value: {
    type: Object | String,
    default: () => {
    return {};
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