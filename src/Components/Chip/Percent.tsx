import { ProgressBar } from 'react-native-paper';
import Colors from '../../Themes/Colors';
import { FontPrimary } from '../../Themes/Fonts';
import { StyledPercent } from './styled';

interface IPercent {
  name: string;
  percent: number;
  color: 'red' | 'green' | 'orange';
}

const COLORS_MD = {
  red: Colors.COLORS.error,
  orange: Colors.COLORS.orange,
  green: Colors.COLORS.primary,
};

export const Percent: React.FC<IPercent> = ({ name, percent, color }) => {
  return (
    <StyledPercent>
      <ProgressBar progress={percent / 100} color={COLORS_MD[color]} />

      <FontPrimary size={17} weight={300} color={Colors.COLORS.gray}>
        {name}
      </FontPrimary>
    </StyledPercent>
  );
};
