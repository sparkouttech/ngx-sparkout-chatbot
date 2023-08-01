import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSparkoutChatbotComponent } from './ngx-sparkout-chatbot.component';

describe('NgxSparkoutChatbotComponent', () => {
  let component: NgxSparkoutChatbotComponent;
  let fixture: ComponentFixture<NgxSparkoutChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSparkoutChatbotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSparkoutChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
