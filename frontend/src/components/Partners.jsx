import React from "react";
import styled, { keyframes, css } from "styled-components";

function Partners() {
    const row1 = [
        "Picture2.png",
        "Picture3.png",
        "Picture4.png",
        "Picture5.jpg",

    ];

    const row2 = [
        "Picture6.png",
        "Picture12.jpg",
        "Picture11.png",
        "Picture8.png",
    ];

    return (
        <AppContainer>
            <Wrapper>
                <Marquee>
                    <MarqueeGroup>
                        {row1.map((el) => (
                            <ImageGroup>
                                <Image src={el} />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup>
                    <MarqueeGroup>
                        {row1.map((el) => (
                            <ImageGroup>
                                <Image src={el} />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup>
                </Marquee>
                <Marquee>
                    <MarqueeGroup2>
                        {row2.map((el) => (
                            <ImageGroup>
                                <Image src={el} />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup2>
                    <MarqueeGroup2>
                        {row2.map((el) => (
                            <ImageGroup>
                                <Image src={el} />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup2>
                </Marquee>
            </Wrapper>
        </AppContainer>
    );
}

export default Partners;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;