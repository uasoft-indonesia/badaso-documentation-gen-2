---
title: Radio
description: 'Badaso CRUD generator radio field details'
position: 10
category: 'Form Field'
version: 1
---

Badaso menyediakan sebuah komponen input berupa pilihan dengan radio button, yaitu BadasoRadio. Pada saat generate CRUD, lebar container untuk komponen ini dapat diatur pada Optional Details dengan format seperti kode di bawah. Untuk menggunakan radio, pada saat membuat CRUD properti `items` pada Optional Details harus diisi.

```json
{
    "size": "6", // 1-12 default 12
    "items": [
        {
            "label": "This is label",
            "value": "this_is_value"
        }
    ]
}
```

## View: BadasoRadio

Kode di bawah merupakan sampel untuk penggunaan BadasoRadio pada Vue Template.


```vue
<badaso-radio
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items">
</badaso-radio>
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
    default: "Radio",
},
placeholder: {
    type: String,
    default: "Radio",
},
value: {
    type: String,
    required: true,
},
items: {
    type: Array,
    required: true,
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