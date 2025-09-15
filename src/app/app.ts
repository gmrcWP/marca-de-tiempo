import { Component, signal } from '@angular/core';
import { TimestampComponent } from 'marca-de-tiempo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimestampComponent],
  // remove templateUrl/styleUrl to use inline template
  template: `
    <h1>Demo</h1>
    <p>Now: <marca-timestamp></marca-timestamp></p>
    <p>Given: <marca-timestamp fecha="2021-09-28" formato="es-BO"></marca-timestamp></p>
  `,
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('homeworld-workspace');
}
