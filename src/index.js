import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { stringify } from 'query-string';

/**
 * During contextual routing browser URL will be controlled by Next Router's "as" prop
 * while the page actually rendered is defined by Next Router's "href" prop.
 *
 * During contextual navigation Next Router's behaves as follows:
 * router.asPath:   /item/3               reflects current URL and updates at each page change
 * router.pathname: /search/[terms]       stay the same as long as initial page doesn't change
 * router.query:    {"terms": "foo-bar"}  same as above
 *
 * {Object} result
 * {string} result.returnHref       path where contextual routing started from
 * {string} result.contextualHref   href value to needed to start a contextual routing session (along with an "as" prop)
 * @returns result
 */
export function useContextualRouting() {
  const router = useRouter();
  const [returnHref, setReturnHref] = useState(router.asPath);
  // @NOTE JSON.stringify might be replaced with any hashing solution
  const querySignature = JSON.stringify(router.query);
  const queryString = useMemo(() => {
    const queryAsString = stringify(router.query);
    return queryAsString ? `?${queryAsString}` : '';
  }, [querySignature]);
  const contextualHref = router.pathname + queryString;

  useEffect(() => {
    setReturnHref(router.asPath);
  }, [querySignature]);

  return { returnHref, contextualHref };
}
