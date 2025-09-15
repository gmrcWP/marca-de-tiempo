import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'marca-timestamp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timestamp.html',
  styleUrls: ['./timestamp.css']
})
export class TimestampComponent {
  @Input() date?: Date | string | number;
  @Input() format?: string;

  get display(): string {
    const d = this.date ? new Date(this.date) : new Date();
    return this.format ? d.toLocaleString(this.format) : d.toLocaleString('es-BO');
  }

  get iso(): string {
    return (this.date ? new Date(this.date) : new Date()).toISOString();
  }
}
