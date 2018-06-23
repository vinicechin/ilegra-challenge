import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetItemComponent } from './planet-item.component';

describe('PlanetItemComponent', () => {
  let component: PlanetItemComponent;
  let fixture: ComponentFixture<PlanetItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
