import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import {  
  projectId, 
  avgAmount, 
  avgWon, 
  productName,
  employeeNameIdentifier } from "../../../fixtures";

import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { ColumnChart, Model, AttributeElements } from '@gooddata/react-components';
import { element } from 'protractor';


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

@Component({
  selector: 'app-attribute-elements-example',
  template: '<div style="height: 300px" [id]="rootDomID"></div>'
  //templateUrl: './attribute-elements-example.component.html',
  // styleUrls: ['./attribute-elements-example.component.css']
})


export class AttributeElementsExampleComponent implements OnInit {
  validElements: any[];

  options={ limit: 20 }
 
  private rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  static defaultProps = {
    isSelected: false,
  }

  protected getProps(): AttributeElementsProps {
    
    return {
      projectId: projectId,
      identifier: employeeNameIdentifier,
      options: this.options
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }


  protected render() {
    this.renderAttributeElements();
  }

  public renderAttributeElements() {
    ReactDOM.render(React.createElement(AttributeElements, this.getProps()), this.getRootDomNode());
    // ReactDOM.render(React.createElement(AttributeElements, this.getProps()), this.getRootDomNode()).validElements.items.element[0].uri;

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

