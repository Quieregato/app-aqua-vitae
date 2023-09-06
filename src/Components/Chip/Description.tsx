import { View } from 'react-native';
import Colors from '../../Themes/Colors';
import { FontPrimary, FontSecondary } from '../../Themes/Fonts';
import { StyledDescription } from './styled';

interface IDescription {
  title: string;
  quantity: {
    value: number;
    name: string;
  };
  percentsKcal: number;
}

export const DescriptionProd: React.FC<IDescription> = ({ percentsKcal, quantity, title }) => {
  return (
    <StyledDescription>
      <View style={{ gap: 5 }}>
        <FontPrimary size={15} color={Colors.COLORS.secondary} weight={300}>
          {title}
        </FontPrimary>

        <FontSecondary
          color={Colors.COLORS.gray}
          weight={300}
          size={14}>{`${quantity.value} ${quantity.name}`}</FontSecondary>
      </View>

      <FontPrimary
        size={14}
        color={Colors.COLORS.primary}
        weight={400}>{`${percentsKcal} kcal`}</FontPrimary>
    </StyledDescription>
  );
};
