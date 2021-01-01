import styled from 'styled-components';
import Link from 'next/link';


export const Container = styled.div`
  height: 121px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  color: #000000;
  font-size: 32px;
`;

export const About = styled.a`
  color: #000000;
  margin-right: 40px;
  font-size: 18px;

  :hover {
    color: #44337a;
  }
`;

const Header = () => (
  <Container>
    <Wrapper>
      <img src='/assets/blog/logo/logo.svg' width="60" height="60" alt="Cicatriz.DEV Logo"/>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">Cicatriz</a>
        </Link>
        .DEV
      </h2>
    </Wrapper>
    <About className="leading-tight font-bold md:text-4xl md:tracking-tighter text-2xl tracking-tight" href="/sobre-mim">
      Sobre mim
    </About>
  </Container>
);

export default Header;
