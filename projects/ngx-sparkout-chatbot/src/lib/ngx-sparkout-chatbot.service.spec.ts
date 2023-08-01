import { TestBed } from '@angular/core/testing';

import { NgxSparkoutChatbotService } from './ngx-sparkout-chatbot.service';

describe('NgxSparkoutChatbotService', () => {
  let service: NgxSparkoutChatbotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSparkoutChatbotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
