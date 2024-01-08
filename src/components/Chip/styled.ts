import styled from 'styled-components/native';
import Colors from '../../themes/Colors';

export const StyledPlan = styled.View`
  padding: 10px;
`;

export const StyledPlanDetail = styled.View`
  margin: 20px 5px;
`;

export const StyledDescription = styled.View`
  padding: 10px;
  gap: 13px;
`;

export const StyledConsumided = styled.View`
  padding: 10px;
  gap: 13px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledPhoto = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledPercent = styled.View`
  background-color: white;
  justify-content: space-around;
  width: 110px;
  gap: 10px;
  display: flex;
  padding: 10px;
  border-radius: 8px;
  height: 58px;
`;

export const StyledPercentTwo = styled.View`
  background-color: white;
  justify-content: space-around;
  flex-direction: column-reverse;
  gap: 1px;
  display: flex;
  border-radius: 8px;
  width: 100%;
  height: 58px;
`;

export const StyledDivisor = styled.View`
  border: 0.19px solid ${Colors.COLORS.gray};
  width: 100%;
  height: 0.1px;
`;
