import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit ,OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { projectId, columnVisualizationIdentifier, dateDataSetUri } from "../../../fixtures";
import { Model, Visualization } from '@gooddata/react-components';

interface VisualizationBarChartProps {
  projectId: any;
  identifier:any;  
  filters: any[];
  onLoadingChanged?: (any);
  onError?: (any);
}


@Component({
  selector: 'app-visualization-column-chart-export-example',
  templateUrl: './visualization-column-chart-export-example.component.html',
  styleUrls: ['./visualization-column-chart-export-example.component.css']
})
export class VisualizationColumnChartExportExampleComponent implements OnInit {
  @Input() onLoadingChanged?: (any);
  @Input() onError?: (any);
  filters = [Model.absoluteDateFilter(dateDataSetUri, "2017-01-01", "2017-12-31")];

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): VisualizationBarChartProps {
    return {
      projectId:projectId,
      identifier: columnVisualizationIdentifier,
      filters: this.filters,
      onLoadingChanged:this.onLoadingChanged,
      onError:this.onError,
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(Visualization, this.getProps()), this.getRootDomNode());
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
