import { Component, OnInit } from '@angular/core';
import ExportDialog from "@gooddata/goodstrap/lib/Dialog/ExportDialog";
import * as React from 'react';
import get from "lodash/get";
import { backendUrlForInfo } from "../../../fixtures";

const DOWNLOADER_ID = "downloader";

let self: any;

@Component({
  selector: 'app-example-with-export',
  templateUrl: './example-with-export.component.html',
  styleUrls: ['./example-with-export.component.css']
})

export class ExampleWithExportComponent extends React.Component implements OnInit {
  constructor(props) {
    super(props);

    this.doExport = this.doExport.bind(this);
  }

  state = {
    showExportDialog: false,
    errorMessage: null,
  };

  onExportReady = function onExportReady(exportResult) {  
    self.exportResult = exportResult;
  };

  getExportDialog = function getExportDialog() {
    return React.createElement(ExportDialog, {
      headline: "Export to XLSX",
      cancelButtonText: "Cancel",
      submitButtonText: "Export",
      isPositive: true,
      seleniumClass: "s-dialog",
      mergeHeaders: true,
      mergeHeadersDisabled: false,
      mergeHeadersText: "Keep attribute cells merged",
      mergeHeadersTitle: "CELLS",
      onCancel: this.exportDialogCancel,
      onSubmit: this.exportDialogSubmit
    });
  }

  downloadFile = function downloadFile(uri) {
  
    var anchor = document.getElementById(DOWNLOADER_ID);
  
    if (!anchor) {
      anchor = document.createElement("a");
      anchor.id = DOWNLOADER_ID;
      document.body.appendChild(anchor);
    }
    
    self.anchor.href = backendUrlForInfo + uri;
    self.anchor.download = uri;
    anchor.click();
  }

  exportDialogCancel = () => {
    ({ showExportDialog: false });
  };

  exportToCSV = () => {
    this.doExport({});
  };

  exportToXLSX = () => {
    this.doExport({ format: "xlsx" });
  };

  exportWithCustomName = () => {
    this.doExport({ title: "CustomName" });
  };

  exportWithDialog = () => {
    ({ showExportDialog: true });
  };

  exportDialogSubmit = data => {
    const { mergeHeaders, includeFilterContext } = data;

    ({ showExportDialog: false });

    const exportConfig = { format: "xlsx", title: "CustomName", includeFilterContext, mergeHeaders };

    this.doExport(exportConfig);
  };

  async doExport(exportConfig) {
    try {
        const result = await self.exportResult(exportConfig);
        ({ errorMessage: null });
        this.downloadFile(result.uri);
    } catch (error) {
        let errorMessage = error.message;
        if (error.responseBody) {
            errorMessage = get(JSON.parse(error.responseBody), "error.message");
        }
        ({ errorMessage });
    }
  }

  render() {
    const { errorMessage, showExportDialog } = this.state;

    var errorComponent;

    if (errorMessage) {
      errorComponent = React.createElement(
        "div",
        {
          style: {
            color: "red",
            marginTop: 5
          }
        },
        errorMessage
      );
    }

    var exportDialog;

    if (showExportDialog) {
      exportDialog = this.getExportDialog();
    }

    return(
      React.createElement(
        "div",
        {
          style: {
            height: 367
          }
        },
        self.children(this.onExportReady),
        React.createElement(
          "div",
          {
            style: {
              marginTop: 15
            }
          },
          React.createElement(
            "button",
            {
              className: "gd-button gd-button-secondary",
              onClick: this.exportToCSV
            },
            "Export CSV"
          ),
          React.createElement(
            "button",
            {
              className: "gd-button gd-button-secondary",
              onClick: this.exportToXLSX
            },
            "Export XLSX"
          ),
          React.createElement(
            "button",
            {
              className: "gd-button gd-button-secondary",
              onClick: this.exportWithCustomName
            },
            "Export with custom name CustomName"
          ),
          React.createElement(
            "button",
            {
              className: "gd-button gd-button-secondary",
              onClick: this.exportWithDialog
            },
            "Export using Export Dialog"
          )
        ),
        errorComponent,
        exportDialog
      )
    );
  }

  ngOnInit() {
    self = this;
  }

}
