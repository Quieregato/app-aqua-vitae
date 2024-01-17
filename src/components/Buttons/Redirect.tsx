import React from 'react';
import Colors from '../../themes/Colors';
import { FontPrimary } from '../../themes/Fonts';
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
