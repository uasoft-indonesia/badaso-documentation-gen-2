---
title: Number
description: 'Badaso CRUD generator number field details'
position: 16
category: 'Components'
version: 1
---

Badaso menyediakan sebuah komponen input berupa angka, yaitu BadasoNumber. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoNumber

Kode di bawah merupakan sampel untuk penggunaan BadasoNumber pada Vue Template.


```vue
<badaso-number
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-number>
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
    default: "Number"
},
placeholder: {
    type: String,
    default: "Number"
},
value:  {
    type: String,
    required: true,
    default: ''
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