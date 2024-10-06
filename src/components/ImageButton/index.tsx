import * as Styled from './styles';

export type ImageButtonProps = {
  src: string;
  alt: string;
  label: string;
  onClick: () => void;
};

export const ImageButton = ({ src, alt, label, onClick }: ImageButtonProps) => {
  return (
    <Styled.Wrapper onClick={onClick}>
      <img src={src} alt={alt} />
      <h1>{label}</h1>
    </Styled.Wrapper>
  );
};
