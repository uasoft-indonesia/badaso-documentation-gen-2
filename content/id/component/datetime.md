---
title: Date Time
description: 'Badaso CRUD generator date time field details'
position: 5
category: 'Components'
version: 1
---

Badaso menyediakan sebuah komponen input untuk tanggal dan waktu, yaitu BadasoDatetime. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```JSON
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoDatetime

Kode di bawah merupakan sampel untuk penggunaan BadasoDatetime pada Vue Template.


```vue
<badaso-datetime
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-datetime>
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
    default: "Date Time",
},
placeholder: {
    type: String,
    default: "Date Time",
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