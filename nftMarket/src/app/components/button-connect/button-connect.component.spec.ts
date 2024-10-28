import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonConnectComponent } from './button-connect.component';

describe('ButtonConnectComponent', () => {
  let component: ButtonConnectComponent;
  let fixture: ComponentFixture<ButtonConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonConnectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
