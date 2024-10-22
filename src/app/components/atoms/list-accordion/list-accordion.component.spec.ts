import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccordionComponent } from './list-accordion.component';

describe('ListAccordionComponent', () => {
  let component: ListAccordionComponent;
  let fixture: ComponentFixture<ListAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
