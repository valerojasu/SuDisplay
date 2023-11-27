import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadComponent } from './indicad.component';

describe('IndicadComponent', () => {
  let component: IndicadComponent;
  let fixture: ComponentFixture<IndicadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
