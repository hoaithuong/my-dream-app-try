import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as invariant from 'invariant';
import { BarChart, Model } from '@gooddata/react-components';
import { Component, OnInit } from '@angular/core';
import {
  projectId,
  totalSalesIdentifier,
  locationResortIdentifier,
  dateDataSetUri
} from "../../../fixtures";
import { ExampleWithExportComponent } from '../example-with-export/example-with-export.component';

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
  selector: 'app-thgtest',
  template: `<div style ="height: 500px"><app-example-with-export></app-example-with-export><div [id]="rootDomID"></div></div>`
})

export class ThgtestComponent implements OnInit {
  constructor(private ExportComponent: ExampleWithExportComponent) { }

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

  protected getProps(): ChartProps {
    return {
      projectId: projectId,
      measures: this.amount,
      viewBy: this.locationResort,
      filters: this.filters,
      onExportReady: this.ExportComponent.onExportReady,
    };
  }

  protected render() {

    ReactDOM.render(
      React.createElement(BarChart, this.getProps()), this.getRootDomNode());
  }

  ngOnInit() {
    this.rootDomID = 'rootDomID';
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }
  
}