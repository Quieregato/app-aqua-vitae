import styled from 'styled-components/native';
import { IStyledProps } from '../../interfaces/IStyled';

export const StyledCard = styled.View<IStyledProps>`
  width: ${(props) => props.width || 340}px;
  height: ${(props) => props.height || 300}px;
  display: flex;
  justify-content: center;
`;
