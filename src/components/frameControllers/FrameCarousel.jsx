import React from 'react';
import styled from 'styled-components';

import { useRecoilState } from 'recoil';
import { stageBgImageRef, selectedIconRef } from '../recoil/themes';

const CarouselContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Carousel = ({ frames, setSelectedFrame }) => {
  const [stageBgImage, setStageBgImage] = useRecoilState(stageBgImageRef);

  const handleSelectIcon = (e) => {
    // let newImg = document.createElement('img');
    // newImg.crossOrigin = 'AnonymousIcon';
    // newImg.src = e;
    let chosenFrame = new Image();
    chosenFrame.height = 900;
    chosenFrame.width = 300;
    chosenFrame.src = e;
    setStageBgImage(e);

    setSelectedFrame(chosenFrame);
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
            style={{ width: '45px', height: '45px', margin: '5px' }}
          />
        </span>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
