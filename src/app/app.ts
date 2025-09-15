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
    <p>Given: <marca-timestamp [date]="'2020-01-01T00:00:00Z'" format="locale"></marca-timestamp></p>
  `,
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('homeworld-workspace');
}
