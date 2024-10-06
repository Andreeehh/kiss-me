import { useState } from 'react';
import { Heading } from 'components/Heading';
import { Button } from 'components/Button';
import { ImageButton } from 'components/ImageButton'; // Importe o componente ImageButton
import InputTextField from 'components/InputTextField'; // Importe seu campo de texto
import * as Styled from './styles';

const imageButtonsData = [
  {
    src: 'https://res.cloudinary.com/dxcyn87v8/image/upload/v1728251702/eu_bq2i28.png', // URL da imagem 1
    alt: 'André',
    label: 'André',
  },
  {
    src: 'https://res.cloudinary.com/dxcyn87v8/image/upload/v1728251702/ana_vmscko.png', // URL da imagem 2
    alt: 'Ana',
    label: 'Ana',
  },
  {
    src: 'https://res.cloudinary.com/dxcyn87v8/image/upload/v1728251702/ju_aklxbh.png', // URL da imagem 3
    alt: 'Juliana',
    label: 'Juliana',
  },
  {
    src: 'https://res.cloudinary.com/dxcyn87v8/image/upload/v1728251702/appa_h01qpw.png', // URL da imagem 4
    alt: 'Gabriel',
    label: 'Gabriel',
  },
];

function Home() {
  const [showImageButtons, setShowImageButtons] = useState(false);
  const [showInputField, setShowInputField] = useState(false);
  const [submittedValue, setSubmittedValue] = useState('');

  const handleButtonClick = () => {
    setShowImageButtons(true);
  };

  const handleImageButtonClick = () => {
    setShowImageButtons(false);
    setShowInputField(true);
  };

  const submitInstagram = (value: string) => {
    setSubmittedValue(value);
    setShowInputField(false); // Oculta o campo de entrada após o envio
  };

  return (
    <Styled.Wrapper>
      {submittedValue ? (
        <>
          <Heading title="Enviado!" />
          <h1>Obrigado pelo beijo {submittedValue}</h1>
        </>
      ) : showInputField ? (
        <>
          <Heading title="Me passa seu insta?" />
          <InputTextField
            placeholder="Digite seu insta"
            onSubmit={submitInstagram} // Passa a função para o campo de texto
          />
        </>
      ) : showImageButtons ? (
        <>
          <Heading title="QUEM VC BEIJOU?" />
          <Styled.Grid>
            {imageButtonsData.map((button, index) => (
              <ImageButton
                key={index}
                src={button.src}
                alt={button.alt}
                label={button.label}
                onClick={handleImageButtonClick} // Ação ao clicar na imagem
              />
            ))}
          </Styled.Grid>
        </>
      ) : (
        <>
          <Heading title="BORA SE BEIJAR?" />
          <Button label="SIM" variant="success" onClick={handleButtonClick} />
          <Button
            label="SIM MAS EM VERMELHO"
            variant="danger"
            onClick={handleButtonClick}
          />
        </>
      )}
    </Styled.Wrapper>
  );
}

export default Home;
