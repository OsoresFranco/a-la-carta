import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMenuPageComponent } from './my-menu-page.component';

describe('MyMenuPageComponent', () => {
  let component: MyMenuPageComponent;
  let fixture: ComponentFixture<MyMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
