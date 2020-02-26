import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { Kpi } from '@gooddata/react-components';
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
  employeeNameDisplayFormUri} from "../../../src/fixtures";

let self: any;

interface KpiDailySalesProps {
  measure: any;
  projectId: any;
  filters: any[];
}

interface KpiCheckAmountProps {
  measure: any;
  projectId: any;
  filters: any[];
}

@Component({
  selector: 'app-global-filters',
  template: '<div style="height: 50px" [id]="rootDomID"></div>'
})
export class GlobalFiltersComponent implements OnInit {

  public rootDomDailySalesID: string;
  public rootDomCheckAmountID: string;

  protected getDailySalesRootDomNode() {
    const node = document.getElementById(this.rootDomDailySalesID);
    invariant(node, `Node rootDomDailySalesID not found!`);
    return node;
  }

  protected getCheckAmountRootDomNode() {
    const node = document.getElementById(this.rootDomCheckAmountID);
    invariant(node, `Node rootDomCheckAmountID not found!`);
    return node;
  }

  protected getDailySalesProps(): KpiDailySalesProps {
    return {
      projectId: projectId,
      measure: averageDailyTotalSales,
      filters: [{
        positiveAttributeFilter: {
            displayForm: {
                identifier: employeeNameIdentifier
            },
            in: ['Aimee McKenzie'],
            textFilter: true
        }
    }]
    };
  }

  protected getCheckAmountProps(): KpiCheckAmountProps {
    return {
      projectId: projectId,
      measure: averageCheckSizeByServer,
      filters: [{
        positiveAttributeFilter: {
            displayForm: {
                identifier: employeeNameIdentifier
            },
            in: ['Aimee McKenzie'],
            textFilter: true
        }
    }]
    };
  }

  private isMountedDailySales(): boolean {
    return !!this.rootDomDailySalesID;
  }

  private isMountedCheckAmount(): boolean {
    return !!this.rootDomCheckAmountID;
  }

  protected renderDailySales() {

    if (this.isMountedDailySales()) {
      ReactDOM.render(React.createElement(Kpi, this.getDailySalesProps()), this.getDailySalesRootDomNode());
    }
  }

  protected renderCheckAmount() {

    if (this.isMountedCheckAmount()) {
      ReactDOM.render(React.createElement(Kpi, this.getCheckAmountProps()), this.getCheckAmountRootDomNode());
    }
  }

  ngOnInit() {
    self = this;
    this.rootDomDailySalesID = uuid.v1();
    this.rootDomCheckAmountID = 'rootdomcheckamountid';
  }

  ngOnChanges() {
    this.renderDailySales();
    this.renderCheckAmount();
  }

  ngAfterViewInit() {
    this.renderDailySales();
    this.renderCheckAmount();
  }

  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }
}

