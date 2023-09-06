import styled from 'styled-components/native';
import Colors from './Colors';

interface IFonts {
  weight?: number;
  size?: number;
  color?: string;
}

export const FontPrimary = styled.Text<IFonts>`
  color: ${(props) => props.color || Colors.COLORS.dark};
  font-size: ${(props) => props.size || 40}px;
  font-weight: ${(props) => props.weight || 100};
  letter-spacing: 0.821px;
`;

export const FontSecondaryBold = styled.Text<IFonts>`
  color: ${props => props.color || Colors.COLORS.dark};
  font-size: ${(props) => props.size || 20}px;
  font-style: normal;
  font-weight: ${(props) => props.weight || 500};
  letter-spacing: 1.429px;
`;

export const FontSecondary = styled.Text<IFonts>`
  color: ${props => props.color || Colors.COLORS.secondary};
  font-size: ${(props) => props.size || 12}px;
  font-style: normal;
  font-weight: ${(props) => props.weight || 100};
  letter-spacing: 0.857px;
`;
