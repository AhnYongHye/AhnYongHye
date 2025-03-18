export const SERVER_URL = process.env.SERVER_URL;

export const NAVIGATION_PATH = {
  home: '/',
  signin: '/signin',
  signup: '/signup',
  lp: { list: '/lps', detail: '/lps/:id' },
};

export const API_PATH = {
  lp: {
    list: `${SERVER_URL}/lps`,
    detail: `${SERVER_URL}/lps/:id`,
  },
};
