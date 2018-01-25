import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interface/heroe.interface';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  heroesURL: string;
  heroeUrl: string;

  constructor(  private http: Http ) {
    this.heroesURL = 'https://heroes-app-c9b95.firebaseio.com/.json';
    this.heroeUrl = 'https://heroes-app-c9b95.firebaseio.com/';
   }

   nuevoHeroe(  heroe: Heroe  ) {
     const body = JSON.stringify( heroe );
     const headers = new Headers();

     return this.http.post(  this.heroesURL, body, { headers }).map((res) => {
        return res.json();
     });

   }

   actualizarHeroe(  heroe: Heroe, key$: string  ) {
    const body = JSON.stringify( heroe );
    const headers = new Headers();

    let url = `${this.heroeUrl}/${key$}.json`;

    return this.http.put(  url, body, { headers }).map((res) => {
       return res.json();
    });

  }

  getHeroe( key$: string ) {
    const url = `${this.heroeUrl}/${key$}.json`;
    return this.http.get( url ).map((res) => {
      return res.json();
    });
  }

  getHeroes() {
    return this.http.get( this.heroesURL ).map((res) => {
      return res.json();
    });
  }

  delHeroe( key$: string ) {
    const urlDel = `${this.heroeUrl}/${key$}.json`;
    return this.http.delete( urlDel ).map((respuesta) => {
      return respuesta.json();
    });
  }


}
