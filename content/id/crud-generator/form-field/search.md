---
title: Search
description: 'Badaso CRUD generator search field details'
position: 12
category: 'Form Field'
version: 1
---

Badaso menyediakan sebuah komponen input untuk pencarian, yaitu BadasoSearch. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoSearch

Kode di bawah merupakan sampel untuk penggunaan BadasoSearch pada Vue Template.


```vue
<badaso-search
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-search>
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
    default: "Search"
},
placeholder: {
    type: String,
    default: "Search"
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