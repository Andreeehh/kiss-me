import { useEffect, useState } from 'react';
import { db } from '../../firebase'; // Certifique-se de que o caminho está correto
import { collection, getDocs } from 'firebase/firestore';
import * as Styled from './styles';

interface Kiss {
  instagram: string;
  image: string;
  date: string;
  time: string;
}

function Kisses() {
  const [kisses, setKisses] = useState<Kiss[]>([]);

  useEffect(() => {
    const fetchKisses = async () => {
      const querySnapshot = await getDocs(collection(db, 'submissions'));
      const kissesData: Kiss[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        kissesData.push({
          instagram: data.instagram,
          image: data.image,
          date: data.date,
          time: data.time,
        });
      });

      setKisses(kissesData);
    };

    fetchKisses();
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.Title>Lista de Beijos</Styled.Title>
      <Styled.List>
        {kisses.map((kiss, index) => (
          <Styled.ListItem key={index}>
            <Styled.Info>
              <p>
                {kiss.instagram} beijou {kiss.image} no dia {kiss.date} às{' '}
                {kiss.time}{' '}
              </p>
            </Styled.Info>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.Wrapper>
  );
}

export default Kisses;
