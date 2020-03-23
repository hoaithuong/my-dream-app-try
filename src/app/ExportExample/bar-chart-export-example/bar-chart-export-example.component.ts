import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import {  
  projectId, 
  totalSalesIdentifier, 
  locationResortIdentifier,
  dateDataSetUri } from "../../../fixtures";
import { ExampleWithExportComponent } from "../../utils/example-with-export/example-with-export.component"

import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { BarChart, Model } from '@gooddata/react-components';

interface ChartProps {
  measures: any[];
  projectId: any;
  viewBy: any[];
  filters: any[];
  onExportReady?: any;
  onLoadingChanged?: any;
  onError?: any;
}

@Component({
  selector: 'app-bar-chart-export-example',
  templateUrl: './bar-chart-export-example.component.html',
  styleUrls: ['./bar-chart-export-example.component.css']
})

export class BarChartExportExampleComponent implements OnInit {
  constructor() {
  }

  amount = [Model.measure(totalSalesIdentifier)
    .format("#,##0")
    .alias("$ Total Sales")];
  locationResort = [Model.attribute(locationResortIdentifier)];
  filters = [Model.absoluteDateFilter(dateDataSetUri, "2017-01-01", "2017-12-31")]
 
  private rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  onLoadingChanged(...params) {
    // eslint-disable-next-line no-console
    console.info("BarChartExportExample onLoadingChanged", ...params);
  }

  onError(...params) {
      // eslint-disable-next-line no-console
      console.info("BarChartExportExample onLoadingChanged", ...params);
  }

  protected getProps(onExportReady): ChartProps {
    return {
      projectId: projectId,
      measures: this.amount,
      viewBy: this.locationResort,
      filters: this.filters,
      onExportReady: onExportReady,
      onLoadingChanged: this.onLoadingChanged,
      onError: this.onError
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(
        ExampleWithExportComponent,
        null,
        function(onExportReady) {
          return React.createElement(
            "div",
            {
              style: {
                height: 300
              },
              className: "s-bar-chart"
            },
            React.createElement(BarChart, this.getProps(onExportReady))
          );
        }
      ),
      this.getRootDomNode());
      
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

