import styled from 'styled-components/native';
import Colors from '../../themes/Colors';

export const StyledButton = styled.Button``;

export const StyledBtnRedirect = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: ${Colors.COLORS.white};
  border-radius: 8px;
`;

interface IPress {
  color: string;
  width?: string;
}

export const ButtonColorClick = styled.Pressable<IPress>`
  background-color: white;
  border-color: ${(props) => props.color};
  border-width: 2px;
  padding: 10px;
  ${(props) => props.width && `width: ${props.width}`};
  border-radius: 10px;
`;
