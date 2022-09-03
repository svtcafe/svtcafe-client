import styled from '@emotion/styled';
import Footer from './Footer';
import Header from './Header';

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
`;
