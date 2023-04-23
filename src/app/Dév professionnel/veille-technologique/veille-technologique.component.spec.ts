import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeilleTechnologiqueComponent } from './veille-technologique.component';

describe('VeilleTechnologiqueComponent', () => {
  let component: VeilleTechnologiqueComponent;
  let fixture: ComponentFixture<VeilleTechnologiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeilleTechnologiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeilleTechnologiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
