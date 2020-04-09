import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import {  
  projectId, 
  averageDailyTotalSales, 
  averageCheckSizeByServer, 
  locationStateDisplayFormIdentifier } from "../../../src/fixtures";

import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { AreaChart, Model } from '@gooddata/react-components';

interface ChartProps {
  measures: any[];
  projectId: any;
  viewBy: any[];
}

@Component({
  selector: 'app-area-chart',
  template: '<div style="height: 300px" [id]="rootDomID"></div>'
})

export class AreachartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  measures = [
    Model.measure(averageDailyTotalSales).localIdentifier("AveraaverageDailyTotalSalesgeAmount").format("#,##0"),
    Model.measure(averageCheckSizeByServer).localIdentifier("averageCheckSizeByServer").format("#,##0")
  ]
  viewBy = [
    Model.attribute(locationStateDisplayFormIdentifier).localIdentifier("locationStateDisplayFormIdentifier")
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
      viewBy: this.viewBy,
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
   // const props = this.getProps();

    if (this.isMounted()) {
      ReactDOM.render(React.createElement(AreaChart, this.getProps()), this.getRootDomNode());
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
