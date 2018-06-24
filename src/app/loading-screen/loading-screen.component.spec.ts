import { TestBed, async } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoadingScreenComponent } from './loading-screen.component';

const appRoutes: Routes = [
  { path: '', component: LoadingScreenComponent, pathMatch: 'full' }
]

describe('LoadingScreenComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(appRoutes)
      ],
      declarations: [
        LoadingScreenComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(LoadingScreenComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
