import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  condicion: String;

  loading: Boolean = false;

  constructor() {

    this.condicion = 'rojo';

  }

  activar() {
    this.loading = true;
    console.log(this.loading);

  }

}
