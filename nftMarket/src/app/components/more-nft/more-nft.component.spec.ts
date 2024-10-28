import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreNFTComponent } from './more-nft.component';

describe('MoreNFTComponent', () => {
  let component: MoreNFTComponent;
  let fixture: ComponentFixture<MoreNFTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreNFTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
