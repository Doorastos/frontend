import { FC, RefAttributes } from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import cn from 'classnames';

type Props = {

} & RadixCheckbox.CheckboxProps & RefAttributes<HTMLButtonElement>

const Checkbox: FC<Props> = ({ ...props }) => {
  return <RadixCheckbox.Root
    className={cn(
      "flex items-center justify-center h-4 w-4 border border-grey2 rounded-[2px] appearance-none outline-none group-hover:border-black data-[state='checked']:border-black",
    )}
    {...props}
  >
    <RadixCheckbox.Indicator className="text-black">
      <svg className='fill-black' width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M2.5 5L0 2.61905L0.795 1.90476L2.5 3.5L6.205 0L7 0.752381L2.5 5Z" />
      </svg>
    </RadixCheckbox.Indicator>
  </RadixCheckbox.Root>
};

export default Checkbox;