import * as Accordion from '@radix-ui/react-accordion';
import { FC } from 'react';
import cn from 'classnames';
import { ArrowDownIcon } from '@radix-ui/react-icons';

type DefaultItemPropertiesType = {
  heading: string
  content: string | string[]
}

export type AccordionItemType = { //for any other component

} & DefaultItemPropertiesType

export type AccordionItemWithIdType = { //for the parent component
  id: number
} & DefaultItemPropertiesType

type Props = {

} & AccordionItemWithIdType


const Item: FC<Props> = ({ heading, content, id }) => {
  typeof content === 'string' && (content = [content]);
  let Content = content.map((c, index) => <p className='text-esm text-grey1 font-light mt-2.5 first:mt-0' key={index}>{c}</p>);

  return <Accordion.Item className='group relative' value={String(id)}>
    <span className='absolute w-full h-px bg-line hidden group-first:block md:w-[200vw] md:-left-[100vw]' />
    <Accordion.Header className='group/header'>
      <Accordion.Trigger className='flex justify-between items-center w-full pt-5 pb-2.5'>
        <span className='text-small transition-colors group-hover/header:text-blue1'>{heading}</span>
        <svg
          className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]/header:rotate-180"
          aria-hidden width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.64645 16.3536C3.84171 16.5488 4.15829 16.5488 4.35355 16.3536L7.53553 13.1716C7.7308 12.9763 7.7308 12.6597 7.53553 12.4645C7.34027 12.2692 7.02369 12.2692 6.82843 12.4645L4 15.2929L1.17157 12.4645C0.97631 12.2692 0.659728 12.2692 0.464466 12.4645C0.269203 12.6597 0.269203 12.9763 0.464466 13.1716L3.64645 16.3536ZM3.5 -2.18556e-08L3.5 16L4.5 16L4.5 2.18556e-08L3.5 -2.18556e-08Z" fill="#0222A5" />
        </svg>
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content
      className='overflow-hidden data-[state=open]:animate-slideDown pb-2.5 data-[state=closed]:animate-slideUp'
    >
      {Content}
    </Accordion.Content>
  </Accordion.Item>
};

export default Item;