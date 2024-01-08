import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { View } from 'react-native';
import Colors from '../../themes/Colors';
import { FontPrimary, FontSecondary } from '../../themes/Fonts';
import { StyledConsumided } from './styled';

interface IConsumided {
  title: string;
  ingredients: string[];
  hour: string;
}

export const ConsumidedProd: React.FC<IConsumided> = ({ ingredients, title, hour }) => {
  const [ingredientsTemp, setIngredients] = useState<string[]>(ingredients);

  const u_item = ingredientsTemp.pop();

  return (
    <StyledConsumided>
      <View style={{ display: 'flex', alignItems: 'flex-start' }}>
        <FontPrimary size={13} color={Colors.COLORS.secondary} weight={300}>
          {title}
        </FontPrimary>

        <View style={{ display: 'flex', flexDirection: 'row' }}>
          {ingredients.length > 0 &&
            ingredients.map((ingredient, index) => (
              <FontSecondary color={Colors.COLORS.gray} weight={300} size={13}>
                {`${ingredient} | `}
              </FontSecondary>
            ))}
          <FontSecondary color={Colors.COLORS.gray} weight={300} size={14}>
            {`${u_item}`}
          </FontSecondary>
        </View>
      </View>
      <View style={{ gap: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <AntDesign name="clockcircleo" size={12} color="black" />
        <FontPrimary size={12} weight={300} color={Colors.COLORS.secondary}>
          {hour}
        </FontPrimary>
      </View>
    </StyledConsumided>
  );
};
