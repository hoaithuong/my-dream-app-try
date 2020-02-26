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
  employeeNameDisplayFormUri,
  employeeNameUri,
  dateDatasetIdentifier} from "../../../fixtures";


import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { AttributeFilter, BarChart, PieChart, Kpi, Model, ErrorComponent } from '@gooddata/react-components';

let self: any;

interface AttributeFilterProps {
  projectId: any;
  identifier: any;
  fullscreenOnMobile: boolean;
  onApply: any;
}

interface KpiCheckAmountProps {
  measure: any;
  projectId: any;
  filters?: any[];
}

interface KpiDailySalesProps {
  measure: any;
  projectId: any;
  filters: any[];
}

interface BarChartProps {
  measures: any[];
  projectId: any;
  viewBy: any[];
  filters: any[];
}

interface PieChartProps {
  measures: any[];
  projectId: any;
  viewBy: any;
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
  selector: 'app-attribute-filters',
  templateUrl: './attribute-filters.component.html',
})
export class AttributeFiltersComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  message: string;
  filters: any[];
  measures = [
    Model.measure(averageDailyTotalSales).localIdentifier("AverageDailyTotalSales").format("#,##0")
  ]
  viewByItem = [
    Model.attribute(menuItemNameAttributeDFIdentifier).localIdentifier("MenuItem")
  ]
  viewByCategory = Model.attribute(menuCategoryAttributeDFIdentifier).localIdentifier("MenuCategory")

  // filters = [
  //   Model.positiveAttributeFilter(employeeNameIdentifier, ['Aimee McKenzie'], true)
  // ]
 
  public rootDomID: string;
  public barRoomDataID: string;
  public pieRoomDataID: string;
  public kpiCheckAmountRootDomID: string;
  public kpiDailySalesRootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getKpiCheckAmountRootDomNode() {
    const node = document.getElementById(this.kpiCheckAmountRootDomID);
    invariant(node, `Node kpiCheckAmountRootDomID not found!`);
    return node;
  }

  protected getKpiDailySalesRootDomNode() {
    const node = document.getElementById(this.kpiDailySalesRootDomID);
    invariant(node, `Node kpiDailySalesRootDomID not found!`);
    return node;
  }

  protected getBarDataNode() {
    const node = document.getElementById(this.barRoomDataID);
    invariant(node, `Node barRoomDataID not found!`);
    return node;
  }

  protected getPieDataNode() {
    const node = document.getElementById(this.pieRoomDataID);
    invariant(node, `Node pieRoomDataID not found!`);
    return node;
  }


  protected getAttributeProps(): AttributeFilterProps {
    return {
      projectId: projectId,
      identifier: employeeNameIdentifier,
      onApply: this.onApply,
      fullscreenOnMobile: false,

    };
  }

  protected getKpiCheckAmountProps(): KpiCheckAmountProps {
    return {
      projectId: projectId,
      measure: averageCheckSizeByServer,
      filters: this.filters,
    };
  }

  protected getKpiDailySalesProps(): KpiDailySalesProps {
    return {
      projectId: projectId,
      measure: averageDailyTotalSales,
      filters: this.filters,
    };
  }

  protected getBarChartProps(): BarChartProps {
    return {
      projectId: projectId,
      measures: this.measures,
      viewBy: this.viewByItem,
      filters: this.filters,
    };
  }

  protected getPieChartProps(): PieChartProps {
    return {
      projectId: projectId,
      measures: this.measures,
      viewBy: this.viewByCategory,
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
            in: filter.in.map(element => `${employeeNameUri}/elements?id=${element}`),
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
            notIn: filter.notIn.map(element => `${employeeNameUri}/elements?id=${element}`),
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
      ReactDOM.render(React.createElement(Kpi, this.getKpiCheckAmountProps()), this.getKpiCheckAmountRootDomNode());
      ReactDOM.render(React.createElement(Kpi, this.getKpiDailySalesProps()), this.getKpiDailySalesRootDomNode());
      ReactDOM.render(React.createElement(BarChart, this.getBarChartProps()), this.getBarDataNode());
      ReactDOM.render(React.createElement(PieChart, this.getPieChartProps()), this.getPieDataNode());
    }

  }

  ngOnInit() {
    self = this;
    this.rootDomID = uuid.v1();
    this.kpiCheckAmountRootDomID = 'kpiCheckAmountRootDomID'
    this.kpiDailySalesRootDomID = 'kpiDailySalesRootDomID'
    this.barRoomDataID = 'barRoomDataID';
    this.pieRoomDataID = 'pieRoomDataID';
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


