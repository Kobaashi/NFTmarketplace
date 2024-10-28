import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsecategoriesComponent } from './browsecategories.component';

describe('BrowsecategoriesComponent', () => {
  let component: BrowsecategoriesComponent;
  let fixture: ComponentFixture<BrowsecategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowsecategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowsecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
