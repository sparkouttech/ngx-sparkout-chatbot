import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { NgxSparkoutChatbotComponent } from './ngx-sparkout-chatbot.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import  { createCustomElement } from '@angular/elements';



@NgModule({
  declarations: [
    NgxSparkoutChatbotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    NgxSparkoutChatbotComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgxSparkoutChatbotModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(NgxSparkoutChatbotComponent, { injector: this.injector });
    customElements.define('sparkout-chat-widget', element);
  }
  ngDoBootstrap() {}
}
