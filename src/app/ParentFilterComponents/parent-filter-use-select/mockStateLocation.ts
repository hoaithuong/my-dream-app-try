import {projectId} from '../../../fixtures';

export interface StateLocation {
  label: any;
  value?: any;
}

export const STATELOCATION: StateLocation[] = [
  {
    label: 'Alabama',
    value : `/gdc/md/${projectId}/obj/2210/elements?id=6340109`
  },
  {
    label: 'California',
    value : `/gdc/md/${projectId}/obj/2210/elements?id=6340116`
  },
  {
    label: 'Florida',
    value : `/gdc/md/${projectId}/obj/2210/elements?id=6340105`
  },
  {
    label: 'New York',
    value : `/gdc/md/${projectId}/obj/2210/elements?id=6340112`
  },
  {
    label: 'Texas',
    value : `/gdc/md/${projectId}/obj/2210/elements?id=4436534`
  }
];
