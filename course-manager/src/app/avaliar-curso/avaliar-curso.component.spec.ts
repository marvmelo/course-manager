import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarCursoComponent } from './avaliar-curso.component';

describe('AvaliarCursoComponent', () => {
  let component: AvaliarCursoComponent;
  let fixture: ComponentFixture<AvaliarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliarCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
