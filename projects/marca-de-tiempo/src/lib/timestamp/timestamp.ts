import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'marca-timestamp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timestamp.html',
  styleUrls: ['./timestamp.css']
})
export class TimestampComponent implements OnInit {
  @Input() fecha?: Date | string | number;
  @Input() formato?: string;

  display = '';
  iso = '';

  ngOnInit() {
    const d = this.fecha ? new Date(this.fecha) : new Date();
    this.display = this.formato
      ? d.toLocaleString(this.formato)
      : d.toLocaleString('es-BO');
    this.iso = d.toISOString();
  }
}