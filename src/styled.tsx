import styled, { keyframes, css } from "styled-components";

const width = "min(85%, 980px)";
const colorGray = "#86868B";
const colorBlack = "#1D1D1F";

export const PhoneModeStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fad8d6;
  color: #3b1c32;
  font-size: 52px;
  text-align: center;
`;

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
  overflow-x: hidden;
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
    width: ${width};
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
  width: ${width};
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
    width: ${width};
    color: #86868b;

    span {
      color: #1d1d1f;
    }
  }

  /* Video */
  > div:nth-of-type(1) {
    margin-top: 24px;
    width: ${width};

    video {
      width: 100%;
    }
  }
`;

export const ImageSizeStyle = styled.div<{ nbFocus: number }>`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  width: ${width};
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

export const PerformanceStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > p {
    margin-top: 48px;
    width: ${width};
    color: ${colorGray};
    font-size: 24px;

    > span {
      color: ${colorBlack};
    }
  }
`;

export const PerformanceTitle = styled(TitleDesign)`
  margin-top: 96px;
  > p {
    font-size: 14px;
  }
`;

export const VideoPerformanceStyle = styled.div`
  margin-top: 48px;
  width: 100%;

  > video {
    width: 100%;
  }
`;

export const NumberPerformanceStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${width};
  margin-top: 48px;

  > img {
    width: 152px;
    height: 152px;
    padding-right: 48px;
    border-right: 1px solid ${colorBlack};
    margin-right: 48px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 249px);

    > div > p {
      font-size: 19px;
      color: ${colorGray};
      font-weight: 500;

      > sup {
        font-size: 10px;
      }
    }

    > div > p:nth-of-type(2) {
      font-size: 72px;
      color: ${colorBlack};
    }
  }
`;

export const ButtonGoInsideStyle = styled.div`
  width: ${width};
  margin-top: 48px;
  font-size: 17px;
  font-weight: 500;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border: 3px solid ${colorBlack};
    border-radius: 96px;
    padding: 12px 24px;
    transition: 0.3s ease-out;

    > svg {
      margin-left: 6px;
    }

    :hover {
      color: #fff;
      background-color: ${colorBlack};
    }
  }
`;

export const NewToMacStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  width: 100%;
  background-color: #fbfbfb;
  overflow-x: hidden;

  > h1 {
    color: ${colorBlack};
    font-size: 48px;
    font-weight: 500;
    width: ${width};
    margin-top: 48px;
  }

  /* Button to nav */

  > div:nth-of-type(2) {
    display: flex;
    justify-content: end;
    width: ${width};
    margin: 48px 0 48px;
  }
`;

export const TutorialsStyle = styled.div<{ padding: number }>`
  display: flex;
  box-sizing: border-box;
  width: 100vw;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* MF */
  ::-webkit-scrollbar {
    /* Chrome and safari */
    display: none;
  }
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  margin-top: 48px;
  scroll-padding: ${(props) => `0 ${props.padding}px`};

  > div {
    display: flex;
    padding: ${(props) => `0 ${props.padding}px`};
    width: max-content;
    > div {
      margin-right: 24px;
      width: 310px;
      height: 550px;
      scroll-snap-align: start;

      > img {
        width: 310px;
        height: 300px;
        object-fit: cover;
      }

      > p {
        margin-top: 24px;
        color: ${colorGray};
        font-size: 21px;
        line-height: 24px;

        > span {
          color: ${colorBlack};
          font-weight: 500;
        }
      }

      > p:nth-of-type(2) {
        color: #0066cc;
        cursor: pointer;
        font-size: 19px;

        :hover {
          text-decoration: underline;
        }
      }

      /* Last tutorial */

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 310px;
        height: 300px;
        padding-left: 36px;
        background-color: #fff;

        > div {
          display: flex;
          align-items: end;
          font-size: 32px;
          font-weight: 500;
          color: ${colorBlack};

          > svg {
            stroke-width: 4px;
            color: lime;
            margin-right: 6px;
            padding-bottom: 6px;
          }
        }

        > div:nth-of-type(4) {
          margin-left: 30px;
        }
      }
    }
  }
`;

export const NavIntoTutorial = styled.div<{
  clickable: boolean;
  first?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  opacity: ${(props) => (props.clickable ? "1" : "0.2")};
  background-color: rgba(210, 210, 215, 0.64);
  color: ${colorGray};
  margin-right: ${(props) => (props.first ? "18px" : "0")};

  :hover {
    background-color: ${(props) =>
      props.clickable
        ? "rgba(223,223,227,.6976)"
        : "rgba(210, 210, 215, 0.64)"};
  }

  > svg {
    stroke-width: 2px;
  }
`;
