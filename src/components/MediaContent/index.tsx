import axios from 'axios';
import Container from 'components/Container';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Content, Wrapper } from './index.styles';

const MediaContent = (): React.ReactElement => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const [media, setMedia] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
      );

      setMedia(data);
    })();
  }, [type, id]);

  return (
    <Container>
      <Wrapper>
        <Content>{media && <h1>Media</h1>}</Content>
      </Wrapper>
    </Container>
  );
};

export default MediaContent;
