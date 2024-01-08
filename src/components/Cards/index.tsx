import { StyleSheet } from 'react-native';
import { IGlobalComponents } from '../../interfaces/IGlobal';
import Colors from '../../themes/Colors';
import { FontPrimary } from '../../themes/Fonts';
import { StyledCard } from './styled';

interface ICard extends IGlobalComponents {
  width?: number;
  height?: number;
  title?: string;
}

export const CardDefault: React.FC<ICard> = ({ children, height, width, title }) => {
  return (
    <StyledCard {...{ width, height }} style={[styles.shadowProps, styles.card]}>
      {title && (
        <FontPrimary size={14} weight={400} style={{ margin: 10 }} color={Colors.COLORS.secondary}>
          {title}
        </FontPrimary>
      )}
      {children}
    </StyledCard>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
  },
  shadowProps: {
    elevation: 5,
    shadowRadius: 20,
    shadowOpacity: 0.5,
    shadowColor: 'rgba(0, 0, 0,0.4)',
  },
});
