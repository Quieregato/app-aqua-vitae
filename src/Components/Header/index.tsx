import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { IGlobalComponents } from '../../Interfaces/IGlobal';
import Colors from '../../Themes/Colors';
import { FontPrimary } from '../../Themes/Fonts';
import { StyledHeader } from './styled';

interface IHeader extends IGlobalComponents {
  title: string;
  expansive?: boolean;
}

export const HeaderDefault: React.FC<IHeader> = ({ navigation, title, expansive }) => {
  return (
    <StyledHeader expansive={expansive}>
      <MaterialCommunityIcons name="menu" size={24} color="white" />

      <FontPrimary weight={200} size={24} color={Colors.COLORS.white}>
        {title}
      </FontPrimary>

      <FontAwesome name="user-circle-o" size={24} color="white" />
    </StyledHeader>
  );
};
