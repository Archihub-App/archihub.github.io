---
title: 'Proceso de migración de MongoDB: 5.0.xx a 7.0.xx'
description: ''
---

## ✅ Lista de verificación para actualizar MongoDB: 5.0 → 7.0

### ⚠️ **Conceptos importantes**

* Las actualizaciones de MongoDB deben hacerse **versión por versión**, sin saltarse pasos de compatibilidad.
* La **featureCompatibilityVersion (FCV)** controla las características de los datos, no solo los binarios.
* Si te saltas un paso de FCV, obtendrás errores como "invalid feature compatibility version value".
* Hasta la versión 0.9.7, Archihub utilizaba MongoDB 5.0.xx. A partir de la versión 0.9.8, usa MongoDB 7.0.xx. Por lo tanto, si estás utilizando Archihub 0.9.7 o anterior, debes seguir este proceso de migración.

---

### 🟢 **Preparación**
### 1. Backup

Realiza un respaldo del volumen de datos, generalmente ubicado en `/data/db` dentro del contenedor de MongoDB de Archihub.

---

### 2. Verificar FCV actual en MongoDB 5.0

Conéctate (mongosh o Compass):

```js
db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 })
```

Esperado:

```
{ featureCompatibilityVersion: { version: "5.0" }, ok: 1 }
```

---

### 🚀 **Pasos de actualización**
#### 🔵 **Paso A: Actualizar a MongoDB 6.0**

#### 1. Actualizar a MongoDB 6.0 en el archivo docker-compose.yml
Reemplaza la versión de la imagen de MongoDB en tu archivo `docker-compose.yml`:

```yaml
archihub_mongodb_server_01:
  image: mongo:6.0.24
```

Luego inicia nuevamente el contenedor:

```bash
docker compose up --build -d
```

#### 2. Conectarse y verificar versión

```bash
docker exec -it <nombre_contenedor> mongod --version
```

El nombre del contenedor suele ser `archihub_mongodb_server_01` o similar, dependiendo de tu configuración.

Verifica que muestre 6.0.24.

---

#### 3. Verificar FCV

```js
db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 })
```

Debería seguir mostrando `"5.0"`.

---

#### 4. Actualizar FCV a 6.0

```js
db.adminCommand({ setFeatureCompatibilityVersion: "6.0" })
```

Verificar:

```js
db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 })
```

✅ Ahora debería mostrar `"6.0"`.

---

#### 🔵 **Paso B: Actualizar a MongoDB 7.0**
#### 1. Detener MongoDB 6.0

```bash
docker stop <nombre_contenedor>
```

---

#### 2. Actualizar a MongoDB 7.0 en el archivo docker-compose.yml
Reemplaza la versión de la imagen de MongoDB en tu archivo `docker-compose.yml`:

```yaml
archihub_mongodb_server_01:
  image: mongo:7.0.21
```

Luego inicia nuevamente el contenedor:

```bash
docker compose up --build -d
```

---

#### 3. Verificar versión

```bash
docker exec -it <nombre_contenedor> mongod --version
```

✅ Debería mostrar 7.0.21.

---

#### 4. Verificar FCV

```js
db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 })
```

Se espera que muestre `"6.0"` — esto es normal.

---

#### 5. Actualizar FCV a 7.0

```js
db.adminCommand({ setFeatureCompatibilityVersion: "7.0" })
```

Verificar:

```js
db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 })
```

✅ Ahora debería mostrar `"7.0"`.

---

## 🎉 **¡Listo!**

### ✅ Estado final

| Versión binaria | Valor FCV |
| --------------- | ---------- |
| 7.0.x           | 7.0       |

---
