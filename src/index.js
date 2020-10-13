import { useCallback } from 'react';
import { useRouter } from 'next/router';
import stringify from 'qs-stringify';
export const RETURN_HREF_QUERY_PARAM = '_UCR_return_href';

/**
 * During contextual routing browser URL will be controlled by Next Router's "as" prop
 * while the page actually rendered is defined by Next Router's "href" prop.
 *
 * During contextual navigation Next Router's behaves as follows:
 * router.asPath:   /item/3               reflects current URL and updates at each page change
 * router.pathname: /search/[terms]       stay the same as long as initial page doesn't change
 * router.query:    {"terms": "foo-bar"}  same as above
 */
export function useContextualRouting() {
  const router = useRouter();
  const returnHrefQueryParam = router.query[RETURN_HREF_QUERY_PARAM];
  const watchedQuery = Object.assign({}, router.query);
  delete watchedQuery[RETURN_HREF_QUERY_PARAM];

  /*
   * After a page refresh there is no RETURN_HREF_QUERY_PARAM in router.query
   * RETURN_HREF_QUERY_PARAM is only available in those history entries where
   * contextual navigation is enabled (or WAS enabled in case history.back() is triggered)
   */
  const returnHref = returnHrefQueryParam ?? router.asPath;
  // @NOTE JSON.stringify might be replaced with any hashing solution
  const queryHash = JSON.stringify(watchedQuery);
  const makeContextualHref = useCallback(
    (extraParams) =>
      router.pathname +
      '?' +
      stringify(
        Object.assign({}, router.query, extraParams, {
          [RETURN_HREF_QUERY_PARAM]: returnHref,
        })
      ),
    [queryHash, returnHref]
  );

  return { returnHref, makeContextualHref };
}
