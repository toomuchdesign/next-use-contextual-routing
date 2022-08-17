import Grid from './Grid';
import SquaredLink from './SquaredLink';
import { useContextualRouting } from 'src';
export const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function PostGrid({ small }) {
  const { makeContextualLink } = useContextualRouting();

  return (
    <Grid small={small}>
      {data.map((id, index) => (
        <SquaredLink
          key={index}
          {...makeContextualLink(`/post/${id}`)}
        >
          {id}
        </SquaredLink>
      ))}
    </Grid>
  );
}
