import { TextInput } from 'react-native-gesture-handler';
import Colors from '../../Themes/Colors';
import { IText } from '../interfaces/ITexts';
import { StyledText } from './styled';

interface ITextDefalt extends IText {
  Icon: JSX.Element;
}

export const TextDefault: React.FC<ITextDefalt> = ({ Icon, onChange, placeholder }) => {
  return (
    <StyledText
      style={{
        borderBottomColor: Colors.COLORS.primary,
        borderWidth: 2,
        borderColor: 'transparent',
      }}>
      {Icon}
      <TextInput {...{ placeholder, onChange }}></TextInput>
    </StyledText>
  );
};
