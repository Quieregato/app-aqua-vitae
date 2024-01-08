import { View } from 'react-native';
import { FontSecondary } from '../../themes/Fonts';
import { StyledContentResult } from './styled';

interface IContentResult {
  weight: number;
  bodyFat: number;
  visceralFat: number;
  bodyWater: number;
  title: string;
}

export const ContentResult: React.FC<IContentResult> = ({
  title,
  bodyFat,
  bodyWater,
  visceralFat,
  weight,
}) => {
  return (
    <StyledContentResult>
      <FontSecondary weight={400} size={15}>
        {title}
      </FontSecondary>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
        }}>
        <View style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <FontSecondary size={14} weight={400}>
            Peso
          </FontSecondary>
          <FontSecondary size={14}>{weight} kg</FontSecondary>
        </View>
        <View style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <FontSecondary size={14} weight={400}>
            Gordura Corporal
          </FontSecondary>
          <FontSecondary size={14}>%{bodyFat}</FontSecondary>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
        }}>
        <View style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <FontSecondary size={14} weight={400}>
            Água Corporal
          </FontSecondary>
          <FontSecondary size={14}>{bodyWater}%</FontSecondary>
        </View>
        <View style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <FontSecondary size={14} weight={400}>
            Gordura Visceral
          </FontSecondary>
          <FontSecondary size={14}>{visceralFat}</FontSecondary>
        </View>
      </View>
    </StyledContentResult>
  );
};
