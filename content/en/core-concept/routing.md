---
title: Routing
description: 'Badaso routing section'
position: 2
category: 'Core Concept'
version: 1
---

This page explains the frontend and backend routing for the generated CRUD.

`.env` configuration:
```[.env]
MIX_API_ROUTE_PREFIX=
MIX_ADMIN_PANEL_ROUTE_PREFIX=
```

## CRUD Generated Routes

### Backend

The following is the type of API URL called for the backend.

* Browse/Index (List) : GET

```
BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG
```

* Add/Create : POST

```
BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/add
```

* Read/Detail : GET

```
BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/read
```

* Edit/Update : PUT

```
BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/edit
```

* Delete/Remove : DELETE

```
BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/delete
```


### Frontend

The following is the type of API URL called for the Frontend.

* Browse/Index (List)

```
BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG
```

* Add/Create

```
BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG/add
```

* Read/Detail

```
BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG/ID/detail
```

* Edit/Update

```
BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG/ID/edit
```