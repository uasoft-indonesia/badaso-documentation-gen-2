---
title: Introduction
description: 'The introduction for CRUD generator'
position: 1
category: 'CRUD Generator'
version: 1
---

When adding or editing an existing CRUD, you will see some information that you can change, namely Display Name (Singular and Plural), Server Side, URL Slug, Icon, Model Name, Controller Name, Order Column, Order Display Column, Order Direction and Description. You can also choose if you want to make a Permission automatically.

## Create Table Description
![crud-add-image](introduction/crud-add-part-1.png)

## Set Field Property
* Browse (sets the field that will appear when you browse the current data).
* Read (set the field that will appear when you display one data).
* Edit (set field that will appear and can be changed when you edit the data).
* Ad (set field that will appear and can be added when you add data).
* Delete (it doesn't have any effect, so it can be checked or not).

![generate-crud](introduction/generate-crud.png)

## Form Result

The following is the display result of field that available at Badaso.

![form-field](introduction/form-field.png)

## Form Output

Every form generated will use the Vue Component provided by Badaso. In the JSON below, the value property is the output value of each form, and field is the column name of the table generated.

```json [JSON]
{
  "data": [
    {
      "field": "badaso_text",
      "value": 227
    },
    {
      "field": "badaso_password",
      "value": "password"
    },
    {
      "field": "badaso_textarea",
      "value": "textarea"
    },
    {
      "field": "badaso_search",
      "value": "search"
    },
    {
      "field": "badaso_checkbox",
      "value": [
        "this_is_value"
      ]
    },
    {
      "field": "badaso_number",
      "value": "1"
    },
    {
      "field": "badaso_url",
      "value": "http://dev.programming-bot.com/badaso-admin/main/data-test/add"
    },
    {
      "field": "badaso_time",
      "value": "2021-01-27T10:18:00.000Z"
    },
    {
      "field": "badaso_date",
      "value": "2021-01-27T00:00:00.000Z"
    },
    {
      "field": "badaso_select",
      "value": "this_is_value"
    },
    {
      "field": "badaso_datetime",
      "value": "2021-01-27T10:18:00.000Z"
    },
    {
      "field": "badaso_select_multiple",
      "value": [
        "this_is_value"
      ]
    },
    {
      "field": "badaso_radio",
      "value": "this_is_value"
    },
    {
      "field": "badaso_switch",
      "value": true
    },
    {
      "field": "badaso_slider",
      "value": 22
    },
    {
      "field": "badaso_editor",
      "value": "<p>editor</p>"
    },
    {
      "field": "badaso_tags",
      "value": "badaso,tags"
    },
    {
      "field": "badaso_color_picker",
      "value": "#754B4B"
    },
    {
      "field": "badaso_upload_image",
      "value": {
        "name": "blog.jpg",
        "base64": "string too long",
        "file": {}
      }
    },
    {
      "field": "badaso_upload_image_multiple",
      "value": [
        {
          "name": "categories.jpg",
          "base64": "string too long",
          "file": {}
        },
        {
          "name": "event.jpg",
          "base64": "string too long",
          "file": {}
        }
      ]
    },
    {
      "field": "badaso_upload_file",
      "value": {
        "name": "halaman.jpg",
        "base64": "string too long",
        "file": {}
      }
    },
    {
      "field": "badaso_upload_file_multiple",
      "value": [
        {
          "name": "kelas.jpg",
          "base64": "string too long",
          "file": {}
        },
        {
          "name": "mentor.jpg",
          "base64": "string too long",
          "file": {}
        }
      ]
    },
    {
      "field": "badaso_hidden",
      "value": "hidden"
    }
  ]
}
```
## Note

Every component provided by Badaso is intended to be used within tags with the css class `row`. All components provided by Badaso are components that consist of `vs-col`. So in CRUD generator, the Optional Details section can be filled in JSON with the property `size`. This property size contains the numbers 1-12 which is the value to apply to `vs-col`.
Example:

```vue [.vue]
<vs-row>{{component}}</vs-row>
```
