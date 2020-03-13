import {projectId} from '../../../fixtures';

export interface StateLocation {
  name: any;
  uri?: any;
}

export const STATELOCATION: StateLocation[] = [
  {
    name: 'Alabama',
    uri : `/gdc/md/${projectId}/obj/2210/elements?id=6340109`
  },
  {
    name: 'California',
    uri : `/gdc/md/${projectId}/obj/2210/elements?id=6340116`
  },
  {
    name: 'Florida',
    uri : `/gdc/md/${projectId}/obj/2210/elements?id=6340105`
  },
  {
    name: 'New York',
    uri : `/gdc/md/${projectId}/obj/2210/elements?id=6340112`
  },
  {
    name: 'Texas',
    uri : `/gdc/md/${projectId}/obj/2210/elements?id=4436534`
  }
];
