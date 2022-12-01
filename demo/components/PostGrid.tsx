import Grid from './Grid';
import SquaredLink from './SquaredLink';
import { useContextualRouting } from '../../dist';
export const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function PostGrid({ small }: { small?: boolean }) {
  const { makeContextualHref } = useContextualRouting();

  return (
    <Grid small={small}>
      {data.map((id, index) => (
        <SquaredLink
          key={index}
          href={makeContextualHref({ postId: id })}
          as={`/post/${id}`}
        >
          {id}
        </SquaredLink>
      ))}
    </Grid>
  );
}
