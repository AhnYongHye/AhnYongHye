import { HttpResponse, http } from 'msw';

import { API_PATH } from '@constants/path';

import LP_LIST from './data/lpList.json';

const getLpList = () => {
  return HttpResponse.json(LP_LIST);
};

export const lpHandler = [http.get(API_PATH.lp.list, getLpList)];
