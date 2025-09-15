import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Timestamp } from './timestamp/timestamp';

@NgModule({
  declarations: [Timestamp],
  imports: [CommonModule],
  exports: [Timestamp],
})

@Component({
  selector: 'lib-marca-de-tiempo',
  imports: [],
  template: `
    <p>
      marca-de-tiempo works!
    </p>
  `,
  styles: ``
})
export class MarcaDeTiempo {

}
