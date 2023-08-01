import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSparkoutChatbotService } from './ngx-sparkout-chatbot.service';

interface ChatBotConfig {
  base_url: string,
  name: string,
  additionalDetails?: any
}

@Component({
  selector: 'lib-ngx-sparkout-chatbot',
  templateUrl: './ngx-sparkout-chatbot.component.html',
  styleUrls: ['./ngx-sparkout-chatbot.component.css']
})
export class NgxSparkoutChatbotComponent implements OnInit, OnChanges {
  @Input('baseUrl') baseUrl: any;
  @Input('name') name: any;
  @ViewChild('chatPanel') chatPanelRef!: ElementRef;
  public chatConfig!: ChatBotConfig;
  public chatForm: FormGroup;
  public questions: Array<string> = [];
  public answers: Array<string> = [];
  public showMessagePanel: boolean = false;
  public showSpinner: boolean = false;
  public toggleMinMax: boolean = false;

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
    this.baseUrl = changes['baseUrl'].currentValue;
    this.name = changes['name'].currentValue;
    this.ngxChatBotService.setBaseURI(this.baseUrl);
  }

  /**
   * Sets config datas
   * @param data
   */
  public setConfigDatas(data: any) {
    this.chatConfig = JSON.parse(data);
    this.ngxChatBotService.setBaseURI(this.chatConfig.base_url);
  }

  /**
   * Messages send
   */
  messageSend() {
    if (this.chatForm.valid) {
      this.questions.push(this.chatForm.value.message);
      this.scrollToBottom();
      if (this.chatForm.value.message) {
        this.ngxChatBotService.sendMessage(this.chatForm.value.message).subscribe((data: any) => {
          if (data) {
            this.showSpinner = true;
            this.answers.push(data);
            this.scrollToBottom();
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
