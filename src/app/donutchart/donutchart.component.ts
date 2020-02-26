import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import {  
  projectId, 
  avgAmount, 
  avgWon } from "../../../src/fixtures";

import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { DonutChart, Model } from '@gooddata/react-components';

interface ChartProps {
  measures: any[];
  projectId: any;
}


@Component({
  selector: 'app-donut-chart',
  template: '<div style="height: 300px" [id]="rootDomID"></div>'
})

export class DonutchartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  measures = [
    Model.measure(avgAmount).localIdentifier("AverageAmount").format("#,##0"),
    Model.measure(avgWon).localIdentifier("AverageWon").format("#,##0")
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
      measures: this.measures
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(DonutChart, this.getProps()), this.getRootDomNode());
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
