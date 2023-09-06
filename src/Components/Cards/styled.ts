import styled from 'styled-components/native';
import { IStyledProps } from '../../Interfaces/IStyled';

export const StyledCard = styled.View<IStyledProps>`
  width: ${(props) => props.width || 340}px;
  height: ${(props) => props.height || 271}px;
`;
