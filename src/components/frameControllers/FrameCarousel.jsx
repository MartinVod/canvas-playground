import React from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
background-color: #FFFFFF;
`;

const Carousel = ({ frames, setSelectedFrame }) => {
  const handleSelectIcon = (e) => {
    console.log('e', e);
    let newImg = document.createElement('img');
    newImg.crossOrigin = 'AnonymousIcon';
    newImg.height = 90;
    newImg.width = 90;
    newImg.src = e;

    console.log('newImg', newImg);
    console.log('newImg', newImg);
    console.log('newImg', newImg);

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
