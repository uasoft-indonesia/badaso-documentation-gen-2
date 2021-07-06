---
title: Routing
description: 'Bagian routing badaso'
position: 35
category: 'Core Concept'
version: 1
---

Pada halaman ini dijelaskan mengenai routing frontend dan backend untuk CRUD yang di-generate.

konfigurasi `.env`:
```[.env]
MIX_API_ROUTE_PREFIX=
MIX_ADMIN_PANEL_ROUTE_PREFIX=
```

## CRUD Generated Routes

### Backend

Berikut ini merupakan tipe URL API yang dipanggil untuk Backend.

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

Berikut ini merupakan tipe URL API yang dipanggil untuk Frontend.

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