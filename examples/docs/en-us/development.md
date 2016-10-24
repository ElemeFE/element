## Development

Requirement:

 - Node.js
 - npm 3.0+

### Directory Structure
```text
|- examples/  -------------- documents and examples
    |- docs/  -------------- documents
|- component/
    |- src/  --------------- sources
|- packages/  -------------- packages
|- scripts/  --------------- configuration
|- src/  ------------------- common sources
|- components.json  -------- component list
```

### Install Dependencies

Dependencies when installing project and subprojects

```bash
npm run bootstrap
```

Try to use a domestic mirror if network is not so good. Create a new `.npmrc` file in the current project, and configure it with a domestic mirror address as follow: 

```text
registry=https://registry.npm.taobao.org
```

Run `npm run bootstrap` again to install dependencies.

### Startup

Go to [http://localhost:8085](http://localhost:8085) after startup.

```bash
npm run dev
```

### npm scripts
```bash
npm run dev # Startup
npm run dist # Package the components
npm run dist:all # Package each subproject alone
npm run lint # Detection of js code style
node bin/new.js [component name] # Create a new component
```

### Contribution

Reference <a href="https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.md" target="_blank">contribution guide</a>。

