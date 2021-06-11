---
title: Role And Permission
description: 'Badaso role and permission section'
position: 3
category: 'Core Concept'
version: 1
---

## CRUD Generated

Every time a CRUD is created using the CRUD generator, you can decide whether you want to generate permissions or not. If you generate permissions, 5 permissions will be generated automatically with the following format.

- browse_{{ TABLE_NAME }}
- read_{{ TABLE_NAME }}
- edit_{{ TABLE_NAME }}
- add_{{ TABLE_NAME }}
- delete_{{ TABLE_NAME }}

For example:

* browse_posts
* read_posts
* edit_posts
* add_posts
* delete_posts

Every permission that is generated will be automatically assigned to the administrator's permission, so users who log in with administrator privileges will immediately have the permission.

## User Management

The following is a user management view. In this feature, users who have logged in can view, edit, add and delete user information and determine the role for that user.

![user-management](role-permission/user-management.png)

## Role Management

The following display is a display of role management features, this feature is used to determine what role will be used on the system, by default there is only 1, namely Administrator.

![role-management](role-permission/role-management.png)

## Permission Management

Permission Management is a feature for managing permissions or CRUD permissions. The following is a view of permission management.

![permission-management](role-permission/permission-management.png)

## User Role Management

Each user can have at least 1 or more role. Below is a view of role management for user.

![user-role-management](role-permission/user-role-management.png)

## Role Permission Management

Every role has a permission. The following is a view of the role permission management.

![role-permission-management](role-permission/role-permission-management.png)