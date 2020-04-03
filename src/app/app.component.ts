import { Component } from '@angular/core';
import { ExampleWithSourceComponent } from '../app/utils/example-with-source/example-with-source.component';
import { BarchartComponent } from '../app/barchart/barchart.component';
import * as React from 'react';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private SourceComponent: ExampleWithSourceComponent) { }
  barchar = BarchartComponent;
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
