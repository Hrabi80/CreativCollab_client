import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitBoxComponent } from './invit-box.component';

describe('InvitBoxComponent', () => {
  let component: InvitBoxComponent;
  let fixture: ComponentFixture<InvitBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
