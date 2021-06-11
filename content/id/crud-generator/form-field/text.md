---
title: Text
description: 'Badaso CRUD generator text field details'
position: 18
category: 'Form Field'
version: 1
---

Badaso menyediakan sebuah komponen input berupa teks pendek, yaitu BadasoText. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.


```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoText

Kode di bawah merupakan sampel untuk penggunaan BadasoText pada Vue Template.


```vue
<badaso-text
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-text>
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
additionalInfo: {
    type: String,
    default: "",
},
alert: {
    type: String|Array,
    default: "",
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
readonly: {
    type: Boolean,
    default: false,
},
disabled: {
    type: Boolean,
    default: false,
},
autofocus: {
    type: Boolean,
    default: false,
},
required: {
    type: Boolean,
    default: false,
},

```