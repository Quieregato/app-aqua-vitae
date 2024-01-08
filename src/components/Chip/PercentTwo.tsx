import { View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Colors from '../../themes/Colors';
import { FontPrimary } from '../../themes/Fonts';
import { StyledPercentTwo } from './styled';

interface IPercent {
  name: {
    left: string;
    right: string;
  };
  percent: {
    total: number;
    atual: number;
  };
  color: 'red' | 'green' | 'orange' | 'blue';
}

const COLORS_MD = {
  red: Colors.COLORS.error,
  orange: Colors.COLORS.orange,
  green: Colors.COLORS.primary,
  blue: Colors.COLORS.blue,
};

export const PercentTwo: React.FC<IPercent> = ({ name, percent, color }) => {
  return (
    <StyledPercentTwo>
      <ProgressBar
        progress={((100 / percent.total) * percent.atual) / 100}
        color={COLORS_MD[color]}
        style={{
          height: 5,
          borderRadius: 20,
        }}
      />

      <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
        <FontPrimary size={14} weight={400} color={Colors.COLORS.gray}>
          {name.left}
        </FontPrimary>

        <FontPrimary size={14} weight={400} color={Colors.COLORS.gray}>
          {name.right}
        </FontPrimary>
      </View>
    </StyledPercentTwo>
  );
};
