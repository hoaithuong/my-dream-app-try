import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { STATELOCATION } from './mockStateLocation';
import { CITYLOCATION } from './mockCityLocation';
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
import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { AttributeElements, BarChart, Model, AfmComponents } from '@gooddata/react-components';

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

interface AttributeProps {
  key: any,
  identifier: any,
  projectId: any,
  options: any
}

@Component({
  selector: 'app-parent-filter-use-select',
  templateUrl: './parent-filter-use-select.component.html',
  styleUrls: ['./parent-filter-use-select.component.css']
})
export class ParentFilterUseSelectComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  stateAll = STATELOCATION;
  stateFilterValues = [];
  cityFilterValues = [];

  onStateChange = stateFilterValues => {
    self.stateFilterValues= stateFilterValues
  }

  onCityChange = cityFilterValues => {
    self.cityFilterValues = cityFilterValues
  }

  private StaterootDomID: string;
  private AttributerootDomID: string;

  protected getSelectrootDom() {
    const node = document.getElementById(this.StaterootDomID);
    invariant(node, `Node '${this.StaterootDomID} not found!`);
    return node;
  }

  protected getAttributerootDom() {
    const node = document.getElementById(this.AttributerootDomID);
    invariant(node, `Node AttributerootDomID not found!`);
    return node;
  }

  protected getSelectProps(key, onChange, filterValues, placeholder ) : SelectProps{
    // ({
    //   validElements,
    //   isLoading,
    //   error
    // }) => {
    //   if (error) {
    //     console.error('Loading attribute elements failed!', error);
    //   }
    // const selectOptions = validElements ? validElements.items.map(item => ({
    //   label: item.element.title,
    //   value: item.element.uri
    // })) : [];
    //   return {
    //     onChange: onChange,
    //     className: `s-select-${key}`,
    //     options: selectOptions,
    //     multi: true,
    //     isLoading: isLoading,
    //     placeholder: placeholder,
    //     value: filterValues
    //   }
    // }
    return {
      onChange: onChange,
      className: `s-select-${key}`,
      options: self.options,
      multi: true,
      isLoading: self.isLoading,
      placeholder: placeholder,
      value: filterValues
    }
  }

  protected getAttributeProps(key, displayFormIdentifier, options) : AttributeProps {
    return {
      key: key,
      identifier: displayFormIdentifier,
      projectId: projectId,
      options: options
    }
  }

  // renderFilter(key, displayFormIdentifier, filterValues, placeholder, options, onChange) {
  //   return (
  //       React.createElement(AttributeElements, this.getAttributeProps(key, displayFormIdentifier, options), 
  //       React.createElement(Select, this.getSelectProps(key, onChange, filterValues, placeholder)), 
  //     )
  //   );
  // }

  renderFilter(key, displayFormIdentifier, filterValues, placeholder, options, onChange) {
    return (
      React.createElement(AttributeElements, {
        key: key,
        identifier: displayFormIdentifier,
        projectId: projectId,
        options: options
      }, ({
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
        }, React.createElement(Select, {
          onChange: onChange,
          className: `s-select-${key}`,
          options: selectOptions,
          multi: true,
          isLoading: isLoading,
          placeholder: placeholder,
          value: filterValues
        }), error && React.createElement('span', {
          style: {
            color: '#e54d42'
          }
        }, 'Loading failed!'));
      })
    );
  }

  private isMounted(): boolean {
    return !!this.StaterootDomID;
  }

  protected render() {
    { this.stateFilterValues, this.cityFilterValues } self.state;

    // State (parent) filter
    // const stateFilter = this.renderFilter(
    //   'state',
    //   locationStateDisplayFormIdentifier,
    //   this.stateFilterValues,
    //   'all states',
    //   self.stateLocation,
    //   this.onStateChange,
    // );

    return(
      // ReactDOM.render(React.createElement(Select, this.stateFilter), this.getSelectrootDom())
      this.renderFilter(
        'state',
        locationStateDisplayFormIdentifier,
        this.stateFilterValues,
        'all states',
        self.stateLocation,
        this.onStateChange,
      )
    )

  }

  ngOnInit(){
    self = this;
    this.AttributerootDomID = uuid.v1();
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

