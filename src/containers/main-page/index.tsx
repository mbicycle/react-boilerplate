import { Button } from '@mui/material';

import { NamedAPIResource, NamedAPIResourceList } from './models/resource';
import { usePokemons } from './hooks';

export const MainPage = function ():JSX.Element {
  const [handleClick, data] = usePokemons();

  return (
    <ul>
      <Button onClick={handleClick as () => void}>More</Button>
      {data && ((data as NamedAPIResourceList).results as NamedAPIResource[])
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
