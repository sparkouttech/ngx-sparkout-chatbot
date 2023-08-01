import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'demo';
  baseUrl: string = ''
  name: string = ''
  constructor(private renderer: Renderer2, private el: ElementRef) {

  }

  ngAfterViewInit() {
    this.baseUrl = 'http://54.174.204.232:8005';
    this.name = 'Test App'
  }

  ngOnInit() {
    // this.baseUrl = 'http://54.174.204.232:8005';
    // this.name = 'Test App'
    // this.config = JSON.stringify({
    //   base_url: 'http://54.174.204.232:8005/',
    //   name: 'Test App',
    //   additionalDetails: ''
    // })
    // this.addElementWithAttribute();
  }

  addElementWithAttribute() {
    // const newElement = this.renderer.createElement('div');
    // this.renderer.setAttribute(newElement, 'chat-bot-config', this.config);
    // const text = this.renderer.createElement('<sparkout-chat-widget></sparkout-chat-widget>');

    // this.renderer.appendChild(newElement, text);
    // this.renderer.appendChild(this.el.nativeElement, newElement);
  }
}
