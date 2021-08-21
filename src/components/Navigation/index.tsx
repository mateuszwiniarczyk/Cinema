import { useState, useEffect } from 'react';
import { Nav, Wrapper } from './index.styles';
import Container from 'components/Container';
import SearchBox from 'components/SearchBox';
import NavigationList from 'components/NavigationList';

const Navigation = (): JSX.Element => {
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        if (!isNavScrolled) {
          setIsNavScrolled(true);
        }
      } else {
        setIsNavScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavScrolled]);

  return (
    <Nav isNavScrolled={isNavScrolled}>
      <Container>
        <Wrapper>
          <NavigationList />
          <SearchBox />
        </Wrapper>
      </Container>
    </Nav>
  );
};

export default Navigation;
