# Next use contextual routing

[![Build status][ci-badge]][ci]
[![Test coverage report][coveralls-badge]][coveralls]
[![Npm version][npm-badge]][npm]

React hook that generates round trip hrefs for Next.js [contextual routing][next-docs-contextual-routing]. TS types included.

### With Next links

```js
import React from 'react';
import Link from 'next/link';
import { useContextualRouting } from 'next-use-contextual-routing';

function MyPage() {
  const { makeContextualHref, returnHref } = useContextualRouting();

  return (
    <ul>
      <li>
        <Link
          href={makeContextualHref({ id: 33 })}
          as="/route-to-visit-contextually"
          shallow
        >
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
import React from 'react';
import { useRouter } from 'next/link';
import { useContextualRouting } from 'next-use-contextual-routing';

function MyPage() {
  const router = useRouter();
  const { makeContextualHref, returnHref } = useContextualRouting();

  const openModal = () =>
    router.push(
      makeContextualHref({ id: 33 }),
      '/route-to-visit-contextually',
      {
        shallow: true,
      }
    );

  const closeModal = () =>
    router.push(returnHref, undefined, { shallow: true });

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

## Why?

Contextual routing presents 2 challenges:

- Persist a href string able to keep the initial page state consistent throughout the whole contextual navigation
- Persist the url to return to when contextual routing is terminated

**Next use contextual routing** abstracts these responsibilities in the form of a React hook.

## API

```js
const { makeContextualHref, returnHref } = useContextualRouting();
```

#### makeContextualHref

```js
const makeContextualHref: (extraQueryParams: { [key: string]: any }) => string;
```

The function returns the path to provide as `href` to start or keep alive contextual navigation. The generated path describes the state of the page to keep alive while contextual navigation is active.

It optionally accepts an object describing **extra parameters** to append to contextual navigation `href`.

#### returnHref

```js
const returnHref: string;
```

The path to return to to close contextual navigation.

## Notes

### Naming

**Contextual routing** pattern is also known as:

- [Route as modal][next-docs-contextual-routing]
- [Snowlift][twitter-pattern-name]

### Scroll behaviour on refresh

When using **Contextual routing**, default browsers scroll behaviour on page refresh might produce undesired results. If the case, setting [`history.scrollRestoration`][history-scroll-restoration-docs] to `manual` could improve user experience.

```js
history.scrollRestoration = 'manual';
```

[ci]: https://travis-ci.com/toomuchdesign/next-use-contextual-routing
[ci-badge]: https://travis-ci.com/toomuchdesign/next-use-contextual-routing.svg?branch=master
[npm]: https://www.npmjs.com/package/next-use-contextual-routing
[npm-badge]: https://img.shields.io/npm/v/next-use-contextual-routing.svg
[coveralls-badge]: https://coveralls.io/repos/github/toomuchdesign/next-use-contextual-routing/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/toomuchdesign/next-use-contextual-routing?branch=master
[next-docs-contextual-routing]: https://github.com/vercel/next.js/tree/v9.5.3/examples/with-route-as-modal
[twitter-pattern-name]: https://twitter.com/swyx/status/1245891685927682049
[history-scroll-restoration-docs]: https://developer.mozilla.org/en-US/docs/Web/API/History/scrollRestoration
