export function useContextualRouting(): {
  returnHref: string;
  makeContextualHref: (extraQueryParams: { [key: string]: any }) => string;
};


