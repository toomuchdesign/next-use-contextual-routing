import { expectType, expectAssignable, expectError } from 'tsd';
import { useContextualRouting } from '../';

const { returnHref, makeContextualHref } = useContextualRouting();

expectType<string>(returnHref);
expectAssignable<Function>(makeContextualHref);

expectError(makeContextualHref('s'));
expectType<string>(makeContextualHref({ foo: 'bar' }));
