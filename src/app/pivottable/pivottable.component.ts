import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import {  
  projectId, 
  avgAmount, 
  avgWon,
  productName,
  department,
  DepartmentDirectSales } from "../../../src/fixtures";

import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { PivotTable, Model } from '@gooddata/react-components';

interface ChartProps {
  measures: any[];
  rows: any[];
  columns: any[];
  projectId: any;
  totals: any[];
  sortBy: any[];
}

@Component({
  selector: 'app-pivot-table',
  template: '<div style="height: 300px" [id]="rootDomID"></div>'
})

export class PivottableComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  measures = [
    Model.measure(avgAmount).localIdentifier("AverageAmount").format("#,##0"),
    Model.measure(avgWon).localIdentifier("AverageWow").format("#,##0")
  ]
  rows = [
    Model.attribute(productName).localIdentifier("ProductName")
  ]
  columns = [
    Model.attribute(department).localIdentifier("Department")
  ]
  
  totals = [
    {
      measureIdentifier: "AverageAmount",
      type: "sum",
      attributeIdentifier: "ProductName"
    },
    {
      measureIdentifier: "AverageAmount",
      type: "avg",
      attributeIdentifier: "ProductName"
    },
    {
      measureIdentifier: "AverageWow",
      type: "sum",
      attributeIdentifier: "ProductName"
    },
    {
      measureIdentifier: "AverageWow",
      type: "avg",
      attributeIdentifier: "ProductName"
    }
  ]
  // sortBy = [
  //   Model.measureSortItem("avgAmount","desc")
  // ]
  sortBy = [
    Model.measureSortItem("AverageAmount", "asc")
        .attributeLocators({attributeIdentifier: "Department", element: DepartmentDirectSales})
  ];
 
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
      rows: this.rows,
      columns: this.columns,
      totals: this.totals,
      sortBy: this.sortBy,
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(PivotTable, this.getProps()), this.getRootDomNode());
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
