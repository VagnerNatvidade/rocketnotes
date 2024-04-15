import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding-right: 16px;
  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  border-radius: 10px;
  background: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  > button {
    border: none;
    background: none;
  }

  > .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  > .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > input {
    width: 100%;
    height: 56px;
    padding: 12px;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
