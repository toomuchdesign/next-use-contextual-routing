import Grid from './Grid';
import SquaredLink from './SquaredLink';
import { backgroundColors } from 'demo/pages/index';

const InitialStateGrid = () => {
  return (
    <Grid>
      {Object.entries(backgroundColors).map(([id, color], index) => (
        <SquaredLink
          key={index}
          href={`/?state=${id}`}
          style={{ backgroundColor: color }}
        >
          Initial State: {id}
        </SquaredLink>
      ))}
    </Grid>
  );
};

export default InitialStateGrid;
