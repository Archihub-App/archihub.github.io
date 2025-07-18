---
title: 'Migration process of MongoDB: 5.0.xx to 7.0.xx'
description: ''
---


## ✅ MongoDB Upgrade Checklist: 5.0 → 7.0

### ⚠️ **Important concepts**

* MongoDB upgrades must be **major version by major version**, no skipping feature compatibility upgrades.
* Your **featureCompatibilityVersion (FCV)** controls data features, not just binaries.
* If you skip an FCV step, you'll get errors like "invalid feature compatibility version value".
* Until version 0.9.7, Archihub used MongoDB 5.0.xx. From version 0.9.8 onwards, it uses MongoDB 7.0.xx, so if you are using Archihub 0.9.7 or earlier, you need to follow this migration process.

---

### 🟢 **Preparation**
### 1. Backup

Backup the data volume generally located at `/data/db` in Archihub's MongoDB container.

---

### 2. Check current FCV on MongoDB 5.0

Connect (mongosh or Compass):

```js
db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 })
```

Expected:

```
{ featureCompatibilityVersion: { version: "5.0" }, ok: 1 }
```

---

### 🚀 **Upgrade steps**
#### 🔵 **Step A: Upgrade to MongoDB 6.0**

#### 1. Upgrade to MongoDB 6.0 in the docker-compose.yml file
Replace the MongoDB image version in your `docker-compose.yml` file:
```yaml
archihub_mongodb_server_01:
  image: mongo:6.0.24
```
Then start the container again:

```bash
docker compose up --build -d
```

#### 2. Connect & verify version

```bash
docker exec -it <container_name> mongod --version
```

The container name should be `archihub_mongodb_server_01` or similar, depending on your setup.

Check that it shows 6.0.24.

---

#### 3. Verify FCV

```js
db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 })
```

It should still show `"5.0"`.

---

#### 4. Update FCV to 6.0

```js
db.adminCommand({ setFeatureCompatibilityVersion: "6.0" })
```

Verify:

```js
db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 })
```

✅ Now it should show `"6.0"`.

---

#### 🔵 **Step B: Upgrade to MongoDB 7.0**
#### 1. Stop MongoDB 6.0

```bash
docker stop <container_name>
```

---

#### 2. Upgrade to MongoDB 7.0 in the docker-compose.yml file
Replace the MongoDB image version in your `docker-compose.yml` file:
```yaml
archihub_mongodb_server_01:
  image: mongo:7.0.21
```

Then start the container again:

```bash
docker compose up --build -d
```

---

#### 3. Check version

```bash
docker exec -it <container_name> mongod --version
```

✅ Should show 7.0.21.

---

#### 4. Check FCV

```js
db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 })
```

Expected to show `"6.0"` — that's normal.

---

#### 5. Update FCV to 7.0

```js
db.adminCommand({ setFeatureCompatibilityVersion: "7.0" })
```

Verify:

```js
db.adminCommand({ setFeatureCompatibilityVersion: "7.0", confirm: true })
```

✅ Now it should show `"7.0"`.

---

## 🎉 **Done!**

### ✅ Final status

| Binary version | FCV value |
| -------------- | --------- |
| 7.0.x          | 7.0       |

---