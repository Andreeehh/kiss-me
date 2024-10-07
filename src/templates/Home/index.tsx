import { useState } from 'react';
import { Heading } from 'components/Heading';
import { Button } from 'components/Button';
import { ImageButton } from 'components/ImageButton';
import InputTextField from 'components/InputTextField';
import { db } from '../../firebase'; // Certifique-se de que o caminho está correto
import { collection, addDoc } from 'firebase/firestore';
import * as Styled from './styles';

const imageButtonsData = [
  {
    src: 'https://res.cloudinary.com/dxcyn87v8/image/upload/v1728251702/eu_bq2i28.png',
    alt: 'André',
    label: 'André',
  },
  {
    src: 'https://res.cloudinary.com/dxcyn87v8/image/upload/v1728251702/ana_vmscko.png',
    alt: 'Ana',
    label: 'Ana',
  },
  {
    src: 'https://res.cloudinary.com/dxcyn87v8/image/upload/v1728251702/ju_aklxbh.png',
    alt: 'Juliana',
    label: 'Juliana',
  },
  {
    src: 'https://res.cloudinary.com/dxcyn87v8/image/upload/v1728251702/appa_h01qpw.png',
    alt: 'Gabriel',
    label: 'Gabriel',
  },
];

// Função para formatar a data
const formatDateTime = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return {
    date: `${day}/${month}`,
    time: `${hours}:${minutes}`,
  };
};

function Home() {
  const [showImageButtons, setShowImageButtons] = useState(false);
  const [showInputField, setShowInputField] = useState(false);
  const [submittedValue, setSubmittedValue] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const handleButtonClick = () => {
    setShowImageButtons(true);
  };

  const handleImageButtonClick = (label: string) => {
    setSelectedImage(label);
    setShowImageButtons(false);
    setShowInputField(true);
  };

  const submitInstagram = async (value: string) => {
    const now = new Date();
    const { date, time } = formatDateTime(now); // Formata a data e a hora

    try {
      await addDoc(collection(db, 'submissions'), {
        instagram: value,
        image: selectedImage,
        date, // Adiciona a data
        time, // Adiciona a hora
      });
      setShowInputField(false); // Oculta o campo de entrada após o envio
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
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
            onSubmit={(value) => {
              setSubmittedValue(value);
              submitInstagram(value); // Chama a função de envio
            }}
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
                onClick={() => handleImageButtonClick(button.label)}
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
