import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipItemComponent } from './starship-item.component';

describe('StarshipItemComponent', () => {
  let component: StarshipItemComponent;
  let fixture: ComponentFixture<StarshipItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
