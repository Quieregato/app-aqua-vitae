import styled from 'styled-components/native';
import { IStyledProps } from '../../Interfaces/IStyled';
import Colors from '../../Themes/Colors';

export const StyledHeader = styled.View<IStyledProps>`
  background-color: ${Colors.COLORS.primary};
  height: ${(props) => (props.expansive ? 200 : 100)}px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (props.expansive ? 'flex-start' : 'center')};
  justify-content: space-between;
  padding: ${(props) => (props.expansive ? 35 : 15)}px 10px;
`;
