export interface ISelectStylesProps {
  isDisabled?: boolean;
  isActive?: boolean;
}

export interface ISelectProps extends ISelectStylesProps {
  options: ISelectOption[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  maxHeight?: string;
  isFullWidth?: boolean;
}

export interface ISelectOption {
  title: string;
  id: string;
}
