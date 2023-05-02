import { FC } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import CloseIcon from '../icons/CloseIcon';

type Props = {

} & Dialog.DialogProps

const HelpChooseDialog: FC<Props> = ({ ...props }) => {
  return <Dialog.Root {...props}>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 fixed inset-0" />
      <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] bg-white p-[25px] focus:outline-none">
        <Dialog.Title className="m-0 font-medium">
          Edit profile
        </Dialog.Title>
        <Dialog.Description className="mt-2.5 mb-5">
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        
        <div>Have you ever wondered what is going on?</div>
        <Dialog.Close asChild>
          <button
            className="absolute top-[10px] right-[10px]"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
};

export default HelpChooseDialog;