import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 144px;
    padding: 0 124px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    svg {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    button {
      background: none;
      border: none;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: -96px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  width: 186px;
  height: 186px;
  margin: 0 auto 32px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 7px;
    right: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: ${({ theme }) => theme.COLORS.ORANGE};
    cursor: pointer;

    > input {
      display: none;
    }

    > svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
