import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;
