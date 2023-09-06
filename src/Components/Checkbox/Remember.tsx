import Checkbox from 'expo-checkbox';
import { StyleSheet } from 'react-native';
import Colors from '../../Themes/Colors';
import { FontPrimary } from '../../Themes/Fonts';
import { StyledRemeber } from './styled';

interface ICheckboxRemeber {
  text: string;
  name: string;
  checked: boolean;
  onChange: (value: boolean, name: string) => void;
}

export const CheckboxRemember: React.FC<ICheckboxRemeber> = ({ checked, name, onChange, text }) => {
  return (
    <StyledRemeber>
      <Checkbox
        style={styles.checkBox}
        value={checked}
        onValueChange={(e) => onChange(e, name)}
        color={checked ? Colors.COLORS.primary : undefined}
      />
      <FontPrimary weight={300} size={12}>
        {text}
      </FontPrimary>
    </StyledRemeber>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    borderRadius: 5,
    padding: 10,
    height: 2,
    width: 2,
    borderWidth: 1,
  },
});
