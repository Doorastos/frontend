import { FC } from 'react';
import advantage1 from '../../../public/imgs/pages/main/advantages/1.png';
import advantage2 from '../../../public/imgs/pages/main/advantages/2.png';
import advantage3 from '../../../public/imgs/pages/main/advantages/3.png';
import Advantage from './advantage';
import SectionHeading from '@/components/sectionHeading';
import { StaticImageData } from 'next/image';

const items = [
  {
    heading: 'Expert - это достижение самых высоких целей на рынке',
    description: 'Поэтому мы имеем в своем арсенале самые высокотехнологичные материалы. Если вам нужен уникальный дизайн, уникальный цвет и сложное техническое оснащение-Expert с радостью предложит для вас решение. ',
    img: advantage1,
  },
  {
    heading: 'Входная дверь - это вход в ваш дом, поэтому мы серьезно относимся к безопасности ',
    description: 'Лучшие в отрасли функции безопасности, такие  как закаленное безопасное стекло, петли и крючки. Для этого наши двери должны были пройти проверку по всем аспектам безопасности.',
    img: advantage2,
    className: 'esm:flex esm:flex-col md:max-w-[22em] md:[&>img]:min-h-[600px] smlg:[&>div]:max-w-[500px] smlg:max-w-[500px] smlg:[&>img]:min-h-[700px]'
  },
  {
    heading: 'Входные двери Expert изготавливаются под ваши размеры, что делает их более теплоэффективными',
    description: 'Наши двери из ПВХ класса A + 21 являются самыми теплыми и безопасными из имеющихся. Мы также менее терпимы к зазорам, чем другие поставщики, поэтому мы используем специальную отделку вокруг дверной коробки для более аккуратной отделки и предотвращения попадания холодного воздуха и тепла внутрь.',
    img: advantage3,
    className: 'esm:[&>img]:min-h-[350px] md:flex md:flex-col md:max-w-[22em] md:ml-auto md:[&>img]:min-h-[450px] smlg:[&>div]:max-w-[500px] smlg:max-w-[700px] smlg:[&>img]:min-h-[500px]',
  },
];

export type MainPageAdvantageType = {
  heading: string
  description: string
  img: StaticImageData
}

const Advantages: FC = () => {
  let Items = items.map((i, index) => <Advantage {...i} key={index} />);

  return <section className='mt130-300'>
    <SectionHeading>Приемущества</SectionHeading>
    <div className='flex flex-col gap-y-32 esm:gap-y-36 smlg:gap-y-[200px]'>
      {Items}
    </div>
  </section>
};

export default Advantages;