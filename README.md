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



## CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de esta aplicación se ejecuta de la siguiente
manera a través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

### Options

#### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

#### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
