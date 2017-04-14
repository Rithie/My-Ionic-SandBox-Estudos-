# My-Ionic-SandBox Estudos #1



## #1 Utilizando a biblioteca [Lodash](https://lodash.com/) em um aplicativo Ionic.

O método utilizado foi _.suffle(). O método suffle cria um array de valores embaralhados, usando uma versão do shuffle de [Fisher-Yates](https://bost.ocks.org/mike/shuffle/).

## #2 Propierty Biding com Ionic 2

Para usar um ícone, basta preencher o atributo *name* no componente <ion-icon>.

`<ion-icon name="heart"></ion-icon>`

Também é possível fazer isso dinâmicamente via *propierty-biding*. Para fazer isso, basta instanciar uma variável em sua classe e depois atribuir uma variável na view.

```typescript
export class MyFirstPage {
  // use the home icon
  myIcon: string = "home";
}
```

```html
<ion-icon [name]="myIcon"></ion-icon>
```

## #3 Outro ponto explorado foi o [lifecycle](https://webcake.co/page-lifecycle-hooks-in-ionic-2/) contido no NavController do Ionic 2.

Ionic packages a set of view lifecycle hooks into the `NavController` – part of the Ionic module. They follow four patterns of event handlers:

- `ionViewDidLoad` works the same way as `ngOnInit`, fires once when the view is initially loaded into the DOM
- `ionViewWillEnter` and `ionViewDidEnter` are hooks that are available before and after the page in question becomes active
- `ionViewWillLeave` and `ionViewDidLeave` are hooks that are available before and after the page leaves the viewport
- `ionViewWillUnload` is available before the page is removed from the DOM



## Instalação:

### Primeiro clone o repo:

```shell
$ git clone https://github.com/Rithie/My-Ionic-SandBox-Estudos-.git && cd My-Ionic-SandBox-Estudos-
```

### Instale as dependências:

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