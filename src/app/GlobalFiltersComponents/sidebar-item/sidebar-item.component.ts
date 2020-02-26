import { Component, ViewChild } from "@angular/core";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";
import * as moment from 'moment';
import * as invariant from 'invariant';
import * as React from 'react';
import { Table } from '@gooddata/react-components';

let self: any;

interface SidebarItemName {
  identifier: any;
}

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css']
})

export class SidebarItemComponent {
  private rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }
  
   employeeAdditionalInfo = [
    {
        name: "Aaron Clements",
        gender: "M",
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
        startDate: "2001",
    },
    {
        name: "Aaron Watson",
        gender: "M",
        avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
        startDate: "2006",
    },
    {
        name: "Abbie Adams",
        gender: "F",
        avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
        startDate: "2017",
    },
    {
        name: "Adam Kimble",
        gender: "M",
        avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
        startDate: "2015",
    },
    {
        name: "Aimee McKenzie",
        gender: "F",
        avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
        startDate: "2015",
    },
    {
        name: "Alex Gray",
        gender: "M",
        avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
        startDate: "2016",
    },
    {
        name: "Alex Meyer",
        gender: "M",
        avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
        startDate: "2000",
    },
    {
        name: "Allen Garza",
        gender: "M",
        avatarUrl: "https://randomuser.me/api/portraits/men/6.jpg",
        startDate: "2014",
    },
    {
        name: "Alvin Moir",
        gender: "M",
        avatarUrl: "https://randomuser.me/api/portraits/men/7.jpg",
        startDate: "2003",
    },
    {
        name: "Amanda Lewis",
        gender: "F",
        avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
        startDate: "2017",
    },
    {
        name: "Amber Young",
        gender: "F",
        avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
        startDate: "2016",
    },
    {
        name: "Amelia Reid",
        gender: "F",
        avatarUrl: "https://randomuser.me/api/portraits/women/5.jpg",
        startDate: "2008",
    },
    {
        name: "Amelia Simpson",
        gender: "F",
        avatarUrl: "https://randomuser.me/api/portraits/women/6.jpg",
        startDate: "2013",
    },
    {
        name: "Amelie Humphries",
        gender: "F",
        avatarUrl: "https://randomuser.me/api/portraits/women/7.jpg",
        startDate: "2015",
    },
    {
        name: "Amelie Webster",
        gender: "F",
        avatarUrl: "https://randomuser.me/api/portraits/women/8.jpg",
        startDate: "2016",
    },
    {
        name: "Amy Holt",
        gender: "F",
        avatarUrl: "https://randomuser.me/api/portraits/women/9.jpg",
        startDate: "2017",
    },
    {
        name: "Amy McGowen",
        gender: "F",
        avatarUrl: "https://randomuser.me/api/portraits/women/10.jpg",
        startDate: "2012",
    },
    {
        name: "Anamaria Funches",
        gender: "F",
        avatarUrl: "https://randomuser.me/api/portraits/women/11.jpg",
        startDate: "2018",
    },
    {
        name: "Angel Lawson",
        gender: "F",
        avatarUrl: "https://randomuser.me/api/portraits/women/12.jpg",
        startDate: "2000",
    },
    {
        name: "Ann Howell",
        gender: "F",
        avatarUrl: "https://randomuser.me/api/portraits/women/13.jpg",
        startDate: "2005",
    },
  ];
  EmployeeCard = ({name, avatarUrl, gender, startDate}) => {
    //const { avatarUrl, gender, startDate } = this.employeeAdditionalInfo.find(info => info.name === name) || {};
    return(
      self.employeeAdditionalInfo.name = name,
      self.employeeAdditionalInfo.avatarUrl = avatarUrl,
      self.employeeAdditionalInfo.gender = gender,
      self.employeeAdditionalInfo.startDate = startDate

    )
  }

  ngOnInit() {
    self = this;
  }

}
  