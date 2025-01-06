import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 100px 100px;
`;

const BackgroundImage = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const Title = styled.h2`
  color: #08090A;
  font-size: 60px;
  font-weight: 400;
  line-height: 60px; 
  letter-spacing: 1.8px;

  span {
    color: #14b8a6;
  }
`;

const Description = styled.p`
  max-width: 560px;
  margin-top: 28px;
  color: #546285;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.36px;
`;

const OrderButton = styled.button`
  width: 12rem;
  height: 3.5rem;
  margin-top: 3rem;
  background-color: #35B8BE;;
  border-radius: 0.375rem;
  color: #FFF;
  text-align: center;
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0d9c8d;
  }
`;

const TrustpilotImage = styled.img`
  width: 7rem;
  margin-top: 2rem;
`;

const TrustpilotText = styled.p`
  margin-top: 0.5rem;
  color: #08090A;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  span {
    color: #35B8BE;
  }
`;

const BannerImage = styled.img`
  width: 40vw;
  max-width: 660px;
`;

const HomePage: React.FC = () => {
    return (
        <Container>
            <BackgroundImage src="src/assets/figure.png" alt="figure"/>
            <ContentWrapper>
                <Title>
                    Beautiful food & <br/> takeaway,
                    <span>delivered</span> <br/> to your door.
                </Title>
                <Description>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.
                </Description>
                <OrderButton aria-label="Place an order">Place an Order</OrderButton>
                <TrustpilotImage src="src/assets/trustpilot.png" alt="trustpilot"/>
                <TrustpilotText>
                    <span>4.8 out of 5</span> based on 2000+ reviews
                </TrustpilotText>
            </ContentWrapper>

            <BannerImage src="src/assets/home-bunner.png" alt="banner"/>
        </Container>
    );
};

export default HomePage;
