import { Component, OnInit, Injectable, Input } from '@angular/core';
import * as React from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import * as invariant from 'invariant';
import * as ReactDOM from 'react-dom';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-example-with-source',
  template: '<div [id]="rootDomIDSource"></div>'
})

@Injectable({
  providedIn: 'root'
})

export class ExampleWithSourceComponent implements OnInit {
  
  // @Input() source: string;
  // @Input() for: any;
  propTypes: {
    source: string,
    for: any,
  };

  constructor() {
    this.toggle = this.toggle.bind(this);
  }

  state = { 
    hidden: true 
  };

  toggle() {
    ({ hidden: !this.state.hidden });
  }

  private rootDomIDSource: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomIDSource);
    invariant(node, `Node '${this.rootDomIDSource} not found!`);
    return node;
  };

  render(){
    var hidden = this.state.hidden;
    var Component = this.propTypes.for;
    var iconClassName = hidden ? "icon-navigatedown" : "icon-navigateup";
    
    ReactDOM.render(
      React.createElement(
        "div",
        {
          className: "example-with-source"
        },
        React.createElement(
          "style",
          {
            jsx: true
          },
          "\n                    .example-with-source {\n                        flex: 1 0 auto;\n                        display: flex;\n                        flex-direction: column;\n                        justify-content: flex-start;\n                        align-items: stretch;\n                        margin-top: 30px;\n                    }\n\n                    .example {\n                        padding: 20px;\n                        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n                        background-color: white;\n                    }\n\n                    .source {\n                        margin: 20px 0;\n                    }\n\n                    :global(pre) {\n                        overflow: auto;\n                    }\n                "
        ),
        React.createElement(
          "div",
          {
            className: "example"
          },
          React.createElement(Component, null)
        ),
        React.createElement(
          "div",
          {
            className: "source"
          },
          React.createElement(
            "button",
            {
              className:
                "gd-button gd-button-secondary button-dropdown icon-right " +
                iconClassName,
              onClick: this.toggle
            },
            "source code"
          ),
          hidden
            ? ""
            : React.createElement(
              SyntaxHighlighter,
              {
                language: "ts",
                style: okaidia
              },
              this.propTypes.source
            )
        )
      ), this.getRootDomNode());
  }

  ngOnInit() {
    this.rootDomIDSource = 'rootDomIDSource';
  }

  // ngOnChanges() {
  //   this.render();
  // }

  ngAfterViewInit() {
    this.render();
  }
}
