import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCreatorTabComponent } from './top-creator-tab.component';

describe('TopCreatorTabComponent', () => {
  let component: TopCreatorTabComponent;
  let fixture: ComponentFixture<TopCreatorTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopCreatorTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCreatorTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
