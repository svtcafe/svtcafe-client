import styled from '@emotion/styled';

import Footer from './Footer';
import Header from './Header';

import { ESizes } from '@/styles/styles';

interface LayoutProps {
  children: React.ReactNode;
  nofooter?: boolean;
  fullWidth?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, nofooter, fullWidth }) => {
  return (
    <Container>
      <Header />
      <Main fullWidth={fullWidth}>{children}</Main>
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

const Main = styled.main<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : `${ESizes.content}px`)};
  padding: 0 ${({ fullWidth }) => (fullWidth ? 0 : `20px`)};
  margin: 0 auto;
  box-sizing: border-box;
`;
