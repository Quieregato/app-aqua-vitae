import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View } from 'react-native';
import Colors from '../../Themes/Colors';
import { FontPrimary } from '../../Themes/Fonts';
import { CheckboxRemember } from '../Checkbox/Remember';
import { TextDefault } from '../Texts';
import { StyledContentLogin, StyledSave } from './styled';

export const ContentLogin = () => {
  const [isChecked, setIsChecked] = useState<{ name: string; value: boolean }>({
    value: false,
    name: 'remember',
  });

  return (
    <StyledContentLogin>
      <View>
        <TextDefault
          Icon={<AntDesign name="user" size={25} color={Colors.COLORS.light} />}
          onChange={() => {}}
          placeholder="Username"
        />
        <TextDefault
          Icon={<Ionicons name="md-key-outline" size={24} color={Colors.COLORS.light} />}
          onChange={() => {}}
          placeholder="Password"
        />
      </View>

      <StyledSave>
        <CheckboxRemember
          checked={isChecked?.value}
          name="remember"
          onChange={(value: boolean, name: string) => setIsChecked({ value, name })}
          text="Lembrar senha"
        />

        <FontPrimary size={12} color={Colors.COLORS.secondary} weight={500}>
          Forgot password?
        </FontPrimary>
      </StyledSave>
    </StyledContentLogin>
  );
};
