import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { ExampleWithSourceComponent } from '../app/utils/example-with-source/example-with-source.component';
import { BarchartComponent } from '../app/barchart/barchart.component';
import BarchartComponentSRC from '!!raw-loader!../app/barchart/barchart.component';
import * as raw from 'raw-loader';
import  * as SD from '../app/barchart/barchart.component';

import * as React from 'react';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() { }
  @ContentChild(BarchartComponent, { read: ElementRef, static: false })
  content: ElementRef;
  source = "dsadasdsa";
  // console.log(BarchartComponent);

  // render(){
    // React.createElement(ExampleWithSourceComponent, {
    //   for: TableExample,
    //   source: TableExampleSRC
    // });
  // }
  
  title = 'my-dream-app';
}
