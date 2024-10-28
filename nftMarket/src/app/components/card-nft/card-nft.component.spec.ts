import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNFTComponent } from './card-nft.component';

describe('CardNFTComponent', () => {
  let component: CardNFTComponent;
  let fixture: ComponentFixture<CardNFTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNFTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
