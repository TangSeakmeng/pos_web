import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionBlockComponent } from './introduction-block.component';

describe('IntroductionBlockComponent', () => {
  let component: IntroductionBlockComponent;
  let fixture: ComponentFixture<IntroductionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
