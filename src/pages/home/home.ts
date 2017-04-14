/*
 * Para esse App teste eu utilizei a biblioteca Lodash: https://lodash.com/
 * para instalar: $ npm install --save @types/lodash, neste exemplo a biblioteca vem junto com o package.json
 *
*/

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import _ from "lodash";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	items: any; //Array <{ title: string, imageURL: string, icon: string}>; //forma mais bonitinha, ,mas que dá erro de tipo
	items2: any;//Array <{ title: string, imageURL: string, icon: string}>;
	isActive: boolean = true;


  	constructor(public navCtrl: NavController) {

  		this.items2 = [
            {title: "Action Modas", imageURL: "http://lorempixel.com/650/350/sports/", icon:"heart"},
            {title: "Torre Restaurantes", imageURL: "http://lorempixel.com/650/350/food/", icon:"heart-outline"},
            {title: "Museu PL", imageURL: "http://lorempixel.com/650/350/abstract/", icon:"heart"},
            {title: "Angela Fashion", imageURL: "http://lorempixel.com/650/350/fashion/", icon:"heart"},
            {title: "Rock Rações", imageURL: "http://lorempixel.com/650/350/cats/", icon:"heart"},
            
            
        ];

  	}
  	//fazendo sequencia ficar aleatória a cada vez que o usuário entra na pagina de empresas patrocinadas.
  	//take a look at page lifecycle
  	//https://webcake.co/page-lifecycle-hooks-in-ionic-2/
  	ionViewWillEnter(){
  		
  		//quando o usuário entra na pagina,
  		// Array.prototype.slice.call() transforma a lista de objetos em um array
  		// logo em seguida -.suffle(), embaralha o array, retornando um novo array para ser mostrado na view.
  		this.items = _.shuffle(Array.prototype.slice.call(this.items2)); 
  		//console.log(this.items);
  	}

}
