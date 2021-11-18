import { Button } from '@mui/material';

import { NamedAPIResource } from './models/resource';
import { usePokemons } from './hooks';

export const MainPage = function ():JSX.Element {
  const [incrementPokes, data] = usePokemons();

  return (
    <ul>
      <Button onClick={incrementPokes}>More</Button>
      {data && (data.results as NamedAPIResource[])
        .map((val) => (
          <li key={val.url}>
            {val.name}
            {' '}
            {val.url}
          </li>
        ))}
    </ul>
  );
};
