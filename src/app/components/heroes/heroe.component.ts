import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interface/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel',
  };

  id: string;

  constructor(private _heroeService: HeroesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe((parametros) => {
      this.id = parametros['id'];
      if (this.id !== 'nuevo') {
        this._heroeService.getHeroe(this.id).subscribe((respuesta) => {
          this.heroe = respuesta;
        });
      }
    });

  }

  ngOnInit() {
  }

  guardar() {

    if (this.id === 'nuevo') {

      this._heroeService.nuevoHeroe(this.heroe).subscribe((res) => {
        this.router.navigate(['/heroes']);
      }, (error) => {
        console.log(error);
      });

    } else {

      this._heroeService.actualizarHeroe(this.heroe, this.id).subscribe((res) => {
        this.router.navigate(['/heroes']);
      }, (error) => {
        console.log(error);
      });

    }

  }

}
