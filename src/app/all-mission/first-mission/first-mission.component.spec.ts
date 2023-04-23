import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMissionComponent } from './first-mission.component';

describe('FirstMissionComponent', () => {
  let component: FirstMissionComponent;
  let fixture: ComponentFixture<FirstMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
