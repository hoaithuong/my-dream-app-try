import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import {  
  projectId, 
  menuItemNameAttributeDFIdentifier,
  averageDailyTotalSales,
  averageCheckSizeByServer,
  menuCategoryAttributeDFIdentifier,
  employeeNameIdentifier,
  employeeNameDisplayFormUri} from "../../../../src/fixtures";

import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { BarChart, Model } from '@gooddata/react-components';

interface ChartProps {
  measures: any[];
  projectId: any;
  viewBy: any[];
  filters: any[];
}

@Component({
  selector: 'app-barchart-daily-saleby-menu-item',
  template: '<div style="height: 300px" [id]="rootDomID"></div>'
})
export class BarchartDailySalebyMenuItemComponent implements OnInit {


  measures = [
    Model.measure(averageDailyTotalSales).localIdentifier("AverageAmount").format("#,##0")
  ]
  viewBy = [
    Model.attribute(menuItemNameAttributeDFIdentifier).localIdentifier("MenuItem")
  ]
  filters = [
    Model.positiveAttributeFilter(employeeNameIdentifier, ['Aimee McKenzie'], true)
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
      filters: this.filters,
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

