import styled from '@emotion/styled';
import type { NextPage } from 'next';

import { Button, ContentHeader, ContentIntro } from '@/components';

const Home: NextPage = () => {
  return (
    <Container>
      home
      <TestZone>
        <Button size='xs' color='light' label='등록' />
        <Button size='xs' color='primary' label='등록' />
        <Button size='xs' color='dark' label='등록' />
        <Button size='xs' color='light' outlined label='등록' />
      </TestZone>
      <TestZone>
        <Button label='Sign In' outlined color='light' />
        <Button label='Sign Up' color='primary' />
      </TestZone>
      <TestZone>
        <Button label='진행중인 이벤트' color='primary' shadow />
        <Button label='종료된 이벤트' color='light' outlined shadow />
      </TestZone>
      <TestZone style={{ width: 300 }}>
        <Button label='SIGN UP' color='primary' fullWidth />
      </TestZone>
      <TestZone style={{ flexDirection: 'column' }}>
        <ContentHeader>Event Cafe</ContentHeader>
        <ContentIntro size='md'>다양한 이벤트를 만나보세요</ContentIntro>
      </TestZone>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  font-size: 2rem;
`;

const TestZone = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
