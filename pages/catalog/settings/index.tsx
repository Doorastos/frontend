import { FC } from 'react';
import Where from './where';
import Filter from './filter';

type Props = {
  activeLink: string | string[] | undefined
}

const Settings: FC<Props> = ({ activeLink }) => {
  return <div>
    <Where activeLink={activeLink} />
    <Filter />
  </div>
};

export default Settings;