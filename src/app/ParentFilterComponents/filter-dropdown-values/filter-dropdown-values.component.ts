import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { STATELOCATION } from './mockStateLocation';
import { CITYLOCATION } from './mockCityLocation';
import { Component } from '@angular/core';
import Select from "react-select";

import {  
  projectId, 
  totalSalesIdentifier, 
  locationNameDisplayFormIdentifier,
  locationStateAttributeIdentifier,
  locationCityAttributeIdentifier,
  locationIdAttributeIdentifier,
  locationStateDisplayFormIdentifier,
  locationStateAttributeUri,
  locationCityDisplayFormIdentifier,
  locationCityAttributeUri } from "../../../fixtures";

import { AttributeFilter, BarChart, Model } from '@gooddata/react-components';

let self: any;

interface ChartProps {
  measures: any[];
  projectId: any;
  viewBy: any[];
  filters?: any[];
}

@Component({
  selector: 'app-filter-dropdown-values',
  templateUrl: './filter-dropdown-values.component.html',
  styleUrls: ['./filter-dropdown-values.component.css']
})

export class FilterDropdownValuesComponent {
  uri: any[];
  title = 'Test filter dropdown';
  stateDropdownList = [];
  stateDropdownSettings = {};
  stateSelectedItems = [];

  cityDropdownList = [];
  cityDropdownSettings = {};
  citySelectedItems = [];
  stateFilterValue=[];
  measures = [
    Model.measure(totalSalesIdentifier).localIdentifier("TotalSalesIdentifier").format("#,##0")
  ]
  viewBy = [
    Model.attribute(locationNameDisplayFormIdentifier).localIdentifier("LocationNameDisplayFormIdentifier")
  ]

  private ChartrootDomID: string;

  protected getChartRootDomNode() {
    const node = document.getElementById(this.ChartrootDomID);
    invariant(node, `Node ChartrootDomID not found!`);
    return node;
  }

  protected getChartProps(stateFilterValues, cityFilterValues): ChartProps {
    const visFilters = [];

        if (stateFilterValues.length) {
            visFilters.push(
                Model.positiveAttributeFilter(
                    locationStateDisplayFormIdentifier,
                    stateFilterValues.map(item => item.uri),
                ),
            );
        }
        if (cityFilterValues.length) {
            visFilters.push(
                Model.positiveAttributeFilter(
                    locationCityDisplayFormIdentifier,
                    cityFilterValues.map(item => item.uri),
                ),
            );
        }
    return {
      projectId: projectId,
      measures: this.measures,
      viewBy: this.viewBy,
      filters: visFilters
    }
  }
   
  ngOnInit(){
    self = this;
    console.log("init");
    this.stateDropdownList = STATELOCATION;
    this.stateSelectedItems = STATELOCATION;
    this.stateDropdownSettings = {
      singleSelection: false,
      idField: 'uri',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'All States',
      itemsShowLimit: 5,
      allowSearchFilter: false
    };

    this.cityDropdownList = CITYLOCATION;
    // this.citySelectedItems = CITYLOCATION;
    const cityOptions = { limit: 20 };
    console.log(self.stateSelectedItems.length);
    if (true) {
      // parent value uris need to be surrounded by '[]' and separated by ','
      const selectedParentItems = this.stateSelectedItems
          .map(parentItem => `[${parentItem.value}]`)
          .join(", ");
      const afm = {
          attributes: [
              {
                  displayForm: {
                      identifier: locationCityDisplayFormIdentifier,
                  },
                  localIdentifier: "childAttribute",
              },
          ],
          filters: [
              {
                  expression: {
                      value:
                          // parent attribute identifier surrounded by '{}'
                          `({${locationStateAttributeIdentifier}}` +
                          // selected parent values surrounded by '[]' and separated by ','
                          ` IN (${selectedParentItems}))` +
                          // attribute identifier of common attribute between parent
                          // and child attributes surrounded by '{}'
                          ` OVER {${locationIdAttributeIdentifier}}` +
                          // child attribute identifier surrounded by '{}'
                          ` TO {${locationCityAttributeIdentifier}}`,
                  },
              },
          ],
      };
      self.cityOptions = afm;
      console.log("test");
      console.log(afm);
  }
   this.cityDropdownSettings = {
    singleSelection: false,
    idField: 'uri',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'All Cities',
    itemsShowLimit: self.cityOptions,
    allowSearchFilter: false
  }
  console.log('thuong test')
  console.log(self.cityOptions)

  // this.cityDropdownSettings = {
  //   singleSelection: false,
  //   idField: 'uri',
  //   textField: 'name',
  //   selectAllText: 'Select All',
  //   unSelectAllText: 'Un Select All',
  //   itemsShowLimit: 10,
  //   allowSearchFilter: false
  // }

    this.ChartrootDomID = 'ChartrootDomID';

  }

  protected renderChart() {
    // var uriList = [];
    // if (this.stateSelectedItems.length > 0) {
    //   uriList = this.stateSelectedItems.map(item => item.uri);
    // }
    // if (this.citySelectedItems.length > 0) {
    //   uriList = this.citySelectedItems.map(item => item.uri);
    // }
    ReactDOM.render(React.createElement(BarChart, this.getChartProps(this.stateSelectedItems, this.citySelectedItems)), this.getChartRootDomNode());
  }

  onItemSelectState(){
    self.renderChart();
  }

  onItemSelectCity(){
    self.renderChart();
  }

  onSelectAllState(items: any){
    console.log('selectall');
    self.stateSelectedItems = items;
    console.log(self.stateSelectedItems);
    self.renderChart();
  }

  onSelectAllCity(items: any){
    console.log('selectall');
    self.citySelectedItems = items;
    console.log(self.cityOptions);
    self.renderChart();
  }

  onDeSelectState(){
    console.log('DeSelect');
    self.renderChart();
  }

  onDeSelectCity(){
    console.log('DeSelect');
    self.renderChart();
  }

  onDeSelectAllState(items: any){
    console.log('DeSelectAll');
    self.stateSelectedItems = items;
    console.log(self.stateSelectedItems);
    this.stateSelectedItems = STATELOCATION;
    self.renderChart();
  }

  onDeSelectAllCity(items: any){
    console.log('DeSelectAll');
    self.citySelectedItems = items;
    console.log(self.citySelectedItems);
    this.citySelectedItems = CITYLOCATION;
    self.renderChart();
  }

  ngOnChanges() {
    console.log('changes');
    self.renderChart();
  }

  ngAfterViewInit() {
    console.log('viewiinit');
    self.renderChart();
  }

  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }
}
