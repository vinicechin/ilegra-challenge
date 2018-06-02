import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieDetailsComponent } from './specie-details.component';

describe('SpecieDetailsComponent', () => {
  let component: SpecieDetailsComponent;
  let fixture: ComponentFixture<SpecieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
