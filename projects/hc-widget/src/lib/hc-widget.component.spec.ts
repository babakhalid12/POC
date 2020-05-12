import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcWidgetComponent } from './hc-widget.component';

describe('HcWidgetComponent', () => {
  let component: HcWidgetComponent;
  let fixture: ComponentFixture<HcWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
