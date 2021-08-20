import { Heading, Wrapper } from './index.styles';

type Props = {
  readonly type: 'error';
  readonly text: string;
};

const headings = {
  error: 'Error'
};

const Alert = ({ type, text }: Props): JSX.Element => (
  <Wrapper type={type}>
    <Heading>{headings[type]}</Heading>
    <p>{text}</p>
  </Wrapper>
);

export default Alert;
