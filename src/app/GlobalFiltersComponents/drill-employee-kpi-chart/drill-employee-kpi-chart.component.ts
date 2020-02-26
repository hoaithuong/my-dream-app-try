import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as moment from 'moment';
import * as invariant from 'invariant';
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';

import '@gooddata/react-components/styles/css/main.css';
import {
  Table,
  AttributeElements,
  Kpi,
  BarChart,
  PieChart,
  LoadingComponent,
  ErrorComponent,
  HeaderPredicateFactory,
  Model,
} from "@gooddata/react-components";
import {
  projectId,
  employeeNameIdentifier,
  averageDailyTotalSales,
  locationStateDisplayFormIdentifier,
  locationStateAttributeUri,
  totalSalesIdentifier,
  locationNameDisplayFormIdentifier,
  locationNameAttributeUri,
  averageCheckSizeByServer,
  employeeNameUri,
  menuItemNameAttributeDFIdentifier,
  menuCategoryAttributeDFIdentifier
} from '../../../fixtures';

let self: any;

interface TableDrillExampleProps {
  projectId: any;
  measures?: any[];
  attributes?: any[];
  drillableItems?: any[];
  onFiredDrillEvent?: any;
  totals?: any[];
  filters?: any[];
  sortBy?: any[];
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
    config: any;
  }

//const dateFormat = "YYYY-MM-DD";
@Component({
  selector: 'app-drill-employee-kpi-chart',
  templateUrl: './drill-employee-kpi-chart.component.html',
  styleUrls: ['./drill-employee-kpi-chart.component.css']
})
export class DrillEmployeeKpiChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    employeefilter: any;
    message: string;
    filters: any[];
    measures = [
        Model.measure(averageDailyTotalSales).localIdentifier("AverageDailyTotalSales").format("#,##0")
      ]
    viewByItem = [
        Model.attribute(menuItemNameAttributeDFIdentifier).localIdentifier("MenuItem")
      ]
    viewByCategory = Model.attribute(menuCategoryAttributeDFIdentifier).localIdentifier("MenuCategory")
    xconfig = {
        legend: {
          enabled: true,
          position: 'bottom', 
        }
      }

  // employeeProfile: {
  //   employeeName: any;
  //   gender: any;
  //   id: any;
  //   registeredDate: any;
  //   job_title: any;
  // }
  // employee3rdPartyData: {
  //   error: null,
  //   isLoading: false,
  //   data: null,
  // }

  onEmployeeDrill = drillTarget => {
    const employee = drillTarget.drillContext.row[0];
    console.log("Drill on employee = " + employee.name);
    self.employeeName = employee.name;
    self.employeefilter = {
        name,
        uri: `${employeeNameUri}/elements?id=${employee.id}`,
    };
    const firstName = employee.name.split(" ")[0];

    fetch(`https://api.genderize.io/?name=${firstName}&country_id=us`)
      .then(res => res.json())
      .then(({ gender }) => {
        return fetch(
          `https://randomuser.me/api/?nat=us&inc=dob,cell,registered,location&gender=${gender}&seed=gooddata-${employee.id}`,
        )
          .then(res => res.json())
          .then(
            ({ results }) => {
              self.isLoading = false;
              self.error = null;
              self.id = parseInt(employee.id, 10) % 100;
              self.gender = gender === "male" ? "men" : "women";
              self.registeredDate = moment(results[0].registered.date).years();
              self.job_title = gender === "male" ? "waiter" : "waitress";
              self.renderKpiCheckAmount(self.getFilters(this.employeefilter, null));
              self.renderKpiDailySales(self.getFilters(this.employeefilter, null));
              self.renderBarChart(self.getFilters(this.employeefilter, null));
              self.renderPieChart(self.getFilters(this.employeefilter, null));
            },
            error => {
              self.isLoading = false;
              self.error = error;
              self.data = null
            },
          );
      });
      
  }

  public tableEmployeesDomID: string;
  public kpiCheckAmountRootDomID: string;
  public kpiDailySalesRootDomID: string;
  public barRoomDataID: string;
  public pieRoomDataID: string;

  protected getTableEmployeesDomNode() {
    const node = document.getElementById(this.tableEmployeesDomID);
    invariant(node, `Node '${this.tableEmployeesDomID} not found!`);
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

  getFilters = (employeefilter) => {
    const filters = [];
    if (employeefilter) {
      filters.push(Model.positiveAttributeFilter(employeeNameIdentifier, [employeefilter.uri]));
    }
    return filters;
  };

  // getMeasure = (identifier, localIdentifier, alias) =>
  //   Model.measure(identifier)
  //     .localIdentifier(localIdentifier)
  //     .alias(alias);

  getAttribute = (identifier, localIdentifier) => ({
    visualizationAttribute: {
      localIdentifier,
      displayForm: {
        identifier,
      },
    },
  });

  employeeNameAttribute = this.getAttribute(employeeNameIdentifier, "employeeName");

  protected getTableEmployeesProps(): TableDrillExampleProps {
    return {
      projectId: projectId,
      attributes: [this.employeeNameAttribute],
      drillableItems: [HeaderPredicateFactory.identifierMatch(employeeNameIdentifier)],
      onFiredDrillEvent: this.onEmployeeDrill,
    };
  }

  protected getKpiCheckAmountProps(employeefilter): KpiCheckAmountProps {
    return {
      projectId: projectId,
      measure: averageCheckSizeByServer,
      filters: employeefilter,
    };
  }

  protected getKpiDailySalesProps(employeefilter): KpiDailySalesProps {
    return {
      projectId: projectId,
      measure: averageDailyTotalSales,
      filters: employeefilter,
    };
  }

  protected getBarChartProps(employeefilter): BarChartProps {
    return {
      projectId: projectId,
      measures: this.measures,
      viewBy: this.viewByItem,
      filters: employeefilter,
    };
  }

  protected getPieChartProps(employeefilter): PieChartProps {
    return {
      projectId: projectId,
      measures: this.measures,
      viewBy: this.viewByCategory,
      filters: employeefilter,
      config: this.xconfig
    };
  }

  protected render() {
    this.renderEmployeesTable();
    this.renderKpiCheckAmount(this.getFilters(this.employeefilter));
  }

  public renderEmployeesTable() {
    ReactDOM.render(React.createElement(Table, this.getTableEmployeesProps()), this.getTableEmployeesDomNode());
    }

  public renderKpiCheckAmount(employeefilter) {
      ReactDOM.render(React.createElement(Kpi, this.getKpiCheckAmountProps(employeefilter)), this.getKpiCheckAmountRootDomNode());
  }

  public renderKpiDailySales(employeefilter) {
    ReactDOM.render(React.createElement(Kpi, this.getKpiDailySalesProps(employeefilter)), this.getKpiDailySalesRootDomNode());
}

  public renderBarChart(employeefilter) {
    ReactDOM.render(React.createElement(BarChart, this.getBarChartProps(employeefilter)), this.getBarDataNode());
  }

  public renderPieChart(employeefilter) {
    ReactDOM.render(React.createElement(PieChart, this.getPieChartProps(employeefilter)), this.getPieDataNode());
  }

  ngOnInit() {
    self = this;
    this.tableEmployeesDomID = "tableEmployeesDomData";
    this.kpiCheckAmountRootDomID = 'kpiCheckAmountRootDomID';
    this.kpiDailySalesRootDomID = 'kpiDailySalesRootDomID';
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
    //ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }
}
