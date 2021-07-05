export interface ISelectStylesProps {
  isDisabled?: boolean;
  isActive?: boolean;
}

export interface ISelectProps extends ISelectStylesProps {
  options: ISelectOption[];
  selected: ISelectOption;
  setSelected: React.Dispatch<React.SetStateAction<ISelectOption>>;
  maxHeight?: string;
  isFullWidth?: boolean;
}

export interface ISelectOption {
  name: string;
  id: string;
}
