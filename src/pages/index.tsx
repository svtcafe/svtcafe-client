import styled from '@emotion/styled';

import { IntroButton, IntroYoutube } from '@/components';

import { EColors, EFontSizes } from '@/styles/styles';
import { OFFICIAL_TWEETER, OFFICIAL_YOUTUBE, YOUTUBE_THUMB } from '@/constant/links';
import { BreakPoint, breakpoint } from '@/styles/mixins/responsive';

const Home: NextPageWithLayout = () => {
  const videoId = 'VCDWg0ljbFQ'; // TODO: 서버에서 받아오기

  return (
    <Container videoId={videoId}>
      <Content>
        <Title>뭔가 그럴싸한 텍스트</Title>
        <Desc>훨씬 더 그럴싸하고 위에보다 더 긴 내용이 들어오는곳!</Desc>
        <IntroYoutube videoId={videoId} />
        <Buttons>
          <Button title='공식 트위터' href={OFFICIAL_TWEETER} />
          <Button title='공식 유튜브' href={OFFICIAL_YOUTUBE} />
          <Button title='이벤트 카페' href='/events' openInNewTab />
        </Buttons>
      </Content>
      <Backdrop />
    </Container>
  );
};

Home.hideFooter = true;
Home.fullContentWidth = true;
export default Home;

const Container = styled.div<{ videoId?: string }>`
  position: relative;
  flex: 1;
  font-size: 2rem;
  background-image: ${({ videoId }) => `url(${YOUTUBE_THUMB}/${videoId}/0.jpg)`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpoint(BreakPoint.mobile)} {
    padding: 0 20px;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Backdrop = styled.div`
  position: absolute;
  background-color: #000000aa;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: ${EFontSizes.h2};
  color: ${EColors.white};
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;

  ${breakpoint(BreakPoint.mobile)} {
    font-size: ${EFontSizes.h3};
  }
`;

const Desc = styled.p`
  font-size: ${EFontSizes.body1};
  color: ${EColors.gray_50};
  text-align: center;
  margin-bottom: 20px;

  ${breakpoint(BreakPoint.mobile)} {
    font-size: ${EFontSizes.body2};
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  ${breakpoint(BreakPoint.mobile)} {
    flex-direction: column;
    width: 100%;
  }
`;

const Button = styled(IntroButton)`
  ${breakpoint(BreakPoint.phablet)} {
    width: 130px;
    margin: 0 10px;
  }

  ${breakpoint(BreakPoint.mobile)} {
    width: 250px;
    margin-bottom: 15px;
  }
`;
