# AngularMovieApps

Developer Guide Frontend Angular Movie Apps, this project using Angular

## Prerequisites

Install [Node.js](https://nodejs.org/en) which includes Node Package Manager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## If haven't installed Angular CLI

```bash
  npm install -g @angular/cli
```

## Dependencies

- NodeJs 18.xx.xx

## Stacks

- Angular 16.2.5
- Tailwind 3.3.5

## Environtment setup

Create folder environtments in src and put environtment.ts (src/enviroments/environtment.ts). Input with value below (Is only testing, in real case don't show your api key to anyone)

```bash
export const environment = {
  API_BASE_URL: 'https://api.themoviedb.org/3/movie',
  API_KEY: 'b45900d0aae22fc3aa0a9c7a702bbcfe',
};

```

## Installation

```bash
npm install
```

## Development server

```bash
ng serve
```

The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
