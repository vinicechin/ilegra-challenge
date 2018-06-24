import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

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

  it('should render welcome text in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(LoadingScreenComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').innerHTML).toContain('Welcome to');
    expect(compiled.querySelector('h1').innerHTML).toContain('Star Wars Wiki');
  }));
});
