import Colors from '../../Themes/Colors';
import { FontPrimary } from '../../Themes/Fonts';
import { StyledBtnRedirect } from './styled';

interface IButtonRedirect {
  route: string;
  text: string;
  Icon: any;
}

export const ButtonRedirect: React.FC<IButtonRedirect> = ({ text, Icon, route }) => {
  return (
    <StyledBtnRedirect>
      <FontPrimary size={17} weight={300} color={Colors.COLORS.secondary}>
        {text}
      </FontPrimary>

      {Icon}
    </StyledBtnRedirect>
  );
};
