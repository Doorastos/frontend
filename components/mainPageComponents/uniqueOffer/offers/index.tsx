import { FC } from 'react';
import Offer from './offer';
import Slider from "react-slick";
import styles from './styles.module.scss';
import cn from 'classnames';

const items = [
  {
    id: 0,
    name: '',
    price: 35000,
    img: 'https://i.postimg.cc/QNqVpB51/Rectangle-355.webp'
  },
  {
    id: 1,
    name: '',
    price: 44000,
    img: 'https://i.postimg.cc/J0T1SkcF/Rectangle-353.webp'
  },
  {
    id: 2,
    name: '',
    price: 26800,
    img: 'https://i.postimg.cc/Fs9dqbmT/Rectangle-354.webp'
  },
]

export type UniqueOfferItemType = {
  id: number
  name: string
  price: number
  img: string
};

const sliderProps = {
  dots: false,
  infinite: false,
  slidesToShow: 3,
}

const Offers: FC = () => {
  let Offers = items.map(i => <Offer {...i} key={i.id} />);

  return <Slider className={cn('mt50-150', styles.slider)} {...sliderProps}>
    {Offers}
  </Slider>
};

export default Offers;