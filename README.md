# Bind Frontend

This is a elearning project using Angular 14. It contains [all of the specs] that conatain angular material and Ngprime modules. This project consists of user and andmin and a mentor.

## Get started

### Clone the repo

```shell
[git clone https://github.com/bryanforbes/intern-angular](https://github.com/Adarsh6801/Bind-frontend.git)
cd Bind Frontend
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
ng serve
```

The `ng serve` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and runs `lite-server` on port `3000`.

Shut it down manually with `Ctrl-C`.

#### npm scripts

These are the most useful commands defined in `package.json`:

* `npm serve` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
* `npm run build` - runs the TypeScript compiler and asset copier once.
* `npm run build:watch` - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into `dist/`.
* `npm run lint` - runs `tslint` on the project files.
* `npm run serve` - runs `lite-server`.

These are the test-related scripts:

* `npm test` - builds the application and runs Intern tests (both unit and functional) one time.
* `npm run ci` - cleans, lints, and builds the application and runs Intern tests (both unit and functional) one time.


## Techniques
Bind is e-learning application which is used fot studying the courses which has various courses and which help study the coding.
