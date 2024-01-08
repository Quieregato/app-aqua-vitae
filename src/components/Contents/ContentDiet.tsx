import { View } from 'react-native';
import { FontSecondary } from '../../themes/Fonts';
import { Percent } from '../Chip/Percent';
import { PercentTwo } from '../Chip/PercentTwo';
import { StyledDivisor } from '../Chip/styled';
import { StyleContentDiet } from './styled';

export const ContentDiet = () => {
  return (
    <StyleContentDiet>
      <FontSecondary weight={400} size={15}>
        Dieta
      </FontSecondary>

      <PercentTwo
        color="blue"
        name={{
          left: 'Dias restante para atingir objetivos',
          right: '17/30',
        }}
        percent={{
          atual: 17,
          total: 30,
        }}
      />

      <StyledDivisor />

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Percent color="green" name="Carbs" valueG={65} breakLine percent={30} />
        <Percent color="green" name="Fat" valueG={12} breakLine percent={20} />
        <Percent color="green" name="Protein" valueG={14} breakLine percent={50} />
      </View>

      <StyledDivisor />
    </StyleContentDiet>
  );
};
