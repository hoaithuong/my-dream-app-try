import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { STATELOCATION } from './mockStateLocation';
import { CITYLOCATION } from './mockCityLocation';
import Select from "react-select";
import "@gooddata/react-components/styles/css/main.css";

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
import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { AttributeElements, BarChart, Model, AfmComponents } from '@gooddata/react-components';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';

let self: any;

interface SelectProps {
  onChange: any;
  value: any;
  placeholder: string;
  multi: any;
  options: any[];
  className?: any,
  isLoading?: any,
}

interface AttributeElementsProps {
  key: any,
  identifier: any,
  projectId: any,
  options: any

}
@Component({
  selector: 'app-try-with-select',
  templateUrl: './try-with-select.component.html',
  styleUrls: ['./try-with-select.component.css']
})
export class TryWithSelectComponent implements OnInit{

  state = {
    stateFilterValues: [],
    cityFilterValues: []
  }
  stateAll = STATELOCATION;
  //stateFilterValues = [];
  afm: any;

  onStateChange = stateFilterValues => {
    //self.stateFilterValues= stateFilterValues
    this.state.stateFilterValues = [stateFilterValues];
    console.log("onStateChange")
    console.log(this.state.stateFilterValues)
  }

  private StaterootDomID: string;

  protected getSelectrootDom() {
    const node = document.getElementById(this.StaterootDomID);
    invariant(node, `Node '${this.StaterootDomID} not found!`);
    return node;
  }

  protected getSelectProps(selectOptions, isLoading) : SelectProps{
    // const visFilters = [];
    // if (stateFilterValues.length) {
    //   visFilters.push(
    //     Model.positiveAttributeFilter(
    //       locationStateDisplayFormIdentifier,
    //       stateFilterValues.map(item => item.label),
    //     ),
    //   );
    // } 
    return {
      onChange: this.onStateChange,
      options: selectOptions,
      multi: true,
      isLoading: isLoading,
      placeholder: 'all states',
      value: this.state.stateFilterValues,
      className: 's-select-state'
    }
    
  }

  protected getAttributeProps() : AttributeElementsProps {
    return {
      key: 'state',
      identifier: locationStateDisplayFormIdentifier,
      projectId: projectId,
      options: { limit: 20 }
    }
  }

  protected render() {
    //const { stateFilterValues, cityFilterValues } = this.state;

    ReactDOM.render(React.createElement(AttributeElements, this.getAttributeProps(), ({
      validElements,
      isLoading,
      error
    }) => {
      if (error) {
        console.error('Loading attribute elements failed!', error);
      }
    
      const selectOptions = validElements ? validElements.items.map(item => ({
        label: item.element.title,
        value: item.element.uri
      })) : [];
      return React.createElement('span', {
        style: {
          display: 'inline-block',
          minWidth: '10em',
          verticalAlign: 'middle'
        }
      }, React.createElement(Select, this.getSelectProps(selectOptions, isLoading)), error && React.createElement('span', {
        style: {
          color: '#e54d42'
        }
      }, 'Loading failed!'));
    }), this.getSelectrootDom())
  }

  ngOnInit(){
    self = this;
    this.StaterootDomID = uuid.v1();
    this.render();
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
  }

}
