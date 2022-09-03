import type { IconProps } from 'phosphor-react';

export interface IIconProps extends IconProps {
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}

const Icon: React.FC<IIconProps> = ({ icon, ...props }) => {
  const Icon = icon;
  return <Icon {...props} />;
};

export default Icon;
