# Monorepo
- Single repo storing whole codebase (frontend, backend, devops, etc)
- Advantages: sharing code among modules

# Turborepo
- High performance build system for javascript and typescript codebases

- Build System:
    - It automates the process of transforming the source code to binary code that can be executed by computers.
    - In case of js and ts projects it can include transpilation, bundling, minification, etc

- Monorepo framework:
    - It provides tools and conventions for managing projects that contain multiple packages and apps within a single repo. This includes dependency management between packages, workspace configuration.
    - It allows to create backend, frontend and common folders and share/ import code among modules

- Build System orchestrator:
    - Turborepo acts as a build system orchestrator rather than direct build system. It allows you to define tasks in your monorepo that call other tools (which are actual build systems) to perform these actions. These tools can be like tsc, vite, etc. It does dependency management, caching during builds

- Folder structure:
    - apps: This contains end user apps (backend, frontend, other services)
    - packages: This contains helper packages common code needed by apps