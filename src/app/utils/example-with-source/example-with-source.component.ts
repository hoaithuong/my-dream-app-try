import { Component, OnInit, Injectable, Input } from '@angular/core';
import * as React from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import * as invariant from 'invariant';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'app-example-with-source',
  template: '<div [id]="rootDomIDSource"></div>'
})

@Injectable({
  providedIn: 'root'
})

export class ExampleWithSourceComponent implements OnInit {
  @Input() source: string;
  @Input() for: any;

  constructor() {
    this.toggle = this.toggle.bind(this);
  }

  state = { 
    hidden: true 
  };

  toggle() {
    ({ hidden: !this.state.hidden });
  }

  // propTypes: {
  //   source: string,
  //   for: any,
  // };

  private rootDomIDSource: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomIDSource);
    invariant(node, `Node '${this.rootDomIDSource} not found!`);
    return node;
  };

  render(){
    var hidden = this.state.hidden;
    var Component = this.for;
    var iconClassName = hidden ? "icon-navigatedown" : "icon-navigateup";
    
    ReactDOM.render(
      React.createElement(
        "div",
        {
          className: "example-with-source"
        },
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
                language: "jsx",
                style: okaidia
              },
              this.source
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
