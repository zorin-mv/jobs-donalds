export interface ISelectStylesProps {
  isDisabled?: boolean;
  isActive?: boolean;
}

export interface ISelectProps extends ISelectStylesProps {
  options: string[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  maxHeight?: string;
  isFullWidth?: boolean;
}
