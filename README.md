



# My-Ionic-SandBox Estudos #1



## Neste App eu testo a utilização da biblioteca [Lodash](https://lodash.com/) em um aplicativo Ionic.

O método utilizado foi _.suffle().

Outro ponto explorado foi o [lifecycle](https://webcake.co/page-lifecycle-hooks-in-ionic-2/). contido no NavController do Ionic.

Ionic packages a set of view lifecycle hooks into the `NavController` – part of the Ionic module. They follow four patterns of event handlers:

- `ionViewDidLoad` works the same way as `ngOnInit`, fires once when the view is initially loaded into the DOM
- `ionViewWillEnter` and `ionViewDidEnter` are hooks that are available before and after the page in question becomes active
- `ionViewWillLeave` and `ionViewDidLeave` are hooks that are available before and after the page leaves the viewport
- `ionViewWillUnload` is available before the page is removed from the DOM



## Instalação:

###Primeiro clone o repo:

```shell
$ git clone https://github.com/Rithie/My-Ionic-SandBox-Estudos-.git && cd My-Ionic-SandBox-Estudos-
```

###Instale as dependências:

```sh
$ npm install
```

### Para instalar Lodash em outros projetos:

instale a biblioteca em seu package.json

```sh
$ npm install --save @types/lodash
```
depois em seu arquivo .ts adicione

```typescript
import _ from "lodash";
```