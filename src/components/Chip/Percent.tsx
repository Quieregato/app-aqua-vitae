import { ProgressBar } from 'react-native-paper';
import Colors from '../../themes/Colors';
import { FontPrimary } from '../../themes/Fonts';
import { StyledPercent } from './styled';

interface IPercent {
  name: string;
  valueG: number;
  percent: number;
  color: 'red' | 'green' | 'orange';
  breakLine?: boolean;
}

const COLORS_MD = {
  red: Colors.COLORS.error,
  orange: Colors.COLORS.orange,
  green: Colors.COLORS.primary,
};

export const Percent: React.FC<IPercent> = ({ name, percent, color, valueG, breakLine }) => {
  const position = breakLine ? 'center' : 'left';
  return (
    <StyledPercent>
      <ProgressBar progress={percent / 100} color={COLORS_MD[color]} />

      <FontPrimary
        size={14}
        weight={400}
        style={{ display: 'flex', textAlign: position, marginTop: 10 }}
        color={Colors.COLORS.gray}>
        {name}
        {!breakLine && `: ${valueG}`}
      </FontPrimary>
      {breakLine && (
        <FontPrimary
          size={14}
          weight={500}
          style={{ marginTop: 1, display: 'flex', textAlign: position }}
          color={Colors.COLORS.blue}>
          {valueG} g
        </FontPrimary>
      )}
    </StyledPercent>
  );
};
