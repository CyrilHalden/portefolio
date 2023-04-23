import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionStageComponent } from './mission-stage.component';

describe('MissionStageComponent', () => {
  let component: MissionStageComponent;
  let fixture: ComponentFixture<MissionStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
