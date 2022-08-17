import { UrlObject  } from 'url';

export function useContextualRouting(): {
  returnHref: string;
  makeContextualLink: (url: string | UrlObject) => string;
};


