import Dropdown from '@/components/dropdown';
import { DropdownCheckboxItemType } from '@/components/dropdown/checkboxItem';
import { Dispatch, FC, SetStateAction } from 'react';

export type ActiveCategoryItemType = {
  category: string
  items: string[]
}

type Props = {
  defaultItem: string
  expandedItem: string | null
  setExpandedItem: Dispatch<SetStateAction<string | null>>
  items: DropdownCheckboxItemType[]
  activeItems: ActiveCategoryItemType[]
  setActiveItem: (category: string, newItems: string[]) => void
}

const Item: FC<Props> = ({ defaultItem, expandedItem, setExpandedItem, items, activeItems, setActiveItem }) => {
  return <Dropdown
    defaultItem={defaultItem}
    isExpanded={expandedItem === defaultItem}
    setIsExpanded={setExpandedItem}
    items={items}
    activeItems={activeItems.find(i => i.category === defaultItem)?.items || []}
    setActiveItem={setActiveItem}
  />
};

export default Item;