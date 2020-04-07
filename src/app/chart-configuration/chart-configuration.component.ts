import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { Visualization } from '@gooddata/react-components';
import "@gooddata/react-components/styles/css/main.css";
import { columnsVisualizationIdentifier, projectId } from "../../fixtures";
import { CUSTOM_COLOR_PALETTE } from "../../fixtures";
import { Button } from 'protractor';
interface ColumChartProps {
  projectId : any;
  identifier : any;
  config: any;
}
let self : any;

@Component({
  selector: 'app-chart-configuration',
  templateUrl: './chart-configuration.component.html',
  styleUrls: ['./chart-configuration.component.css']
})
export class ChartConfigurationComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  public rootDomID : string;
  defaultProperties = {};
  state = {
    config: this.defaultProperties,
    customPaletteUsed: false,
    customLegendUsed: true,
    customSeparatorUsed: true,
  };
  config = this.state;

  onPaletteChange() {
    const { config: currentConfig, customPaletteUsed } = self.state;
    const colorPaletteProp = {
        colorPalette: customPaletteUsed ? undefined : CUSTOM_COLOR_PALETTE,
    };
    self.state = {
        config: {
          ...currentConfig,
          ...colorPaletteProp,
        },
        customPaletteUsed: !customPaletteUsed,
    };
    console.log("aaaaaaaaaaaaaaa",self.state);
    self.render();
}
onLegendChange() {
    const { config: currentConfig, customLegendUsed } = self.state;
    const legendProp = {
        legend: {
            enabled: customLegendUsed,
            position: "right",
        },
    };
    self.state = {
        config: {
          ...currentConfig,
          ...legendProp,
        },
        customLegendUsed: !customLegendUsed,
    };
    console.log("bbbbbbbbbb",self.state);
    self.render();
}
onSeparatorChange() {
    const { config: currentConfig, customSeparatorUsed } = self.state;
    const separatorProp = {
        separators: customSeparatorUsed
            ? { thousand: ".", decimal: "," }
            : { thousand: ",", decimal: "." },
    };
    self.state = {
        config: {
          ...currentConfig,
          ...separatorProp,
        },
        customSeparatorUsed: !customSeparatorUsed,
    };
    self.render();
}
  protected getProps(): ColumChartProps {
    const { config } = this.state;
    return {
      projectId: projectId,
      identifier: columnsVisualizationIdentifier,
      config: config
    };
  }
  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
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
    self = this;
    this.rootDomID = uuid.v4(); 
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