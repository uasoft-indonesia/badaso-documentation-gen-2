---
title: Push Notification
description: 'Badaso push notification section'
position: 14
category: 'Core Concept'
version: 1
---

Badaso provides firebase cloud messaging for push notifications. You can register the event of each CRUD generated table which is onCreate, onRead, onUpdate, onDelete.

- Setup the .env file
```
# ADD FIREBASE ENV
# GET THE VALUE FROM FIREBASE IN PROJECT SETTING > GENERAL
MIX_FIREBASE_API_KEY=""
MIX_FIREBASE_AUTH_DOMAIN=""
MIX_FIREBASE_PROJECT_ID=""
MIX_FIREBASE_STORAGE_BUCKET=""
MIX_FIREBASE_MESSAGE_SEENDER=""
MIX_FIREBASE_APP_ID=""
MIX_FIREBASE_MEASUREMENT_ID=""

# GET THE VALUE FROM FIREBASE IN PROJECT SETTING > CLOUD MESSAGES 
MIX_FIREBASE_WEB_PUSH_CERTIFICATES=""

# GET THE VALUE FROM FIREBASE IN PROJECT SETTING > CLOUD MESSAGES FROM BOX KEY PAIR > WEB PUSH CERTIFICATE
MIX_FIREBASE_SERVER_KEY=""
```

- Call the command `php artisan badaso:firebase-sw`

## Use the `FCMNotification` class

The following is an example of using the `FCMNotification` class for push notification needs.

```php
// ======== Instantiate the class ========

$notification = new FCMNotification ();

// ======== Sending the notification ========

$notification->send(
  [tokenClientFirebaseCloudNotification: string] array, 
  title: string, 
  message: string, 
  data: [key => value, ...] array
);

// ======== Example ========
// $notification->send(
//    ["eKk2LSpXVE4hasCAP9t7Vy:APA91bHafroaQcAI3hTdXLYLXCRpaXSgZOqoNWVnNxMut8LlLJJ-LQJVjok2fONRV7c_J_JtymY7Q13F5d0SLxycRCTbv8539uuez2S1aka8yAXHBGg_Kd2xmjwEKTtR3D41cyZc3iSj"], 
//    "Title", 
//    "Message", 
//    ["userId" => 65372]
// );
```