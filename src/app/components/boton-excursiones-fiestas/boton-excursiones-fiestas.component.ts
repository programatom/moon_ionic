import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-boton-excursiones-fiestas',
  templateUrl: './boton-excursiones-fiestas.component.html',
  styleUrls: ['./boton-excursiones-fiestas.component.scss'],
})
export class BotonExcursionesFiestasComponent implements OnInit {

  @Input("url_foto") url_foto;
  @Input("titulo") titulo;


  constructor(private _sanitizer: DomSanitizer) {
    this._sanitizer.bypassSecurityTrustStyle('url('+ this.url_foto +') no-repeat 100% 100%;')
  }

  ngOnInit() {}

}
