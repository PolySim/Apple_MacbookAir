import styled from "styled-components";

export const MenuStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 44px;
  font-family: Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: rgba(0, 0, 0, 0.8);

  > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 12px;
    width: min(100vw, 980px);

    > :hover {
      cursor: pointer;
    }
  }
`;

export const TitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: 66px;
  width: 100vw;

  > div {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: min(100vw, 980px);
    padding: 0 12px;

    // Left part
    > div:nth-of-type(1) {
      > div:nth-of-type(1) {
        font-size: 12px;
        color: #999;
        font-weight: 400;
      }
      > div:nth-of-type(2) {
        font-size: 21px;
        font-weight: 500;
      }
    }

    // Right part
    > div:nth-of-type(2) {
      display: flex;
      align-items: end;

      > div {
        margin-left: 24px;
        font-size: 12px;
        color: #666;
        font-weight: 400;
      }

      > div:nth-of-type(1) {
        color: #999;
      }

      // Button
      > div:nth-of-type(5) {
        background-color: #0071e3;
        color: #fff;
        padding: 3px 10px;
        border-radius: 980px;
        font-weight: 200;

        :hover {
          background-color: #147ce5;
        }
      }
    }
  }
  ::after {
    content: "";
    width: min(100vw, 980px);
    height: 1px;
    background-color: #ccc;
    margin-top: 12px;
  }
`;

export const EducationDiscountStyled = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f5f7;
  padding: 16px 12px;

  > div {
    display: flex;
    color: #1d1d1f;
    font-size: 16px;
    font-weight: 300;

    span {
      display: flex;
      margin-left: 6px;
      color: #0066cc;
      height: 100%;

      :hover {
        text-decoration: underline;
      }

      > div {
        display: flex;
        align-items: center;
        height: 100%;
        width: min-content;
      }
    }
  }
`;
