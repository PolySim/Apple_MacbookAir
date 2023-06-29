import styled, { keyframes, css } from "styled-components";

export const MenuStyle = styled.div<{ height: string }>`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: ${(props) => props.height};
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

export const TitleStyle = styled.div<{
  isFixed: boolean;
  bdFilter: string;
  bgColor: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  z-index: 100;
  position: ${(props) => (props.isFixed ? "fixed" : "relative")};
  top: 0;
  height: 66px;
  width: 100vw;
  background-color: ${(props) => props.bgColor};
  backdrop-filter: ${(props) => props.bdFilter};

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
    width: ${(props) => (props.isFixed ? "100vw" : "min(100vw, 980px)")};
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

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 95vh;
  }
`;

export const MacBookTextStyle = styled.div`
  position: fixed;
  top: 40%;
  transform: translateY(-50%);
  font-size: 120px;
  font-weight: 600;
  height: fit-content;
  transform-origin: 53.7% 60%;
  letter-spacing: -3px;
`;

export const NowIn15Style = styled.div<{ visible: boolean; fixed: boolean }>`
  position: ${(props) => (props.fixed ? "absolute" : "relative")};
  top: 110vh;
  width: 100vw;
  opacity: ${(props) => (props.visible ? "1" : "0")};

  > div:nth-of-type(1) {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100vw;
    height: 200vh;
  }

  > div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    position: ${(props) => (props.fixed ? "fixed" : "relative")};
    top: 0vh;
    width: 100vw;
    transform-origin: center;
  }
`;

const TextApparition = keyframes`
  to{
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Present15Style = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100vw;
  top: 110vh;
  opacity: 0;
  transform: translateY(12px);

  animation: ${(props) =>
    props.visible
      ? css`
          ${TextApparition} 1s ease-in-out forwards
        `
      : css`none`};

  > div {
    width: min(85%, 980px);
  }

  /* Title */
  > div:nth-of-type(1) {
    font-size: 64px;
    font-weight: bold;
    line-height: -0.6px;
  }

  /* Explication */
  > div:nth-of-type(2) {
    margin-top: 24px;
    color: #86868b;
    font-size: 24px;
    b {
      color: black;
    }
  }

  /* Price */
  > div:nth-of-type(3) {
    font-size: 19px;
    margin-top: 24px;
    span {
      color: #bf4800;
    }
  }

  /* Watch */
  > div:nth-of-type(4) {
    display: flex;
    margin-top: 24px;
    font-size: 19px;
    color: #0066cc;

    > div {
      display: flex;
      align-items: center;
      height: 27px;

      svg {
        height: 20px;
        margin-left: 6px;
      }
    }

    > div:nth-of-type(2) {
      margin-left: 24px;
    }
  }
`;

export const DesignStyle = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  > div:nth-of-type(1) {
    height: ${(props) => (props.visible ? "120vh" : "200vh")};
  }
`;

export const TitleDesign = styled.div<{ visible: boolean }>`
  width: min(85%, 980px);
  opacity: 0;
  transform: translateY(12px);

  > p {
    color: #1d1d1f;
    font-size: 18px;
    font-weight: 400;
  }

  > div:nth-of-type(1) {
    font-size: 72px;
    font-weight: 600;
  }

  animation: ${(props) =>
    props.visible
      ? css`
          ${TextApparition} 1s ease-in-out forwards
        `
      : css`none`};
`;

export const FirstDesignImageStyle = styled.div`
  width: 100vw;
  height: fit-content;
  margin-top: 12px;

  video {
    width: 100%;
  }
`;

export const SizeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  p {
    margin-top: 24px;
    font-size: 24px;
    width: min(85%, 980px);
    color: #86868b;

    span {
      color: #1d1d1f;
    }
  }

  /* Video */
  > div:nth-of-type(1) {
    margin-top: 24px;
    width: min(85%, 980px);

    video {
      width: 100%;
    }
  }
`;

export const ImageSizeStyle = styled.div<{ nbFocus: number }>`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  width: min(85%, 980px);
  height: fit-content;

  > div {
    width: 49%;

    img {
      width: 100%;
    }
  }

  /* Left part */

  > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div:nth-of-type(1) {
      box-sizing: border-box;
      padding: 43px 89px;
      background-color: #fbfbfb;
    }

    > div:nth-of-type(2) {
      margin-top: 24px;
    }
  }

  /* Right part */

  > div:nth-of-type(2) {
    box-sizing: border-box;
    background-color: #fbfbfb;
    padding: 43px 89px;
    height: fit-content;

    > div {
      display: flex;
      margin-top: 36px;

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
      }
    }
  }
`;

export const ButtonColor = styled.span<{ focus: boolean }>`
  height: 32px;
  width: 32px;
  margin-bottom: 3px;
  border-radius: 50%;
  background-clip: content-box;
  padding: 3px;
  font-size: 12px;

  ${(props) =>
    props.focus
      ? css`
          border: 2px solid #0071e3;
        `
      : ""}
`;
