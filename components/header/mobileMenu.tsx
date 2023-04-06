import { FC } from 'react';
import { HeaderLinkType } from '.';
import cn from 'classnames';
import { motion } from 'framer-motion';
import closeImg from '../../assets/imgs/close.svg';
import Image from 'next/image';

type Props = {
  links: HeaderLinkType[]
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: FC<Props> = ({ links, isOpen, onClose }) => {
  let Links = links.map((l, index) => <p key={index}>{l.name}</p>);

  return <div className='flex flex-col'>
    <div
      className={cn(
        'fixed top-0 left-0 w-screen h-screen transition-opacity bg-black/60',
        !isOpen && 'opacity-0 invisible'
      )}
      onClick={onClose}
    />
    <motion.div
      className='bg-white z-50'
      animate={{
        x: isOpen ? 0 : 450
      }}
      initial={false}
    >
      <Image src={closeImg} alt='Закрыть' onClick={onClose} role='button' />
      <div>
        {Links}
      </div>
    </motion.div>
  </div>
};

export default MobileMenu;