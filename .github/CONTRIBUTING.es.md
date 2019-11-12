# Guía para Contribuidores a `Element UI`

¡Hola! Gracias por elegir [Element UI](http://element.eleme.io/#/en-US).

`Element UI` es un archivo de componentes para desarrolladores y para gerentes de productos ‘web’ basado en [Vue 2.0](https://vuejs.org/)

Estamos orgullosos de que usted esta interesado en contribuir al proyecto `Element`. Antes de someter sus contribuciones, por favor tome un momentito para leer estas simples guías para contribuidores.


## Guía Para Reportar Problemas (“Issues”)

- [“Issues”]( https://elementui.github.io/issue-generator) son exclusivamente para informar de errores, sugerencias o solicitaciones para funcionalidad adicional referente a diseño. Preguntas de otro tipo corren el riesgo de ser cerradas inmediatamente. Sí tiene preguntas sobre el uso de `Element`, vea [Gitter](https://gitter.im/element-en/Lobby) para más ayuda.

- Antes de someter un informe sobre algún problema, sírvase de revisar  sí ya hubo un informe.

- Por favor especifique que versión de `Element` y `Vue` que esta utilizando, y que versión de sistema operativo y que versión de navegador web que está utilizando. [JSFiddle](https://jsfiddle.net/) esta recomendado para crear un entorno para reproducir el problema claramente.


## Guías para un “Pull Request (PR)”

- Crea una bifurcación (“fork”) del repositorio a su propia cuenta en github.com. Por favor no crea ramas nuevas aquí.

- Cuando cometa su cambio, formatea en esta forma: `[Nombre de componente]: Datos sobre el “commit”.` (por ejemplo. `Button: Reparación de xxx error`)

- **DE NINGUNA MANERA** incluya archivos dentro del directorio `lib`.

- Asegúrese de que el comando `npm run dist` produzca los archivos correctos.

- Para asegurar compatibilidad y reducir tamaño de los archivos, nuestra configuración de `babel` solo importa `preset-2015`, así que IPAs como  Array.prototype.find` y `Object.assign` en `ES2015` no son recomendados. Puede importar “polyfills” terceros, sí es necesario.

- “Rebase” antes de crear un “pull request (PR)” para mantener la historia de “commits” limpia.

- Asegúrese que sus PRs se refrieran a la rama `dev`  y no a la rama  `master`.

- Si su PR arregla un error técnico, por favor, haga referencia al error especifico.

- Fusión de un PR requiere dos mantenedores: el primero aprueba los cambios después de revisar, y entonces el segundo mantenedor revisa los cambios y hace la fusión.


## Requerimientos Técnicos
`Node.js 4+`, `yarn` y `npm 3+` son requisitos. Nota: Usamos yarn para bloquear versiones de dependencias, por lo que debería instalar dependencias usando `yarn` en lugar de `npm install`.
.
```shell
git clone git@github.com:ElemeFE/element.git
npm run dev

# abra http://localhost:8085
```

> **Notice**: modify `examples/play/index.vue` file, use the component you contribute, then run `npm run dev:play`, go ahead [http://localhost:8085](http://localhost:8085), get result, more quickly and friendly.

Para armar:

```
shell
npm run dist
```

## Guía Para Desarrollo de Componentes
- Corra el comando `make new <component-name>` para crear el directorio de su proyecto para un componente nuevo. Verifique su código fuente test, archivo de entrada y documentación están incluidos.
- Refiérase al `Button` para componentes anidados.
- Refiérase al `Select` para componentes que dependen de otros componentes.


## Estilo de Desarrollo
Por favor acate a este estilo [ESLint](https://github.com/ElemeFE/eslint-config-elemefe) configuración de [ElemeFE](https://github.com/elemefe).

