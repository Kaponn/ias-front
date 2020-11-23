import { TestBed } from '@angular/core/testing';

import { AddItemService } from './add-item-service.service';

describe('AddItemServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddItemService = TestBed.get(AddItemService);
    expect(service).toBeTruthy();
  });
});
