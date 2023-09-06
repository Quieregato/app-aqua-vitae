import { StyleSheet } from 'react-native';
import { IGlobalComponents } from '../../Interfaces/IGlobal';
import { StyledCard } from './styled';

interface ICard extends IGlobalComponents {
  width?: number;
  height?: number;
}

export const CardDefault: React.FC<ICard> = ({ children, height, width }) => {
  return (
    <StyledCard {...{ width, height }} style={[styles.shadowProps, styles.card]}>
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
