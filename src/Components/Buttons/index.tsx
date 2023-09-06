import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Button } from '@react-native-material/core';
import { IGlobalComponents } from '../../Interfaces/IGlobal';
import Colors from '../../Themes/Colors';

interface IButton extends IGlobalComponents {
  text: string;
  style?: {
    backgroundColor?: string;
    padding?: number;
    color?: string;
    fontWeight?: any;
    borderColor?: string;
  };
}

export const ButtonSubmit: React.FC<IButton> = ({ style, text, setState }) => {
  return (
    <Button
      uppercase={false}
      color={style?.backgroundColor || Colors.COLORS.primary}
      title={text}
      trailing={(props) => (
        <Icon name="send" size={20} color={Colors.COLORS.white} {...{ props }} />
      )}
      titleStyle={{
        color: style?.color || 'white',
        fontSize: 15,
        fontWeight: style?.fontWeight || 500,
        marginRight: 10,
      }}
      onPress={setState}
      style={{
        borderTopEndRadius: 14,
        borderTopStartRadius: 14,
        borderBottomStartRadius: 14,
        borderBottomEndRadius: 14,
        padding: style?.padding || 2,
        borderWidth: 0,
        borderRadius: 10,
      }}
    />
  );
};
