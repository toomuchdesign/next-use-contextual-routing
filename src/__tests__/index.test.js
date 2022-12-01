import React from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { renderHook as TLRenderHook } from '@testing-library/react';
import stringify from 'qs-stringify';
import { useContextualRouting, RETURN_HREF_QUERY_PARAM } from '../index';

const mockRouter = {
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};

function contextProvider({ router, children }) {
  return (
    <RouterContext.Provider value={{ ...mockRouter, ...router }}>
      {children}
    </RouterContext.Provider>
  );
}

function renderHook({ router }) {
  return TLRenderHook(() => useContextualRouting(), {
    wrapper: ({ children }) => contextProvider({ router, children }),
  });
}

describe('useContextualRouting', () => {
  const initialRouter = {
    asPath: '/startpage/55?page=2#anchor',
    pathname: '/startpage/[id]',
    query: {
      id: 55,
      page: 2,
    },
  };

  it('returns hrefs relative to the route where contextual routing starts from', () => {
    const { result } = renderHook({ router: initialRouter });
    expect(result.current.returnHref).toBe('/startpage/55?page=2#anchor');
    expect(result.current.makeContextualHref({ extraParam: 'foo' })).toBe(
      '/startpage/[id]?' +
        stringify({
          id: 55,
          page: 2,
          extraParam: 'foo',
          [RETURN_HREF_QUERY_PARAM]: '/startpage/55?page=2#anchor',
        })
    );
  });

  it('returns expected hrefs when query object is empty', () => {
    const router = {
      ...initialRouter,
      asPath: '/startpage',
      query: {},
    };
    const { result } = renderHook({ router });
    expect(result.current.returnHref).toBe('/startpage');
    expect(result.current.makeContextualHref()).toBe(
      '/startpage/[id]?' +
        stringify({
          [RETURN_HREF_QUERY_PARAM]: '/startpage',
        })
    );
  });

  describe('Contextual routing starts', () => {
    it('preserves hrefs pointing to the page where contextual routing started from', () => {
      const router = { ...initialRouter };
      const { result, rerender } = renderHook({ router });

      // Simulate route change happening when contextual routing starts
      // @NOTE It seems that rerender accepts only newProp (new initial props) so here we mutate the original router object :(
      // https://github.com/testing-library/react-hooks-testing-library/issues/228
      router.asPath = '/post/5';
      router.query[RETURN_HREF_QUERY_PARAM] = result.current.returnHref;
      rerender();

      expect(result.current.returnHref).toBe('/startpage/55?page=2#anchor');
      expect(result.current.makeContextualHref()).toBe(
        '/startpage/[id]?' +
          stringify({
            id: 55,
            page: 2,
            [RETURN_HREF_QUERY_PARAM]: '/startpage/55?page=2#anchor',
          })
      );
    });
  });

  describe('Route change before contextual routing has started', () => {
    it('updates returned values to reflect query updates', () => {
      const router = { ...initialRouter };
      const { result, rerender } = renderHook({ router });

      // Route change 2: back to startpage with different query
      router.asPath = '/startpage/55?page=3#anchor';
      router.pathname = '/startpage/[id]';
      router.query = {
        id: 55,
        page: 3,
      };

      rerender();

      expect(result.current.returnHref).toBe('/startpage/55?page=3#anchor');
      expect(result.current.makeContextualHref()).toBe(
        '/startpage/[id]?' +
          stringify({
            id: 55,
            page: 3,
            [RETURN_HREF_QUERY_PARAM]: '/startpage/55?page=3#anchor',
          })
      );
    });
  });
});
