import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { ExampleWithSourceComponent } from '../app/utils/example-with-source/example-with-source.component';
import { BarchartComponent } from '../app/barchart/barchart.component';
// import * as template from '../app/barchart/barchart.component.html';
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
  // source = BarchartComponentSRC;
  // console.log(BarchartComponent);

  // render(){
  //   React.createElement(ExampleWithSourceComponent, {
  //     for: BarchartComponent,
  //     source: BarchartComponentSRC
  //   });
  // }
  
  title = 'my-dream-app';
}
