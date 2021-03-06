import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { MarketItemSearchStatsComponent } from './market-item-search-stats.component';


describe('MarketItemSearchStatsComponent', () => {
  let component: MarketItemSearchStatsComponent;
  let fixture: ComponentFixture<MarketItemSearchStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarketItemSearchStatsComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        BrowserModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketItemSearchStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
