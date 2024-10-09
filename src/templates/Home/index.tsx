import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { Heading } from 'components/Heading';
import { Button } from 'components/Button';
import { ImageButton } from 'components/ImageButton';
import InputTextField from 'components/InputTextField';
import { db } from '../../firebase'; // Certifique-se de que o caminho está correto
import { collection, addDoc } from 'firebase/firestore';
import * as Styled from './styles';

// Importa a roleta de forma dinâmica, desativando o SSR
const DynamicWheel = dynamic(
  () => import('react-custom-roulette').then((mod) => mod.Wheel),
  {
    ssr: false,
  },
);

interface WheelData {
  option?: string;
  image?: ImageProps;
  style?: StyleType; // Optional
  optionSize?: number; // Optional
}

interface StyleType {
  backgroundColor?: string; // Optional
  textColor?: string; // Optional
  fontFamily?: string; // Optional
  fontSize?: number; // Optional
  fontWeight?: number | string; // Optional
  fontStyle?: string; // Optional
}

interface ImageProps {
  uri: string;
  offsetX?: number; // Optional
  offsetY?: number; // Optional
  sizeMultiplier?: number; // Optional
  landscape?: boolean; // Optional
}

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
  const [showSortedPerson, setShowSortedPerson] = useState(false);
  const [submittedValue, setSubmittedValue] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [showWheel, setShowWheel] = useState(false); // Novo estado para controlar a exibição da roleta
  const [mustSpin, setMustSpin] = useState(false); // Estado para controlar se a roleta deve girar
  const [prizeNumber, setPrizeNumber] = useState(0);

  // Gerar os dados para a roleta a partir dos botões de imagem
  const wheelData: WheelData[] = imageButtonsData.map((button) => ({
    option: button.label,
    image: {
      uri: button.src,
      offsetY: 75,
      sizeMultiplier: 1.3,
    },
  }));

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

  const handleSpinClick = () => {
    setPrizeNumber(Math.floor(Math.random() * imageButtonsData.length)); // Escolhe um número aleatório
    setMustSpin(true); // Inicia o giro
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
          {showSortedPerson ? (
            <h1>Beijo aleatório com {selectedImage}</h1>
          ) : (
            <></>
          )}
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
          <Button
            label="Beijo Aleatório"
            variant="primary"
            onClick={() => {
              setShowWheel(true);
              setShowImageButtons(false);
            }} // Exibe a roleta ao clicar no botão
          />
        </>
      ) : showWheel ? (
        <>
          <DynamicWheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={wheelData}
            outerBorderColor="#ddd"
            outerBorderWidth={10}
            innerRadius={10}
            radiusLineColor="#ccc"
            radiusLineWidth={10}
            onStopSpinning={() => {
              setMustSpin(false);
              setShowInputField(true);
              setShowSortedPerson(true);
              setSelectedImage(imageButtonsData[prizeNumber].label);
            }}
          />
          <Button label="Girar" variant="success" onClick={handleSpinClick} />{' '}
          {/* Botão para iniciar o giro */}
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
