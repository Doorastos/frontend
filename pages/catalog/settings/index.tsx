import { Dispatch, FC, SetStateAction } from 'react';
import Where from './where';
import Filter from './filter';
import { ActiveCategoryItemType } from './filter/categories/item';
import { SecurityItemType } from '..';

type Props = {
  resetSettings: () => void
  activeLink: string | string[] | undefined
  activeSecurityItem: SecurityItemType
  setActiveSecurityItem: Dispatch<SetStateAction<SecurityItemType>>
  activeCategoryItems: ActiveCategoryItemType[]
  setActiveCategoryItem: (category: ActiveCategoryItemType['category'], newItems: string[]) => void
}

const Settings: FC<Props> = ({ resetSettings, activeLink, activeSecurityItem, setActiveSecurityItem, activeCategoryItems, setActiveCategoryItem }) => {
  return <div className='grid md:grid-cols-[1.3fr_1fr] md:gap-x-10 smlg:grid-cols-[380px_1fr] lg:grid-cols-[480px_1fr]'>
    <div className='flex flex-col gap-y-7'>
      <Where activeLink={activeLink} />
      <button className='text-esm w-full bg-blue1 text-white transition-colors py-2.5 hover:text-black hover:bg-line' onClick={resetSettings}>Reset settings</button>
    </div>
    <Filter
      activeSecurityItem={activeSecurityItem}
      setActiveSecurityItem={setActiveSecurityItem}
      activeCategoryItems={activeCategoryItems}
      setActiveCategoryItem={setActiveCategoryItem}
    />
  </div>
};

export default Settings;