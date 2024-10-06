// src/components/ImageButton/stories.tsx
import { Meta, Story } from '@storybook/react/types-6-0';
import { ImageButton, ImageButtonProps } from '.';

export default {
  title: 'ImageButton',
  component: ImageButton,
} as Meta<ImageButtonProps>;

export const Template: Story<ImageButtonProps> = (args) => {
  return (
    <div>
      <ImageButton {...args} />
    </div>
  );
};

// Exemplo de como usar a story
export const Example = Template.bind({});
Example.args = {
  src: 'https://via.placeholder.com/150', // URL da imagem
  alt: 'Descrição da Imagem',
  label: 'Nome do Beijo',
  onClick: () => alert('Botão de imagem clicado!'),
};
