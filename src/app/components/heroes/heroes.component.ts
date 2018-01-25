import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes: any[] = [];

  constructor(private _heroeService: HeroesService) { }

  ngOnInit() {
    this._heroeService.getHeroes().subscribe((respuesta) => {
      this.heroes = respuesta;
    }, (error) => {
      console.log(error);
    });
  }

  delHero(  key$: string  ) {
    this._heroeService.delHeroe(  key$  ).subscribe((respuesta) => {
      if (respuesta) {
        console.log(respuesta);
      } else {
        delete this.heroes[key$];
      }
    });
  }

}
