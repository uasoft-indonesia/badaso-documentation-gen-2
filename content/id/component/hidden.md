---
title: Hidden
description: 'Badaso CRUD generator hidden field details'
position: 7
category: 'Components'
version: 1
---

Badaso menyediakan sebuah komponen input tersembunyi, yaitu BadasoHidden. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
    "size": "6", // 1-12 default 12
    "value": "" // harus diisi saat generate CRUD jika kolom pada table tidak boleh null
}
```

## View: BadasoHidden

Kode di bawah merupakan sampel untuk penggunaan BadasoHidden pada Vue Template.

```vue
<badaso-hidden
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    :alert="error">
</badaso-hidden>
```

## `props`

Berikut merupakan daftar props yang disediakan komponen ini.

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Text",
},
placeholder: {
    type: String,
    default: "Text",
},
value: {
    type: String,
    required: true,
    default: "",
},
additionalInfo: {
    type: String,
    default: "",
},
alert: {
    type: String|Array,
    default: "",
},
```