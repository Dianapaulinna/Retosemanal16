
// 1. IMPORTACIONES
// Se refiere a todas las dependencias del
// proyecto que se utilizarán en este archivo.
const express = require('express')
const app = express()

// 2. MIDDLEWARES
// Se refiere a todas las funciones
// que se ejecutarán antes de tocar las rutas.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. RUTEO
// Las rutas establecidas para nuestro servidor
// LEER TODAS LAS TAREAS
app.get("/", (req, res) => {
	const data = [{
        id: 0,
		nombre: "Paulina",
		tarea: "Elaborar una página web"
	}]
	res.json(data)
})

// CREAR UNA TAREA
app.post("/", (req, res) => {
const { nombre, tarea } = req.body
	const data = [{
		id: 0,
		nombre: "Paulina",
		tarea: "Elaborar una página web"
	}]
	data.push({nombre, tarea})
	res.json(data)
})

// ACTUALIZAR UNA TAREA
app.put("/", (req, res) => {
	const { id, nombre, tarea } = req.body
	const data = [{
		id: 0,
		nombre: "Paulina",
		tarea: "Elaborar una página web"
	}]
	const dataFiltered = data.map((e) => {
		return e.id === id ? {
			id,
			nombre,
			tarea
		} : null
	})
	res.json(dataFiltered)
})

// BORRAR UNA TAREA
app.delete("/", (req, res) => {
	const {id} = req.body
	const data = [{
		id: 0,
		nombre: "Paulina",
		tarea: "Elaborar una página web"
	}]
	const dataFiltered = data.filter((e) => {
		return e.id !== id
	})
	res.json(dataFiltered)
})

// 4. SERVIDOR
app.listen(3000, () => {
	console.log("El servidor está de pie")
})