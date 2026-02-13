# 📌 CRUD Characters API - Angular

Aplicación web desarrollada en **Angular** que permite realizar operaciones CRUD (Create, Read, Update, Delete) sobre personajes consumiendo una API REST.

---

## 🚀 Tecnologías utilizadas

- Angular
- TypeScript
- RxJS
- Angular Router
- Reactive Forms
- HttpClient
- CSS

---

## 📂 Estructura del proyecto

src/
├── app/
│ ├── components/
│ │ ├── character-details-component/
│ │ ├── characters-component/
│ │ ├── characters-form-component/
│ │ ├── header-component/
│ │ └── home-component/
│ ├── pages/
│ │ ├── character-details-page/
│ │ ├── characters-page/
│ │ ├── characters-form-page/
│ │ └──home-page/
│ ├── services/
│ │ └── character-service.ts
│ ├── app.routes.ts
│ ├── app.ts
│ ├── app.html
│ ├── app.css

## 🧩 Funcionalidades

- ✅ Listar personajes  
- ✅ Ver detalle de un personaje  
- ✅ Crear nuevo personaje  
- ✅ Editar personaje  
- ✅ Eliminar personaje  
- ✅ Navegación con rutas dinámicas  
- ✅ Modales para edición y eliminación  

---

## 🔄 Operaciones CRUD
El proyecto consume una API REST mediante `HttpClient`.

### 📥 Obtener todos los personajes
GET /characters

### 📄 Obtener personaje por ID
GET /characters/{id}

### ➕ Crear personaje
POST /characters

### ✏️ Actualizar personaje
PUT /characters/{id}

### ❌ Eliminar personaje
DELETE /characters/{id}

## 🛠 Instalación y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/JoelVM2/CrudCharacterApiAngular
```
### 2️⃣ Entrar en el proyecto
cd CrudCharacterApiAngular

### 3️⃣ Entrar en el proyecto
npm install

### 4️⃣ Ejecutar el servidor
ng serve -o


