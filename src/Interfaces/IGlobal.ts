export interface IGlobalComponents {
  id?: string;
  children?: JSX.Element | JSX.Element[];
  setState?: (state?: any) => void;
  onSubmit?: () => void;
  navigation?: any;
}
