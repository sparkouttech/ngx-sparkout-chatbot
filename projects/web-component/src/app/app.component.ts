import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSparkoutChatbotService } from './ngx-sparkout-chatbot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  @Input('name') name: any;
  @Input('accessToken') accessToken: any;
  @ViewChild('chatPanel') chatPanelRef!: ElementRef;
  public chatForm: FormGroup;
  public questions: Array<string> = [];
  public answers: Array<string> = [];
  public showMessagePanel: boolean = false;
  public showSpinner: boolean = false;
  public toggleMinMax: boolean = false;
  public apiError: any;

  /**
   * Creates an instance of ngx sparkout chatbot component.
   * @param formBuilder
   * @param ngxChatBotService
   */
  constructor(
    private formBuilder: FormBuilder,
    private ngxChatBotService: NgxSparkoutChatbotService
  ) {
    this.chatForm = this.formBuilder.group({
      message: ['', Validators.required],
    });
  }

  /**
   * on init
   */
  ngOnInit(): void {
    this.questions = [];
    this.answers = [];
  }


  /**
   * on changes
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    console.log('onchanges from libray', changes);
    this.accessToken = changes['accessToken'].currentValue;
    this.name = changes['name'].currentValue;
    this.ngxChatBotService.setAccessToken(this.accessToken);
  }

  /**
   * Messages send
   */
  messageSend() {
    if (this.chatForm.valid) {
      this.questions.push(this.chatForm.value.message);
      this.scrollToBottom();
      if (this.chatForm.value.message) {
        this.ngxChatBotService.sendMessage(this.chatForm.value.message).subscribe({
          next: (response: any) => {
            if (response) {
              this.apiError = '';
              this.showSpinner = true;
              this.answers.push(response);
              this.scrollToBottom();
            }
          },
          error: (error: any) => {
            console.log('api error-----', error['detail']);
            this.apiError = error['detail'];
          }
        })
        this.chatForm.reset();
      }
    }
  }

  /**
   * Opens message panel
   */
  public openMessagePanel() {
    this.showMessagePanel = !this.showMessagePanel;
  }

  /**
   * Scrolls to bottom
   */
  public scrollToBottom(): void {
    setTimeout(() => {
      const chatPanel = this.chatPanelRef.nativeElement;
      chatPanel.scrollTop = chatPanel.scrollHeight;
    }, 0);
  }

}
