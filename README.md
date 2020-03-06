ts-playground
=============

Simple Node.js + tsc playground that allows to test latest TypeScript features.
Runs in Docker.
Includes debug launch config for VSCode.

###### [Install](#Install) | [Example](#Example) | [License](#License)

Install
-------

```bash
$ git clone --depth=1 https://github.com/eu-ge-ne/ts-playground.git
$ cd ts-playground
$ npm install
```

Example
-------

Start docker container:

```bash
$ docker-compose up
```

For debug, use `Docker` launch configuration in VSCode

To stop, press `Ctrl-C`, then:

```bash
$ docker-compose down
```

License
-------

[Unlicense](LICENSE)
