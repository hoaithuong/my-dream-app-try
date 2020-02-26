import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import {  
  projectId, 
  avgAmount,
  department } from "../../../src/fixtures";

import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { Kpi } from '@gooddata/react-components';

interface KpiProps {
  measure: any;
  projectId: any;
  filters: any;
}

@Component({
  selector: 'app-kpi-positive-attribute-filter',
  template: '<div style="height: 50px" [id]="rootDomID"></div>'
})

export class KpipositiveattributefilterComponent implements OnInit {
  private rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): KpiProps {
    return {
      projectId: projectId,
      measure: avgAmount,
      filters: [
        {
            positiveAttributeFilter: {
                displayForm: {
                    identifier: department
                },
                in: ['/gdc/md/fuyy58glyoi8xm90rg0h5rcywzv7iu0t/obj/1026/elements?id=1226']
                //if user attribute-element-uri then no need add 'textFilter: true'
                
            /*  in:['Direct Sales'], 
                textFilter: true  */
                //if use attribute-element-value then has to 'textFilter: true'
            }
        }
    ]
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {

    if (this.isMounted()) {
      ReactDOM.render(React.createElement(Kpi, this.getProps()), this.getRootDomNode());
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
