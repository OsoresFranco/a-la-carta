import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishDeleteSnackbarComponent } from './dish-delete-snackbar.component';

describe('DishDeleteSnackbarComponent', () => {
  let component: DishDeleteSnackbarComponent;
  let fixture: ComponentFixture<DishDeleteSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishDeleteSnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishDeleteSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
