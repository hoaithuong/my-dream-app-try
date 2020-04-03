import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import {  
  projectId, 
  averageDailyTotalSales, 
  averageCheckSizeByServer, 
  locationStateDisplayFormIdentifier } from "../../fixtures";

import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { AfmComponents } from '@gooddata/react-components';

// const { BarChart } = AfmComponents;

interface ChartProps {
  projectId: any;
  afm: any;
}

@Component({
  selector: 'app-afm-bar-chart',
  template: '<div style="height: 300px" [id]="rootDomID"></div>'
})

export class AfmBarchartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  afm = {
    measures: [
        {
            localIdentifier: 'averageThgCost',
            definition: {
                measure: {
                    item: {
                        identifier: 'aaBXWyxBiESC'
                    }
                }
            },
            alias: 'averageDailyTotalSales'
        },
        {
            localIdentifier: 'averageCheckSizeByServer',
            definition: {
                measure: {
                    item: {
                        identifier: averageCheckSizeByServer
                    }
                }
            },
            alias: 'averageCheckSizeByServer'
        },
    ],
    attributes: [
        {
            localIdentifier: 'menuItemNameAttributeDFIdentifier',
            displayForm: {
                identifier: locationStateDisplayFormIdentifier
            }
        }
    ]
}
 
  private rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps() : ChartProps{
    return {
      projectId: projectId,
      afm: this.afm,
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(AfmComponents.BarChart, this.getProps()), this.getRootDomNode());
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
