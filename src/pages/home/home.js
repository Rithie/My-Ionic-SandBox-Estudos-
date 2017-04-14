/*
 * Para esse App teste eu utilizei a biblioteca Lodash: https://lodash.com/
 * para instalar: $ npm install --save @types/lodash, neste exemplo a biblioteca vem junto com o package.json
 *
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import _ from "lodash";
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.isActive = true;
        this.items2 = [
            { title: "Action Modas", imageURL: "http://lorempixel.com/650/350/sports/", icon: "heart" },
            { title: "Torre Restaurantes", imageURL: "http://lorempixel.com/650/350/food/", icon: "heart-outline" },
            { title: "Museu PL", imageURL: "http://lorempixel.com/650/350/abstract/", icon: "heart" },
            { title: "Angela Fashion", imageURL: "http://lorempixel.com/650/350/fashion/", icon: "heart" },
            { title: "Rock Rações", imageURL: "http://lorempixel.com/650/350/cats/", icon: "heart" },
        ];
    }
    //fazendo sequencia ficar aleatória a cada vez que o usuário entra na pagina de empresas patrocinadas.
    //take a look at page lifecycle
    //https://webcake.co/page-lifecycle-hooks-in-ionic-2/
    HomePage.prototype.ionViewWillEnter = function () {
        //quando o usuário entra na pagina,
        // Array.prototype.slice.call() transforma a lista de objetos em um array
        // logo em seguida -.suffle(), embaralha o array, retornando um novo array para ser mostrado na view.
        this.items = _.shuffle(Array.prototype.slice.call(this.items2));
        //console.log(this.items);
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map