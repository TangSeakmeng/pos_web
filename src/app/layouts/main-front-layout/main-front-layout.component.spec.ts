import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFrontLayoutComponent } from './main-front-layout.component';

describe('MainFrontLayoutComponent', () => {
  let component: MainFrontLayoutComponent;
  let fixture: ComponentFixture<MainFrontLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFrontLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFrontLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
