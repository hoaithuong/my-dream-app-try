import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
// import { ExampleWithSourceComponent } from '../app/utils/example-with-source/example-with-source.component';
import { BarchartComponent } from '../app/barchart/barchart.component';
import { AreachartComponent } from '../app/areachart/areachart.component';
import BarchartComponentSRCHtml from '!!raw-loader!../app/barchart/barchart.component.html';
import BarchartComponentSRCTs from '!!raw-loader!../app/barchart/barchart.component.ts';
import BarchartComponentSRCCss from '!!raw-loader!../app/barchart/barchart.component.css';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() { }
  html = BarchartComponentSRCHtml;
  ts = BarchartComponentSRCTs;
  css = "BarchartComponentSRCCss";
  for = BarchartComponent;
  
  title = 'my-dream-app';
}
