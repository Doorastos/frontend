import { Dispatch, FC, SetStateAction } from 'react';
import Where from './where';
import Filter from './filter';
import { ActiveCategoryItemType } from './filter/categories/item';

type Props = {
  activeLink: string | string[] | undefined
  activeSecurityItem: string | null
  setActiveSecurityItem: Dispatch<SetStateAction<string | null>>
  activeCategoryItems: ActiveCategoryItemType[]
  setActiveCategoryItem: (category: string, newItems: string[]) => void
}

const Settings: FC<Props> = ({ activeLink, activeSecurityItem, setActiveSecurityItem, activeCategoryItems, setActiveCategoryItem }) => {
  return <div className='grid md:grid-cols-[1.3fr_1fr] md:gap-x-10 smlg:grid-cols-[380px_1fr] lg:grid-cols-[480px_1fr]'>
    <Where activeLink={activeLink} />
    <Filter
      activeSecurityItem={activeSecurityItem}
      setActiveSecurityItem={setActiveSecurityItem}
      activeCategoryItems={activeCategoryItems}
      setActiveCategoryItem={setActiveCategoryItem}
    />
  </div>
};

export default Settings;