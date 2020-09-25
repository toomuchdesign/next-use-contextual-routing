import { expectType } from 'tsd';
import { useContextualRouting } from '../';

type expected = {
  returnHref: string;
  contextualHref: string;
};
expectType<expected>(useContextualRouting());
