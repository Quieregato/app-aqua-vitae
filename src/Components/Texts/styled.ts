import styled from 'styled-components/native';

export const StyledText = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  padding: 10px;
`;

export const StyledTextSearch = styled(StyledText)`
  border-radius: 14px;
  height: 48px;
  gap: 12px;
  padding: 0 15px 0;
`;

export const StyledSearch = styled.TextInput`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  padding: 10px;
`;
