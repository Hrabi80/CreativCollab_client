import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersSectionComponent } from './speakers-section.component';

describe('SpeakersSectionComponent', () => {
  let component: SpeakersSectionComponent;
  let fixture: ComponentFixture<SpeakersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakersSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
