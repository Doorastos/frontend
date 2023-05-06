import { FC, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import CloseIcon from '@/components/icons/CloseIcon';
import FirstStage from './stages/first';
import SecondStage from './stages/second';
import ThirdStage from './stages/third';
import FourthStage from './stages/fourth';

type Props = {

} & Dialog.DialogProps

const HelpChooseDialog: FC<Props> = ({ open, ...props }) => {
  const [stage, setStage] = useState(1);
  const handleStage = () => setStage(prev => prev + 1);

  useEffect(() => {
    if (open === false) {
      setStage(1);
    };
  }, [open, setStage]);

  const Stages = [
    <FirstStage setStage={handleStage} />,
    <SecondStage setStage={handleStage} />,
    <ThirdStage setStage={handleStage} />,
    <FourthStage />,
  ];

  return <Dialog.Root open={open} {...props}>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 fixed inset-0" />
      <Dialog.Content className="flex flex-col fixed top-[50%] left-[50%] min-h-[220px] w-[calc(100vw_-_20px)] max-w-[600px] translate-x-[-50%] translate-y-[-50%] bg-white focus:outline-none pb-10 pt-5 esm:w-[calc(100vw_-_40px)] esm:min-h-[280px]">
        <Dialog.Close asChild>
          <button
            className="absolute top-5 right-[10px]"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </Dialog.Close>
        <div className='flex flex-col w-full max-w-[440px] m-auto px-2.5 pt-10 esm:px-5'>
          {Stages[stage - 1]}
        </div>
        <div className='flex absolute bottom-0 left-0 w-full h-[3px] bg-grey4'>
          <span className='transition-all bg-black' style={{ width: `calc(25% * ${stage})` }} />
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
};

export default HelpChooseDialog;