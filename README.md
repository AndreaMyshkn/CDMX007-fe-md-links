
# Markdown Links

## Instalación de la librería

```sh
Módulo instalable vía npm install myshkn-md-links.
```
Autor de la librería: Andrea Velázquez Hidalgo.

## Pseudo código o diagrama de flujo 
![Diagrama](https://raw.githubusercontent.com/AndreaMyshkn/CDMX007-fe-md-links/master/img/MD-LINKS%20DIAGRAMA.jpeg)

## Board con el backlog para la implementación de la librería

Esta librería fue desarrollada en base al pseudocódigo o diagrama de flujo anterior, gracias al software de administración de proyectos con interfaz web "Trello" y a las herramientas de planificación que ofrece github, i.e. el "project" presente en  esta liga [Project-MdLinks Andrea](https://github.com/AndreaMyshkn/CDMX007-fe-md-links/projects/1) y este [milestones] (https://github.com/AndreaMyshkn/CDMX007-fe-md-links/milestones).

```sh 
Backlog
```
![Backlog](https://raw.githubusercontent.com/AndreaMyshkn/CDMX007-fe-md-links/master/img/Backlog.png)
```sh
Milestones
```
![Milestones100%](https://raw.githubusercontent.com/AndreaMyshkn/CDMX007-fe-md-links/master/img/milestones.jpg)
```sh
Issues
```
![IssuesClosed](https://raw.githubusercontent.com/AndreaMyshkn/CDMX007-fe-md-links/master/img/IssuesClosed.jpg)
![IssuesOpen](https://raw.githubusercontent.com/AndreaMyshkn/CDMX007-fe-md-links/master/img/IssuesOpen.jpg)
```sh
Trello
```
![Trello](https://raw.githubusercontent.com/AndreaMyshkn/CDMX007-fe-md-links/master/img/trello2.jpg)

## DOCUMENTACIÓN TÉCNICA DE LA LIBRERÍA

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, se ha creado una herramienta usando 
[Node.js](https://nodejs.org/), que lee y analiza archivos
en formato `Markdown`, para verificar los links que contienen y reportar
algunas estadísticas.


### Archivos del proyecto

- `README.md` con descripción del módulo, instrucciones de instalación/uso,
  documentación del API y ejemplos. 
- `index.js`: Desde este archivo se exporta una función (`mdLinks`).
- `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...)
- `.editorconfig` con configuración para editores de texto.
- `.eslintrc` con configuración para linter.
- `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).
- `test/md-links.spec.js` con los tests unitarios para la función
  `mdLinks()`. Tu implementación debe pasar estos test.

### JavaScript API

El módulo se importa en otros scripts de Node.js y ofrece la
siguiente interfaz:

#### `mdLinks(path, options)`

##### Argumentos

- `path`: Ruta absoluta o relativa al archivo o directorio.
- `options`: Un objeto con las siguientes propiedades:
  - `validate`: Booleano que determina si se desea validar los links
    encontrados.

##### Valor de retorno

La función retorna una promesa (`Promise`) que resuelve un arreglo
(`Array`) de objetos (`Object`), donde cada objeto representa un link.


### CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md http://google.com/ Google
```


#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo hace una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.


![validate](https://raw.githubusercontent.com/AndreaMyshkn/CDMX007-fe-md-links/master/img/validate.jpg)

Vemos que el _output_ en este caso incluye la palabra `ok` o `Not found` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) es un texto con estadísticas
básicas sobre los links.

![stats](https://raw.githubusercontent.com/AndreaMyshkn/CDMX007-fe-md-links/master/img/stats.jpg)


##### `--stats--validate`
También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

![statsvalidate](https://raw.githubusercontent.com/AndreaMyshkn/CDMX007-fe-md-links/master/img/--stats--validate.jpg)


## Checklist

### General

- [x] Puede instalarse vía `npm install --global <github-user>/md-links`

### `README.md`

- [x] Colocar el pseudo código o diagrama de flujo con el algoritmo que soluciona el problema.
- [x] Un board con el backlog para la implementación de la librería.
- [x] Documentación técnica de la librería.
- [x] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

- [x] El módulo exporta una función con la interfaz (API) esperada.
- [x] Implementa soporte para archivo individual
- [x] Implementa soporte para directorios
- [x] Implementa `options.validate`

### Pruebas / tests

- [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
      lines, y branches.
- [x] Pasa tests (y linters) (`npm test`).

### CLI

- [x] Expone ejecutable `md-links` en el path (configurado en `package.json`)
- [x] Se ejecuta sin errores / output esperado
- [x] Implementa `--validate`
- [x] Implementa `--stats`



