Dashup Module EDI
&middot;
[![Latest Github release](https://img.shields.io/github/release/dashup/module-edi.svg)](https://github.com/dashup/module-edi/releases/latest)
=====

A connect interface for edi on [dashup](https://dashup.io).

## Contents
* [Get Started](#get-started)
* [Connect interface](#connect)

## Get Started

This edi connector adds edi actions to Dashup:

```json
{
  "url" : "https://dashup.io",
  "key" : "[dashup module key here]"
}
```

To start the connection to dashup:

`npm run start`

## Deployment

1. `docker build -t dashup/module-edi .`
2. `docker run -d -v /path/to/.dashup.json:/usr/src/module/.dashup.json dashup/module-edi`