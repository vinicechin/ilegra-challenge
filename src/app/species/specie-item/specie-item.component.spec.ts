import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieItemComponent } from './specie-item.component';

describe('SpecieItemComponent', () => {
  let component: SpecieItemComponent;
  let fixture: ComponentFixture<SpecieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
