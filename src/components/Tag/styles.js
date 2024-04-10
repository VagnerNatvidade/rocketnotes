import styled from "styled-components";

export const Container = styled.span`
  margin-right: 6px;
  padding: 4px 14px;
  border-radius: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background: ${({ theme }) => theme.COLORS.ORANGE};
`;
