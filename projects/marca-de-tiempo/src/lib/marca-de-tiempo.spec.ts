import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaDeTiempo } from './marca-de-tiempo';

describe('MarcaDeTiempo', () => {
  let component: MarcaDeTiempo;
  let fixture: ComponentFixture<MarcaDeTiempo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcaDeTiempo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaDeTiempo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
