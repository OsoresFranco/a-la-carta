import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMenuStatsComponent } from './my-menu-stats.component';

describe('MyMenuStatsComponent', () => {
  let component: MyMenuStatsComponent;
  let fixture: ComponentFixture<MyMenuStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMenuStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMenuStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
