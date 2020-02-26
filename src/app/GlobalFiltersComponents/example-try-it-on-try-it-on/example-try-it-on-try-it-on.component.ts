import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Employees } from './employeeInterface';
import {EMPLOYEES} from './mockEmployees';
import '@gooddata/react-components/styles/css/main.css';
import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import * as invariant from 'invariant';

import {
  AttributeElements,
  Kpi,
  Model } from "@gooddata/react-components";

import {
  projectId,
  employeeNameIdentifier,
  averageCheckSizeByServer,
  employeeNameUri } from '../../../fixtures';

let self: any;

interface AttributeElementsProps {
  identifier: any;
  projectId: any;
  options: any;
  elementsMeta?: {
    filter: any;
  }
  element?: {
    uri: string;
    title: string;
  };
}

interface KpiCheckAmountProps {
  measure: any;
  projectId: any;
  filters?: any[];
}

@Component({
  selector: 'app-example-try-it-on-try-it-on',
  templateUrl: './example-try-it-on-try-it-on.component.html',
  styleUrls: ['./example-try-it-on-try-it-on.component.css']
})

export class ExampleTryItOnTryItOnComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  validElements: any;
  selectedEmployeeUri: any;
  options={ limit: 20 }
  employees = EMPLOYEES;
  selectedEmployee: Employees;
  employeefilter: any;
  filter?: any[];
  element:{
    uri: "/gdc/md/exveshu0intwbr4nk6ao8ft6vesjiqus/obj/2200/elements?id=6339689",
    title: "Aaron Watson"
  }
  onSelect(employees: Employees): void{
    self.selectedEmployee = employees;
    console.log(self.getValidElementProps(self.selectedEmployee));
    //self.validElements = self.validElements.items[0].element.uri;
    //self.selectedEmployee = self.validElements.items.find(item => item.element.uri === self.selectedEmployeeUri).element;
    self.employeefilter = {
      name: employees.name,
      uri: `${employeeNameUri}/elements?id=${self.selectedEmployee.id}`,
    };
    self.selectedEmployee.isLoading = false;
    self.selectedEmployee.error = null;
    self.selectedEmployee.gender = employees.gender === "M" ? "men" : "women";
    self.selectedEmployee.job_title = employees.gender === "men" ? "waiter" : "waitress";
    self.renderKpiCheckAmount(self.getFilters(self.employeefilter.name, null));
    self.renderAttributeElements(self.getFilters(self.employeefilter.name, null));

    //self.selectedEmployeeUri= props.validElements.items[0].element.uri;
    //return this.validElements.items[1].element.uri;
    //self.validElements.uri = self.employeefilter.uri;
  }

  constructor() {}

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.validElements !== self.props.validElements) {
  //       this.setDefaultSelection(nextProps);
  //   }
  // }
  // setDefaultSelection(props) {
  //   self.selectedEmployeeUri= props.validElements.items[0].element.uri
  // }
  private validElementRootDomID: string;
  public kpiCheckAmountRootDomID: string;

  protected getValidElementRootDomNode() {
    const node = document.getElementById(this.validElementRootDomID);
    invariant(node, `Node validElementRootDomID not found!`);
    return node;
  }

  protected getKpiCheckAmountRootDomNode() {
    const node = document.getElementById(this.kpiCheckAmountRootDomID);
    invariant(node, `Node kpiCheckAmountRootDomID not found!`);
    return node;
  }

  protected getValidElementProps(employeefilter): AttributeElementsProps {
    return {
      projectId: projectId,
      identifier: employeeNameIdentifier,
      options: this.options,
      elementsMeta: {
        filter: employeefilter
      },
     // element: this.validElements,
    };
  }

  protected getKpiCheckAmountProps(employeefilter): KpiCheckAmountProps {
    return {
      projectId: projectId,
      measure: averageCheckSizeByServer,
      filters: employeefilter,
    };
  }

  getFilters = (employeefilter) => {
    const filters = [];
    if (employeefilter) {
      filters.push(Model.positiveAttributeFilter(employeeNameIdentifier, [self.getValidElementRootDomNode().validElements.items[0].element.uri]));
    }
    return filters;
  };

  protected render() {
    this.renderKpiCheckAmount(this.selectedEmployee);
    this.renderAttributeElements(this.selectedEmployee);
  }

  public renderAttributeElements(employeefilter) {
    console.log('thuong');
    console.log(employeefilter);
    //ReactDOM.render(React.createElement(AttributeElements, this.getValidElementProps(employeefilter)), this.getValidElementRootDomNode());
    ReactDOM.render(React.createElement(AttributeElements, this.getValidElementProps(employeefilter)), this.getValidElementRootDomNode()).validElements.items[0].element.uri;
  }
  public renderKpiCheckAmount(employeefilter) {
    ReactDOM.render(React.createElement(Kpi, this.getKpiCheckAmountProps(employeefilter)), this.getKpiCheckAmountRootDomNode());
  }

  ngOnInit() {
    self = this;
    this.validElementRootDomID = 'validElementRootDomID';
    this.kpiCheckAmountRootDomID = 'kpiCheckAmountRootDomID';
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
