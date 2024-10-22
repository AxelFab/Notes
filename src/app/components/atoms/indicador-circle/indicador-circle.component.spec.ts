import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorCircleComponent } from './indicador-circle.component';

describe('IndicadorCircleComponent', () => {
  let component: IndicadorCircleComponent;
  let fixture: ComponentFixture<IndicadorCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicadorCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicadorCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
