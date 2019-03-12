# Markdown Links

## Diagramas de Flujo

### _Diagrama de flujo: Obtener links_

![Diagrama de flujo - Obtener links](https://i.ibb.co/PCbNsnb/Scan4.jpg)

### _Diagrama de flujo con options_

![Diagrama de flujo - Con options](https://user-images.githubusercontent.com/45099076/53440529-b723c180-39d2-11e9-8d69-450aa7571ad9.png)



## Pseudocódigo

![Cuadro de funciones](https://user-images.githubusercontent.com/45099076/53534797-54175500-3ace-11e9-883e-915e2c540386.png)



## Backlog para la implementación de la librería

![User-histories](https://user-images.githubusercontent.com/45099076/54205164-c6f7d700-44a3-11e9-9a2b-c1a311a50062.png)



## Documentación técnica de la librería

#### `mdLinks(path, options)`

##### Argumentos

- `path`: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es
  relativa, debe resolverse como relativa al directorio desde donde se invoca
  node - _current working directory_).
- `options`: Un objeto con las siguientes propiedades:
  * `validate`: Booleano que determina si se desea validar los links
    encontrados.


#### Ejemplo

```js
const mdLinks = require("md-links-path");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```


## Guía de uso e instalación de la librería

Para la instalación se debe colocar el siguiente comando:

```sh
npm i md-links-path
```

El ejecutable de esta aplicación se ejecuta de la siguiente
manera a través de la terminal:

`md-links <path-to-file> [options]`

Para extraer los links de una ruta de un archivo Markdown, se coloca lo siguient:

```sh
$ mdLinks ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```


### Options

#### `--validate`

Si pasamos la opción `--validate`, el módulo hace una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.


```sh
$ mdLinks ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

El _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

#### `--stats`

Si pasamos la opción `--stats` el output (salida) es un texto con estadísticas básicas sobre los links.

```sh
$ mdLinks ./some/example.md --stats
Total: 3
Unique: 3
```

También se puede combinar `--stats` y `--validate` para obtener estadísticas que necesiten de los resultados de la validación.

```sh
$ mdLinks ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
