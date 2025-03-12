import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcreatorsComponent } from './topcreators.component';

describe('TopcreatorsComponent', () => {
  let component: TopcreatorsComponent;
  let fixture: ComponentFixture<TopcreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopcreatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopcreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
