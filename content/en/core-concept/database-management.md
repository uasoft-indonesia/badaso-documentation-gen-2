---
title: Database Management
description: 'Badaso database management section'
position: 42
category: 'Core Concept'
version: 1
---

Badaso provides awesome database management features that can create tables, modify tables, delete tables, migrate tables, and delete migration files. Simply put, Badaso provides database management features without the need to create migration files using artisan laravel.

You can visit it in the menu `Configuration -> Database Management` and you will see your current table in the database. You can also click the **Add Table** button to create a new table in your database.

![browse-table](database-management/browse-table.jpeg)

On this page you can also perform **Rollback Migration**, **Alter Table** and **Drop Table**.

<alert type="warning">
If you use this feature, then you cannot manually change laravel migrations or table properties. If there are changes that are not registered by Badaso, the migration will not sync or will not working properly.
</alert>

<alert>
Any changes made will be automatically generated a migration file.
</alert>

## Create Table

On this page you can create a new table. The following is a breakdown of the available fields.

* `Table Name`: Input for a table name that only allows alphanumeric and underscore characters.
* `Timestamp`: If input is checked, the created table will have created_at and updated_at fields with the data type timestamp on the newly created table.
* `Field Name`: Input for the field names in the new table. This input only allows alphanumeric and underscore characters.
* `Field Type`: Input for the type of field in the new table.
* `Length/Value`: Input for length (varchar, char) or value (set, enum).
  * This field is required if the field type is varchar, char, set or enum.
  * If the field type is varchar or char, the input value must be an integer or number.
  * If the field type is enum or set, the input value must be an array with a comma separator (no spaces).
  * If the field type is an integer, big integer, float or other then this input can function as a decimal point with a comma separator (without spaces).
* `Auto Increment`: Input for auto increment on the table. Only one auto increment on the table is allowed. If the field type is empty when checking auto increment, then the field type will automatically becomes big integer and the index field becomes primary.
* `Nullable`: Input for a nullable field.
* `Default`: Input for the default field.
* `As Defined`: Input the value of the default field when selecting As Defined.
* `Index`: Input for the index field.
* `Attribute`: Input for field attributes.

![create-table](database-management/add-table.png)

## Alter Table

On this page you can make changes to your table such as adding fields, deleting fields, changing field details and changing the table name. The details of the fields are the same as in the Create Table.

! [alter-table] (database-management / alter-table.png)

<alert>
A table's timestamp will be automatically detected if it has a `updated_at` field with the field type` timestamp` and a `created_at` field with the` timestamp` field type.
</alert>

This is what the edit field looks like when altering the table.

![alter-field](database-management/edit-field.png)

## Drop Tables

On this page you can delete a table by pressing the **Drop Table** button.

![browse-table](database-management/browse-table.jpeg)

## Rollback Migration

When you want to rollback a migration, check the desired limits and then press the Rollback Migration button. If you want to delete the migration files at once, then tick **Delete Migration File?**.

![rollback-migration](database-management/rollback-migration.png)

## Rollback Conflict

When the migration on the database does not match the migration files in your project folder, a conflict will appear as shown. To resolve this conflict, you are asked to migrate the migration file that is not synchronized or delete the migration file.

</alert>warning
When a conflict occurs, you cannot do anything to Database Management. You must resolve this conflict first.
</alert>

![rollback-migration](database-management/rollback-conflict.png)