import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMissionComponent } from './second-mission.component';

describe('SecondMissionComponent', () => {
  let component: SecondMissionComponent;
  let fixture: ComponentFixture<SecondMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
