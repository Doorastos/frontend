import Image, { ImageProps } from 'next/image';
import { FC } from 'react';
import cn from 'classnames';

type Props = {

} & ImageProps

const ScreenBg: FC<Props> = ({ src, alt, className }) => {
  return <Image className={cn('absolute -left-[calc((100vw_-_100%)_/_2)] top-0 w-screen h-full max-w-[100vw] -z-20', className)} src={src} alt={alt} />
};

export default ScreenBg;