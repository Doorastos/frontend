import Dropdown from '@/components/dropdown';
import SettingsIcon from '@/components/icons/settingsIcon';
import { FC } from 'react';
import solidImg from '../../../../public/imgs/pages/catalog/settings/filter/solid.webp';
import MDFOverlaysImg from '../../../../public/imgs/pages/catalog/settings/filter/MDF-overlays.webp';
import laminatedChipboardImg from '../../../../public/imgs/pages/catalog/settings/filter/laminated-chipboard.webp';
import withGlassAndMirrorImg from '../../../../public/imgs/pages/catalog/settings/filter/with-glass-and-mirror.webp';
import forgedImg from '../../../../public/imgs/pages/catalog/settings/filter/forged.webp';
import withThermalBreakImg from '../../../../public/imgs/pages/catalog/settings/filter/additionalSecurity/with-thermal-break.webp';
import tamperproofImg from '../../../../public/imgs/pages/catalog/settings/filter/additionalSecurity/tamperproof.webp';
import armoredImg from '../../../../public/imgs/pages/catalog/settings/filter/additionalSecurity/armored.webp';

type Props = {

}

const dropdownItems = {
  price: [
    {
      text: '30 000 ₽ — 50 000 ₽',
    },
    {
      text: '50 000 ₽ — 70 000 ₽',
    },
    {
      text: '70 000 ₽ — 90 000 ₽',
    },
    {
      text: '90 000 ₽ and more',
    },
  ],
  finishing: [
    {
      text: 'Solid',
      info: {
        img: solidImg,
        texts: [
          {
            heading: 'This option is considered the most expensive of all.',
            description: 'For objective reasons, it can be called the most spectacular: our production offers many solutions that differ in different design solutions. There are many textures depending on the type of wood, toning with different shades is used, patterns are burned out, milling finishing technology is used.'
          }
        ]
      }
    },
    {
      text: 'MDF overlays',
      info: {
        img: MDFOverlaysImg,
        texts: [
          {
            heading: 'If you want to choose modern front door finishing materials that are affordable, practical, strong and durable, MDF boards are the perfect solution.',
            description: 'Today we offer a huge choice of designs. The decorative layer is a PVC film with various patterns in a wide range of colors (most often it imitates natural wood of valuable species). The thickness of the material can be from 6 to 16 mm, with the use of thick overlays, it becomes possible to mill with complex deep patterns.'
          }
        ]
      }
    },
    {
      text: 'Laminated chipboard',
      info: {
        img: laminatedChipboardImg,
        texts: [
          {
            heading: 'This option is most often used in apartment buildings where normal indoor humidity can be ensured.',
            description: 'Particleboard is cheaper than MDF, but this option requires protection from condensation on the surface. At the same time, performance characteristics such as sound insulation and protection against heat loss are at a fairly high level.'
          }
        ]
      }
    },
    {
      text: 'With glass and mirror',
      info: {
        img: withGlassAndMirrorImg,
        texts: [
          {
            heading: 'One of the most effective solutions in the design of metal doors was the use of glass and mirror inserts.',
            description: ' They allow you to make the canvas not only exclusive in its design, but also a much lighter element of the interior. In addition, it is worth noting the practical side of the issue: the mirror on the inside can also be used for its intended purpose. In addition, it visually enlarges the space, which is important for such compact spaces as a corridor.'
          }
        ]
      }
    },
    {
      text: 'Forged',
      info: {
        img: forgedImg,
        texts: [
          {
            heading: 'Metal doors with wrought iron elements are exclusive solutions that have become very popular lately. ',
            description: 'The most interesting stylistic ideas can be realized using this design technique. In addition, one cannot fail to note the practicality of such structures: this is an effective way to strengthen the canvas, make it more resistant to hacking. They are especially relevant if double-glazed windows are used in the design.'
          }
        ]
      }
    }
  ],
  color: [
    {
      text: 'Венге',
    },
    {
      text: 'Белые',
    },
    {
      text: 'Черные',
    },
    {
      text: 'Темные',
    },
    {
      text: 'Светлые',
    },
    {
      text: 'Красные',
    },
    {
      text: 'Зеленые',
    }
  ]
};

const securityProperties = [
  {
    text: 'With thermal break',
    info: {
      img: withThermalBreakImg,
      texts: [
        {
          heading: 'What is a thermal break?',
          description: 'This is a layer of material with low thermal conductivity, separating the outer and inner sides of the structure so that one does not transfer its temperature to the other.'
        },
        {
          heading: 'How does a thermal break work?',
          description: [
            'The principle of operation can be explained as "two doors in one", as the parts of the door are connected to each other through a heat-insulating material.',
            ' As a material with low thermal conductivity, for example, cork or MDF board is installed in the door.',
          ],
        },
      ]
    }
  },
  {
    text: 'Tamperproof',
    info: {
      img: tamperproofImg,
      texts: [
        {
          heading: 'Burglary-resistant entrance doors are steel doors endowed with strength characteristics and special technological solutions to protect against forced and intelligent burglary and opening.',
          description: 'These doors are "Burglary Resistant" only after passing the proper tests in a special laboratory, which determines how the front door is able to resist burglary by special metal-cutting and destructive tools, as well as pyrotechnics for a certain time.'
        }
      ]
    }
  },
  {
    text: 'Armored',
    info: {
      img: armoredImg,
      texts: [
        {
          heading: 'Armored doors are single or double doors with a metal frame covered with MDF. They vary in complexity of design and price.',
          description: [
            'The main component is a frame made of a bent profile, angle, channel. The second is the door leaf itself, which consists of two steel plates firmly fixed with hardness ribs. The thickness of the plates determines the weight of the door, they ensure its reliability.',
            'The third most important are locks, as a rule there are two or more of them at the buyer\'s choice.They must be secure and as burglar - resistant as possible.Correctly installed high - quality crossbars or pins provide a big role.',
          ]
        }
      ]
    }
  },
]

const Filter: FC<Props> = () => {

  return <div className='w-full'>
    <button className='flex w-full bg-blue1 transition-colors py-2.5 px-6 mt-5 hover:bg-blue2 active:bg-black active:text-white'>
      <span className='text14 text-white ml-auto'>Filter</span>
      <SettingsIcon className='ml-auto' />
    </button>
    {/* <Dropdown defaultItem='Price' items={dropdownItems.price} /> */}
    <Dropdown defaultItem='Finishing' items={dropdownItems.finishing} />
  </div>
};

export default Filter;