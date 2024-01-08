import { TextInput } from 'react-native-gesture-handler';
import Colors from '../../themes/Colors';
import { IText } from '../interfaces/ITexts';
import { StyledText } from './styled';

interface ITextDefalt extends IText {
  Icon: JSX.Element;
  name: string;
}

export const TextDefault: React.FC<ITextDefalt> = ({ Icon, onChange, placeholder, name }) => {
  return (
    <StyledText
      style={{
        borderBottomColor: Colors.COLORS.primary,
        borderWidth: 2,
        borderColor: 'transparent',
      }}>
      {Icon}
      <TextInput
        {...{ placeholder }}
        onChangeText={(value) => onChange({ target: { name, value } })}
        style={{ color: 'black' }}
        placeholderTextColor={'gray'}></TextInput>
    </StyledText>
  );
};
