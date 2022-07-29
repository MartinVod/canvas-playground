import React from 'react';

import { useRecoilState } from 'recoil';

import { imageShape as shape } from '../recoil/themes';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

import ThemesSelector from '../ThemesSelector';

const Container2 = styled.div`
  ${tw`
  mt-3
  bg-frame-xgray
  rounded-lg
  pt-2
`}
`;

const Heading1 = styled.h1`
  ${tw`

  text-2xl
  text-color-bright
  font-normal


  text-center
  mb-2
`}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Section1 = styled.div`
  ${tw`
  flex
  `}
`;

const Section2 = styled.div`
  ${tw`
    pt-0
    px-1
    md:grid grid-cols-1 auto-cols-max
    `}
`;

const CarouselC = styled.h1`
  ${tw`
    mt-5
`}
  margin: 0px, 0px;
  padding: 2px;
  overflow-y: auto;
  white-space: nowrap;
  max-width: 100%;
  max-height: 200px;
`;

const ShapesController = () => {
  const [imageShape, setImageShape] = useRecoilState(shape);

  const handleChooseShape = (shape) => {
    setImageShape(shape);
  };

  return (
    <Container2>
      <Section1>
        <Heading1>צורות </Heading1>
      </Section1>

      <Section2 style={{ paddingBottom: '20px' }}>
        <button
          onClick={() => handleChooseShape('square')}
          style={{ opacity: imageShape === 'square' ? 1 : 0.5 }}
        >
          ריבוע
        </button>
        <button
          onClick={() => handleChooseShape('circle')}
          style={{ opacity: imageShape === 'circle' ? 1 : 0.5 }}
        >
          עיגול
        </button>
        <button
          onClick={() => handleChooseShape('star')}
          style={{ opacity: imageShape === 'star' ? 1 : 0.5 }}
        >
          כוכב
        </button>
        <button
          onClick={() => handleChooseShape('heart')}
          style={{ opacity: imageShape === 'heart' ? 1 : 0.5 }}
        >
          לב
        </button>
      </Section2>
    </Container2>
  );
};

export default ShapesController;
