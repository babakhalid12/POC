import { TestBed, inject } from '@angular/core/testing';

import { HcWidgetService } from './hc-widget.service';

describe('HcWidgetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HcWidgetService]
    });
  });

  it('should be created', inject([HcWidgetService], (service: HcWidgetService) => {
    expect(service).toBeTruthy();
  }));
});
