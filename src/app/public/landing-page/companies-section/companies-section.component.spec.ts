import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesSectionComponent } from './companies-section.component';

describe('CompaniesSectionComponent', () => {
  let component: CompaniesSectionComponent;
  let fixture: ComponentFixture<CompaniesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
