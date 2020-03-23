import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import {  
  projectId, 
  franchiseFeesIdentifier, 
  franchiseFeesAdRoyaltyIdentifier,
  franchiseFeesInitialFranchiseFeeIdentifier,
  franchiseFeesIdentifierOngoingRoyalty,
  locationStateDisplayFormIdentifier,
  locationNameDisplayFormIdentifier,
  menuCategoryAttributeDFIdentifier,
  quarterDateIdentifier,
  monthDateIdentifier,
  dateDataSetUri } from "../../../fixtures";

import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { PivotTable, Model } from '@gooddata/react-components';

interface ChartProps {
  measures: any[];
  rows: any[];
  columns: any[];
  projectId: any;
  sortBy: any[];
  filters: any[];
  pageSize: any;
}

@Component({
  selector: 'app-pivot-table-export-example',
  templateUrl: './pivot-table-export-example.component.html',
  styleUrls: ['./pivot-table-export-example.component.css']
})
export class PivotTableExportExampleComponent implements OnInit {

  measures = [
    Model.measure(franchiseFeesIdentifier).format("#,##0"),
    Model.measure(franchiseFeesAdRoyaltyIdentifier).format("#,##0"),
    Model.measure(franchiseFeesInitialFranchiseFeeIdentifier).format("#,##0"),
    Model.measure(franchiseFeesIdentifierOngoingRoyalty).format("#,##0"),
  ];

  attributes = [
    Model.attribute(locationStateDisplayFormIdentifier),
    Model.attribute(locationNameDisplayFormIdentifier),
    Model.attribute(menuCategoryAttributeDFIdentifier).localIdentifier("menu"),
  ];
  columns = [Model.attribute(quarterDateIdentifier), Model.attribute(monthDateIdentifier)];
  sortBy = [Model.attributeSortItem("menu", "asc")];
  filters = [Model.absoluteDateFilter(dateDataSetUri, "2017-01-01", "2017-12-31")];
  pageSize = 20;
 
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
      rows: this.attributes,
      columns: this.columns,
      sortBy: this.sortBy,
      filters: this.filters,
      pageSize: this.pageSize
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
