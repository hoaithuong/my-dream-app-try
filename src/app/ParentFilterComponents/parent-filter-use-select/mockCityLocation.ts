import {projectId} from '../../../fixtures';

export interface CityLocation {
  name: any;
  uri?: any;
}

export const CITYLOCATION: CityLocation[] = [
  {
    name: 'Aventura',
    uri : `/gdc/md/${projectId}/obj/2208/elements?id=6340103`
  },
  {
    name: 'Dallas',
    uri : `/gdc/md/${projectId}/obj/2208/elements?id=6340130`
  },
  {
    name: 'Daly City',
    uri : `/gdc/md/${projectId}/obj/2208/elements?id=6340114`
  },
  {
    name: 'Deerfield Beach',
    uri : `/gdc/md/${projectId}/obj/2208/elements?id=6340117`
  },
  {
    name: 'Hayward',
    uri : `/gdc/md/${projectId}/obj/2208/elements?id=6340119`
  },
  {
    name: 'Highland Village',
    uri : `/gdc/md/${projectId}/obj/2208/elements?id=6340121`
  },
  {
    name: 'Irving',
    uri : `/gdc/md/${projectId}/obj/2208/elements?id=6340132`
  },
  {
    name: 'Montgomery',
    uri : `/gdc/md/${projectId}/obj/2208/elements?id=6340107`
  },
  {
    name: 'New York',
    uri : `/gdc/md/${projectId}/obj/2208/elements?id=6340112`
  },
  {
    name: 'San Jose',
    uri : `/gdc/md/${projectId}/obj/2208/elements?id=6340123`
  },
  {
    name: 'Times Square',
    uri : `/gdc/md/${projectId}/obj/2208/elements?id=6340128`
  }
];
