---
title: Introduction
description: 'The introduction for CRUD generator'
position: 7
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

## Add CRUD

- Table Name

  The name of the table to create a CRUD generator

- Display Name (Singular)

  This name is to be displayed in the breadcrumb and the title of the browse data table
- URL Slug (must be unique)

  This name is to be displayed on the url address as a slug which will later become a differentiating page for browsing other data tables, the slug name must be unique

- Model Name

  In the form of a combination of the namespace and name class on the model, for example: App/Models/User. Badaso will use your model for CRUD proses
  
- Order Columns

  Select the column name to be the initial order of the browse data table

- Generate Permissions

  Turn on generate permissions to automatically generate CRUD data table user permissions

- Server Side

  Turn on server side if you need data querying the server and for handling large amounts of data

- Create Soft Delete

  Make a soft delete if you need the deleted data can be returned, especially for soft delete before activating this, make sure that your table has columns with the name "deleted_at" and the data type "timestamp" 

- Display Name (Plural)

  The name entered in the display name will be displayed on the admin menu item

- Icon

  Icon that will be displayed on the admin menu item

- Controller Name

  Overrite controller CRUD generator by inputting namespace and class name in controller, for example: App\Http\Controllers\TestController

- Order Display Column

  The column selected in this section will be filled with numbers automatically to sort the data

- Order Direction

  There are two options for sorting data in ascending or descending order

- Active Event Notification

  Events to send notifications, there are options On Create notification event when creating new data, On Read notification event when reading data, On Update notification event when editing data, and On Delete notification event when deleting data.

- Description

  Provide a description of the table data generator CRUD

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
