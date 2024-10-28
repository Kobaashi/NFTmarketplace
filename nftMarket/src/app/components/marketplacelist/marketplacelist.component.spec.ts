import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplacelistComponent } from './marketplacelist.component';

describe('MarketplacelistComponent', () => {
  let component: MarketplacelistComponent;
  let fixture: ComponentFixture<MarketplacelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketplacelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketplacelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
