import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import {  
  projectId, 
  totalSalesIdentifier, 
  locationNameDisplayFormIdentifier,
  locationStateDisplayFormIdentifier,
  locationStateAttributeUri,
  locationCityDisplayFormIdentifier,
  locationCityAttributeUri } from "../../../fixtures";

import { 
  Component, 
  OnInit, 
  OnDestroy, 
  OnChanges, 
  AfterViewInit } from '@angular/core';
import { 
  AttributeFilter, 
  BarChart, 
  Model } from '@gooddata/react-components';

let self: any;

interface FilterProps {
  projectId: any;
  identifier: any;
  fullscreenOnMobile: boolean;
  onApply: any;
  filter?: any;
}

interface ChartProps {
  measures: any[];
  projectId: any;
  viewBy: any[];
  filters?: any[];
}

@Component({
  selector: 'app-filter-of-filter',
  templateUrl: './filter-of-filter.component.html',
  styleUrls: ['./filter-of-filter.component.css']
})
export class FilterOfFilterComponent implements OnInit {
  filter: any;
  filters: any[];
  measures = [
    Model.measure(totalSalesIdentifier).localIdentifier("AverageAmount").format("#,##0")
  ]
  viewBy = [
    Model.attribute(locationNameDisplayFormIdentifier).localIdentifier("ProductName")
  ]
 
  private StateFilterRootDomID: string;
  private CityFilterRootDomID: string;
  private ChartrootDomID: string;

  protected getStateFilterRootDomNode() {
    const node = document.getElementById(this.StateFilterRootDomID);
    invariant(node, `Node '${this.StateFilterRootDomID} not found!`);
    return node;
  }

  protected getCityFilterRootDomNode() {
    const node = document.getElementById(this.CityFilterRootDomID);
    invariant(node, `Node CityFilterRootDomID not found!`);
    return node;
  }

  protected getChartRootDomNode() {
    const node = document.getElementById(this.ChartrootDomID);
    invariant(node, `Node ChartrootDomID not found!`);
    return node;
  }

  protected getStateFilterProps(): FilterProps {
    return {
      projectId: projectId,
      identifier: locationStateDisplayFormIdentifier,
      onApply: this.onApply,
      fullscreenOnMobile: false
    };
  }

  protected getCityFilterProps(): FilterProps {
    return {
      projectId: projectId,
      identifier: locationCityDisplayFormIdentifier,
      onApply: this.onApply1,
      fullscreenOnMobile: false,
      filter: this.filter
    };
  }

  protected getChartProps(): ChartProps {
    return {
      projectId: projectId,
      measures: this.measures,
      viewBy: this.viewBy,
      filters: this.filters
    };
  }

  private isMounted(): boolean {
    return !!this.StateFilterRootDomID;
  }

  onApply(filter) {
    if (filter.in) {
      self.filters = self.StateFilterPositiveAttribute(filter);
    } else {
      self.filters = self.StateFilterNegativeAttribute(filter);
    }
    //self.filter = self.filters[0];
    console.log(self.filters);
    console.log(filter);
    self.renderChart();
    self.renderCityFilter();
  }

  onApply1(filter) {
    if (filter.in) {
      self.filters = self.CityFilterPositiveAttribute(filter);
    } else {
      self.filters = self.CityFilterNegativeAttribute(filter);
    }
    self.renderChart();
  }

  public StateFilterPositiveAttribute(filter) {
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
    }
    return filters;
  }

  public StateFilterNegativeAttribute(filter) {
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

  public CityFilterPositiveAttribute(filter) {
    var filters;
    if (filter.in.length !== 0) {
      filters = [
        {
          positiveAttributeFilter: {
            displayForm: {
              identifier: filter.id,
            },
            in: filter.in.map(element => `${locationCityAttributeUri}/elements?id=${element}`),
            //textFilter: true
          },
        },
      ];
    }
    return filters;
  }

  public CityFilterNegativeAttribute(filter) {
    var filters;
    if (filter.notIn.length !== 0) {
      filters = [
        {
          negativeAttributeFilter: {
            displayForm: {
              identifier: filter.id,
            },
            notIn: filter.notIn.map(element => `${locationCityAttributeUri}/elements?id=${element}`),
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
        React.createElement(AttributeFilter, this.getStateFilterProps()), this.getStateFilterRootDomNode(),
        );
    }
    this.renderCityFilter();
    this.renderChart();
  }

  protected renderCityFilter() {
    ReactDOM.render(React.createElement(AttributeFilter, this.getCityFilterProps()), this.getCityFilterRootDomNode());
  }

  protected renderChart() {
    ReactDOM.render(React.createElement(BarChart, this.getChartProps()), this.getChartRootDomNode());
  }

  ngOnInit() {
    self = this;
    this.StateFilterRootDomID = uuid.v1();
    this.CityFilterRootDomID = 'CityFilterRootDomID';
    this.ChartrootDomID = 'ChartrootDomID';
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
