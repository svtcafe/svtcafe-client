import styled from '@emotion/styled';

import Footer from './Footer';
import Header from './Header';

import { ESizes } from '@/styles/styles';

interface LayoutProps {
  children: React.ReactNode;
  nofooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, nofooter }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      {!nofooter && <Footer />}
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: ${ESizes.content}px;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
`;
