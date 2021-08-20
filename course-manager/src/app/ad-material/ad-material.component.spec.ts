import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMaterialComponent } from './ad-material.component';

describe('AdMaterialComponent', () => {
  let component: AdMaterialComponent;
  let fixture: ComponentFixture<AdMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
