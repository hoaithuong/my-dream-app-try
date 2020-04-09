import { Component, OnInit, Injectable, Input } from '@angular/core';
import * as React from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import * as invariant from 'invariant';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';

let self: any;

@Component({
  selector: 'app-example-with-source',
  templateUrl: './example-with-source.component.html'
})

@Injectable({
  providedIn: 'root'
})

export class ExampleWithSourceComponent implements OnInit {
  @Input() ts: string;
  @Input() html: string;
  @Input() css: string;
  @Input() for: any;

  state = { 
    hidden: true 
  };

  toggle() {
    self.state.hidden = !self.state.hidden;
    self.render();
  }

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
          // React.createElement(Component, null)
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
            : 
            React.createElement(
              "mat-tab-group",
              null,
              React.createElement(
                "mat-tab",
                {
                  label: "TS"
                },
                React.createElement(
                  SyntaxHighlighter,
                  {
                    language: "jsx",
                    style: okaidia
                  },
                  this.ts
                )
              ),
              React.createElement(
                "mat-tab",
                {
                  label: "HTML"
                },
                React.createElement(
                  SyntaxHighlighter,
                  {
                    language: "jsx",
                    style: okaidia
                  },
                  this.html
                )
              ),
              React.createElement(
                "mat-tab",
                {
                  label: "CSS"
                },
                React.createElement(
                  SyntaxHighlighter,
                  {
                    language: "css",
                    style: okaidia
                  },
                  this.css
                )
              )
            )
        )

      ), this.getRootDomNode());
  }

  ngOnInit() {
    self = this;
    this.rootDomIDSource = uuid.v4();
  }

  ngAfterViewInit() {
    this.render();
  }
}
