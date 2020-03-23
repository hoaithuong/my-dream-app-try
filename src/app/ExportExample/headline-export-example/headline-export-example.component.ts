import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import {  
  projectId, 
  dateDataSetUri,
  franchiseFeesIdentifier,
  franchiseFeesAdRoyaltyIdentifier } from "../../../fixtures";

import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { Headline, Model } from '@gooddata/react-components';

interface ChartProps {
  primaryMeasure: any;
  secondaryMeasure: any;
  filters: any[];
  projectId: any;
}

@Component({
  selector: 'app-headline-export-example',
  templateUrl: './headline-export-example.component.html',
  styleUrls: ['./headline-export-example.component.css']
})
export class HeadlineExportExampleComponent implements OnInit {

  primaryMeasure = Model.measure(franchiseFeesIdentifier).format("#,##0");
  secondaryMeasure = Model.measure(franchiseFeesAdRoyaltyIdentifier).format("#,##0");
  filters = [Model.absoluteDateFilter(dateDataSetUri, "2017-01-01", "2017-12-31")];
 
  private rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): ChartProps {
    return {
      projectId: projectId,
      primaryMeasure: this.primaryMeasure,
      secondaryMeasure: this.secondaryMeasure,
      filters: this.filters
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(Headline, this.getProps()), this.getRootDomNode());
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

