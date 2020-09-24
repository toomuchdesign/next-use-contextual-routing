# Next use contextual routing

[![Build status][ci-badge]][ci]
[![Test coverage report][coveralls-badge]][coveralls]
[![Npm version][npm-badge]][npm]

React hook that generates round trip hrefs for Next.js [contextual routing][next-docs-contextual-routing].

### With Next links

```js
import React from 'react';
import Link from 'next/link';
import { useContextualRouting } from 'next-use-contextual-routing';

function MyPage() {
  const { returnHref, contextualHref } = useContextualRouting();

  return (
    <ul>
      <li>
        <Link href={contextualHref} as="/route-to-visit-contextually" shallow>
          Start contextual routing
        </Link>
      </li>
      <li>
        <Link href={returnHref} shallow>
          Back to where contextual routing was started
        </Link>
      </li>
    </ul>
  );
}
```

### With Next router

```js
import React, { useCallback } from 'react';
import { useRouter } from 'next/link';
import { useContextualRouting } from 'next-use-contextual-routing';

function MyPage() {
  const router = useRouter();
  const { returnHref, contextualHref } = useContextualRouting();

  const openModal = useCallback(() => {
    router.push(contextualHref, '/route-to-visit-contextually', {
      shallow: true,
    });
  }, [router, contextualHref]);

  const closeModal = useCallback(() => {
    router.push(returnHref, undefined, { shallow: true });
  }, [router, returnHref]);

  return (
    <ul>
      <li>
        <button onClick={openModal}>Open contextual modal</button>
      </li>
      <li>
        <button onClick={closeHandler}>Close contextual modal</button>
      </li>
    </ul>
  );
}
```

## Notes

**Contextual routing** pattern is also known as:

- [Route as modal][next-docs-contextual-routing]
- [Snowlift][twitter-pattern-name]

[ci]: https://travis-ci.com/toomuchdesign/next-use-contextual-routing
[ci-badge]: https://travis-ci.com/toomuchdesign/next-use-contextual-routing.svg?branch=master
[npm]: https://www.npmjs.com/package/next-use-contextual-routing
[npm-badge]: https://img.shields.io/npm/v/next-use-contextual-routing.svg
[coveralls-badge]: https://coveralls.io/repos/github/toomuchdesign/next-use-contextual-routing/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/toomuchdesign/next-use-contextual-routing?branch=master
[next-docs-contextual-routing]: https://github.com/vercel/next.js/tree/v9.5.3/examples/with-route-as-modal
[twitter-pattern-name]: https://twitter.com/swyx/status/1245891685927682049
