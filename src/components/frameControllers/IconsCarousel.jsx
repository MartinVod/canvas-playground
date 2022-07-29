import React from 'react';
import styled from 'styled-components';

import { useRecoilState } from 'recoil';

import { stageBgImageRef, selectedIconRef } from '../recoil/themes';

const CarouselContainer = styled.div`
  background-color: #000000;
`;

const Carousel = ({ frames, setSelectedFrame }) => {
  const [stageBgImage, setStageBgImage] = useRecoilState(stageBgImageRef);
  const [iconRef, setIconRef] = useRecoilState(selectedIconRef);

  const handleSelectIcon = (e) => {
    let newImg = document.createElement('img');
    newImg.crossOrigin = 'AnonymousIcon';
    newImg.height = 90;
    newImg.width = 90;
    newImg.src = e;
    setIconRef(e);

    setSelectedFrame(newImg);
  };

  return (
    <CarouselContainer>
      {Object.keys(frames).map((key) => (
        <span
          key={key}
          onClick={() => handleSelectIcon(frames[key])}
          onKeyDown={() => handleSelectIcon(frames[key])}
          role='button'
          tabIndex={0}
        >
          <img
            src={frames[key]}
            alt='some alt text'
            style={{ width: '50px', height: '50px', margin: '10px' }}
          />
        </span>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
