import Container from 'components/Container';
import NavigationList from 'components/NavigationList';
import SearchBox from 'components/SearchBox';
import { useEffect,useState } from 'react';

import { Nav, Wrapper } from './index.styles';

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
