import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGridContainerComponent } from './user-grid-container.component';

describe('UserGridContainerComponent', () => {
  let component: UserGridContainerComponent;
  let fixture: ComponentFixture<UserGridContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGridContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
