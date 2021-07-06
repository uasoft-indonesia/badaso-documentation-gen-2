---
title: Text Area
description: 'Badaso CRUD generator text area field details'
position: 26
category: 'Components'
version: 1
---

Badaso menyediakan sebuah komponen input berupa teks yang lebih panjang, yaitu BadasoTextarea. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoTextarea

Kode di bawah merupakan sampel untuk penggunaan BadasoTextarea pada Vue Template.


```vue
<badaso-textarea
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-textarea>
```

## `props`

Berikut merupakan daftar props yang disediakan komponen ini.

```
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "Textarea"
},
placeholder: {
    type: String,
    default: "Textarea"
},
value:  {
    type: String,
    required: true,
    default: 'null'
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