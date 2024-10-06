import * as Styled from './styles';

export type HeadingProps = {
  title?: string;
};

export const Heading = ({ title }: HeadingProps) => {
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
    </Styled.Wrapper>
  );
};
