import { generatePath } from 'react-router-dom';

import { NAVIGATION_PATH } from '@constants/path';

// add routes here
export const routes = {
  home: () => generatePath(NAVIGATION_PATH.home),
  signIn: () => generatePath(NAVIGATION_PATH.signin),
  signUp: () => generatePath(NAVIGATION_PATH.signup),
  lp: {
    list: () => generatePath(NAVIGATION_PATH.lp.list),
    detail: (id: string) => generatePath(NAVIGATION_PATH.lp.detail, { id }),
  },
};
