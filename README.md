# React

## Create react app.
* Diseñar un nuevo proyecto utilizando la libreria de 
React

```sh
    npx create-react-app + nombre
```
* Al trabajar con create react app todas las componentes que utilizaremos las insertaremos dentro de la hoja app.js

## Componentes
```js
    import React from "react";
    function Navbar() {

    return (
        Contenido
    )
    
    }
    export default Navbar

```

## Props
* En app.js
```js
    import React from "react";
    function Navbar() {

    return (
        <Navbar name='Paso la props con el valor que quiero asignar '/>
    )
    
    }
    export default Navbar

```
* Esta seria mi componente

```js
    import React from "react";
    function Navbar(props) {

    return (
        <h1>
            Hola {props.name}
        </h1>
    )
    
    }
    export default Navbar

```

* sirve para pasar información entre las componentes de mi aplicación 

## Pasar variables y objetos

```js
    
    function App (){
        const userName = 'Matias';
        
        return()

    <saludar name={userName}/>
    }
```

## //Objetos// 
* Todo esto es una props por ende en donde se encuentra el componente deberemos ingresar a cada valor con props.user.nombre y asi sucesivamente. En este caso utilizaremos mucho codigo pero es una manera en la que se podria realizar
```js
    
    function App (){
        const user = {
            nombre:'Matias',
            apellido:'Mendoza',
            edad:'20'
        };
        return()

    <saludar userInfo ={user}/>
    }
```
## Estilos 

* Importo los estilos en app.js
* Si utilizo una imagen la debo importar

```js
    import imagen from './imagen/img.jpg';
```

## Como utilizar el .map
* Necesitare dos hojas , una donde poner el objeto y recorrerlo con el .map y otra la cual sera la encargada de mostrar cada valor pasado como una props.

### Ejemplo

* Hoja donde creo el objeto 

```js
    function Skills() {
    const [lenguajes, setLenguajes] = useState(
        [
            {
                nombre: 'Html',
                descripcion: 'Hacer el esqueleto de la pagina'
            },
            {
                nombre: 'Css',
                descripcion: 'Dar estilos a la pagina'
            }
        ])

    return (
        <div>
            <section className="skills">
                <h2>Mis skills tecnicas</h2>
                {lenguajes.map((lenguajes) => {
                    return (
                        <article>
                            <Lenguajes nombre={lenguajes.nombre} descripcion={lenguajes.descripcion}></Lenguajes>
                        </article>
                    )
                })}

            </section>
        </div>
    )
}
```
* Hoja donde le asigno las props y lo utlizo para mostrar cada uno de mis datos

```js
import React from 'react'

export const Lenguajes = (props) => {
    return (
        <div>
            <h3>{props.nombre}</h3>
            <p>{props.descripcion}</p>
        </div>
    )
}
```
----
# Estructura basica para levantar un Backend rapido con Json.server en React 

![imagen](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/064fc70f-5df3-4333-b9d4-f6abe2f946de/react-wp-app8.png)

----------

- Link de Json.server

( https://www.npmjs.com/package/json-server?activeTab=readme )

### Instalación de Json Server con npm
===========================
```sh
    npm install -g json-server
```
* Creamos un archivo aparte para un Hook personalizado en una carpeta llamada Hocks para trabajar con nuestra información

* Se nos creara con la instalación un archivo de tipo json llamado db.json
## Iniciamos el Back 

```sh
    json-server --watch db.json
```
-----------------
## Estructura de nuestro Hock
* Archivo llamado useFormulario.js.

```js
    import { useState } from "react"

    export const useFormulario = (estadoInicial = {}) => {

    const [values, setValues] = useState(estadoInicial)

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value


        })
    }
    return [values, handleInputChange]
}
```
-------------
## Estructura del lado donde se encuentra mi componente de fomulario 

```js
    const [values, handleInputChange] = useFormulario({
        nombre: '',
        email: '',
        comentario: ''
    });

    const { nombre, email, comentario } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Datos guardados exitosamente');

    fetch('http://localhost:3000/informations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
    });
    .then(respuesta => {
        console.log(respuesta)
    });

    };
```
--------
## Estructura de los inputs

```js
<form onSubmit={handleSubmit}>
    
<input onChange={handleInputChange} value={nombre} name='nombre' id='nombre' type='text' placeholder='Nombre'></input>
    
<input onChange={handleInputChange} value={email} name='email' id='email' type='email' placeholder='Correo Electronico'></input>
    
<input onChange={handleInputChange} value={comentario} name='comentario' id='comentario' type='text' placeholder='Deja tu consulta aqui'>
</input>
    
<button>Enviar</button>

```

### Markdown

* Sintaxis de Markdown para implementarlo en el README.md

( https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/064fc70f-5df3-4333-b9d4-f6abe2f946de/react-wp-app8.png )