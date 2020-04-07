import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { HttpClient } from '@angular/common/http';
import {  
  projectId, 
  averageDailyTotalSales, 
  averageCheckSizeByServer, 
  locationStateDisplayFormIdentifier } from "../../../src/fixtures";

import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { BarChart, Model } from '@gooddata/react-components';
export {
  default as okaidia
} from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia";


interface ChartProps {
  measures: any[];
  projectId: any;
  viewBy: any[];
}

@Component({
  selector: 'app-bar-chart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})

export class BarchartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  // this.http.get('assets/test.txt', {responseType: 'text'})
  //       .subscribe(data => console.log(data));
  
  code1 = `
  <div [ngStyle]="{'display':'flex', 'flex-direction':'column', 'width': '100vw', 'height': '100vh'}">
    <top-header>
      <a class="topHeaderItem" (click)="goToHome()">Home</a>
      <a class="topHeaderItem" (click)="gotoTOC()">Contents</a>
    </top-header>
  </div>
  `
  measures = [
    Model.measure(averageDailyTotalSales).localIdentifier("averageDailyTotalSales").format("#,##0"),
    Model.measure(averageCheckSizeByServer).localIdentifier("averageCheckSizeByServer").format("#,##0")
  ]
  viewBy = [
    Model.attribute(locationStateDisplayFormIdentifier).localIdentifier("menuItemNameAttributeDFIdentifier")
  ]
 
  private rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): ChartProps {
    return {
      projectId: projectId,
      measures: this.measures,
      viewBy: this.viewBy
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(BarChart, this.getProps()), this.getRootDomNode());
    }

  }

  ngOnInit() {
    this.rootDomID = uuid.v1();
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }
}
