import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 100px 100px;
  background-color: white;
`;

const BackgroundImage = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 10;
`;

const Title = styled.h2`
  color: #333;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;

  span {
    color: #14b8a6;
  }
`;

const Description = styled.p`
  margin-top: 1.5rem;
  color: #6b7280;
  font-size: 1.125rem;
  line-height: 1.75;
  letter-spacing: 0.05em;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
`;

const OrderButton = styled.button`
  width: 12rem;
  height: 3.5rem;
  margin-top: 3rem;
  background-color: #14b8a6;
  border-radius: 0.375rem;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.75;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0d9c8d;
  }
`;

const TrustpilotImage = styled.img`
  width: 7rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

const TrustpilotText = styled.p`
  margin-top: 0.5rem;
  color: #333;
  font-size: 1rem;
  text-align: center;
  letter-spacing: 0.05em;

  span {
    color: #14b8a6;
  }
`;

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  z-index: 10;
`;

const BannerImage = styled.img`
  width: 80vw;
`;

const HomePage: React.FC = () => {
    return (
        <Container>
            <BackgroundImage src="src/assets/figure.png" alt="figure" />
            <ContentWrapper>
                <Title>
                    Beautiful food & <br /> takeaway,
                    <span>delivered</span> <br /> to your door.
                </Title>
                <Description>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.
                </Description>
                <OrderButton aria-label="Place an order">Place an Order</OrderButton>
                <TrustpilotImage src="src/assets/trustpilot.png" alt="trustpilot" />
                <TrustpilotText>
                    <span>4.8 out of 5</span> based on 2000+ reviews
                </TrustpilotText>
            </ContentWrapper>

            <BannerWrapper>
                <BannerImage src="src/assets/home-bunner.png" alt="banner" />
            </BannerWrapper>
        </Container>
    );
};

export default HomePage;
