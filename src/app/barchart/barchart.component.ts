import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import {  
  projectId, 
  avgAmount, 
  avgWon, 
  productName } from "../../../src/fixtures";

import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { BarChart, Model } from '@gooddata/react-components';

interface ChartProps {
  measures: any[];
  projectId: any;
  viewBy: any[];
}

@Component({
  selector: 'app-bar-chart',
  template: '<div style="height: 300px" [id]="rootDomID"></div>'
})

export class BarchartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  measures = [
    Model.measure(avgAmount).localIdentifier("AverageAmount").format("#,##0"),
    Model.measure(avgWon).localIdentifier("AverageWon").format("#,##0")
  ]
  viewBy = [
    Model.attribute(productName).localIdentifier("ProductName")
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
