import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import {  
  projectId, 
  locationNameDisplayFormIdentifier,
  totalSalesIdentifier,
  locationStateDisplayFormIdentifier,
  locationStateAttributeUri,
  locationCityDisplayFormIdentifier } from "../../../fixtures";


import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { AttributeFilter, BarChart, Model, ErrorComponent } from '@gooddata/react-components';

let self: any;

interface AttributeFilterProps {
  projectId: any;
  identifier: any;
  fullscreenOnMobile: boolean;
  onApply: any;
}

interface BarChartProps {
  measures: any[];
  projectId: any;
  viewBy: any[];
  filters: any[];
}

export interface ErrorProps {
  code?: string;
  icon?: string;
  message: string;
  description?: string;
  className?: string;
  style?: object;
  width?: any;
  height?: any;
}

@Component({
  selector: 'app-barchart-for-parent-example',
  templateUrl: './barchart-for-parent-example.component.html',
  styleUrls: ['./barchart-for-parent-example.component.css']
})
export class BarchartForParentExampleComponent implements OnInit {

  message: string;
  filters: any[];
  measures = [
    Model.measure(totalSalesIdentifier).localIdentifier("TotalSales").format("#,##0")
  ]
  viewBy = [
    Model.attribute(locationNameDisplayFormIdentifier).localIdentifier("LocationName")
  ]

  // filters = [
  //   Model.positiveAttributeFilter(employeeNameIdentifier, ['Aimee McKenzie'], true)
  // ]
 
  public rootDomID: string;
  public barRoomDataID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getBarDataNode() {
    const node = document.getElementById(this.barRoomDataID);
    invariant(node, `Node barRoomDataID not found!`);
    return node;
  }

  protected getAttributeProps(): AttributeFilterProps {
    return {
      projectId: projectId,
      identifier: locationStateDisplayFormIdentifier,
      onApply: this.onApply,
      fullscreenOnMobile: false,

    };
  }

  protected getBarChartProps(): BarChartProps {
    return {
      projectId: projectId,
      measures: this.measures,
      viewBy: this.viewBy,
      filters: this.filters,
    };
  }

  protected getErrorProps(): ErrorProps {
    return {
      message: this.message,
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  onLoadingChanged(...params) {
    // tslint:disable-next-line: no-console
    console.info('AttributeFilterExample onLoadingChanged', ...params);
  }

  onApply(filter) {
    self.message = null;
    if (filter.in) {
      self.filters = self.filterPositiveAttribute(filter);
    } else {
      self.filters = self.filterNegativeAttribute(filter);
    }
    self.renderChart();
  }

  onError(...params) {
    // tslint:disable-next-line: no-console
    console.info('AttributeFilterExample onLoadingChanged', ...params);
  }

  public filterPositiveAttribute(filter) {
    var filters;
    if (filter.in.length !== 0) {
      filters = [
        {
          positiveAttributeFilter: {
            displayForm: {
              identifier: filter.id,
            },
            in: filter.in.map(element => `${locationStateAttributeUri}/elements?id=${element}`),
            //textFilter: true
          },
        },
      ];
    } else {
      return self.message = 'The filter must have at least one item selected';
    }
    return filters;
  }

  public filterNegativeAttribute(filter) {
    var filters;
    if (filter.notIn.length !== 0) {
      filters = [
        {
          negativeAttributeFilter: {
            displayForm: {
              identifier: filter.id,
            },
            notIn: filter.notIn.map(element => `${locationStateAttributeUri}/elements?id=${element}`),
            //textFilter: true
          },
        },
      ];
    }
    return filters;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(
        React.createElement(AttributeFilter, this.getAttributeProps()), this.getRootDomNode());
    }
    this.renderChart();
  }

  protected renderChart() {
    if (this.message) {
      ReactDOM.render(React.createElement(ErrorComponent, this.getErrorProps()), this.getBarDataNode());
    } else {
      ReactDOM.render(React.createElement(BarChart, this.getBarChartProps()), this.getBarDataNode());
    }

  }

  ngOnInit() {
    self = this;
    this.rootDomID = uuid.v1();
    this.barRoomDataID = 'barRoomDataID';
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