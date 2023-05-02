import { FC } from 'react';
import cn from 'classnames';
import { SVGProps } from 'react';

type Props = {
  className?: string
} & SVGProps<SVGSVGElement>

const CloseIcon: FC<Props> = ({ className, ...props }) => {
  return <svg
    className={cn(
      '',
      className,
    )}
    width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.1049 9.99924L19.7712 18.6655C20.0763 18.9707 20.0763 19.4654 19.7712 19.7704C19.4661 20.0755 18.9714 20.0755 18.6663 19.7704L9.99999 11.1041L1.33372 19.7704C1.0286 20.0755 0.533915 20.0755 0.228837 19.7704C-0.0762401 19.4653 -0.0762792 18.9706 0.228837 18.6655L8.89511 9.99928L0.228837 1.33297C-0.0762792 1.02785 -0.0762792 0.533163 0.228837 0.228086C0.381376 0.0755482 0.581337 -0.000701904 0.781297 -0.000701904C0.981258 -0.000701904 1.18118 0.0755482 1.33376 0.228086L9.99999 8.89436L18.6663 0.228086C18.8188 0.0755482 19.0188 -0.000701904 19.2187 -0.000701904C19.4187 -0.000701904 19.6186 0.0755482 19.7712 0.228086C20.0763 0.533203 20.0763 1.02789 19.7712 1.33297L11.1049 9.99924Z" fill="#C7C7C7" />
  </svg>
};

export default CloseIcon;