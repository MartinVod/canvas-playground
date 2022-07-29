import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const Container1 = styled.div`
  ${tw`
 mt-3
 py-2
 bg-frame-xgray
 rounded-lg
`}
`;

const Section1 = styled.div`
  ${tw`
    flex
    gap-4
  `}
  position: relative;
`;

const Heading1 = styled.h1`
  ${tw`
  font-normal
  pl-4
  text-center
  mt-2
  text-color-bright
 `}
  font-size: 1.5rem;
`;

const Description = styled.div`
  ${tw`
  w-3/4
  text-sm
  text-frame-gray
  font-normal
  col-span-2
  py-2
  pl-4
  text-right
  mb-2
  leading-4
  `}
`;

const ButtonContainer = styled.span`
  ${tw`
    pl-0
  `}
`;

const Button = styled.button`
  ${tw`
    font-normal
    mb-2
    rounded-full
    h-12 w-12
    justify-center
    bg-color-bright
    border-none
    outline-none
  `}
`;

const Upload = ({
  setUploadedImage,
  setUploadedImageTwo,
  setUploadedImageThree,
  setHeight,
  setWidth,
  index,
  setNoImage,
}) => {
  let imageIndex = '';
  switch (index) {
    case 'top':
      imageIndex = 'עליונה';
      break;
    case 'middle':
      imageIndex = 'אמצעית';
      break;
    case 'bottom':
      imageIndex = 'תחתונה';
      break;
    default:
      imageIndex = '';
  }

  return (
    <Container1>
      <Heading1>{`העלאת תמונות ${imageIndex}`}</Heading1>
      <Section1>
        <Description>לחץ על האייקון לבחור תמונה - יש לבחור 3 תמונות</Description>
        <div>
          <ButtonContainer>
            <Button>
              <label htmlFor={`contained-button-file-${index}`}>
                <FontAwesomeIcon icon={faUpload} style={{ color: '#000', fontSize: '23px' }} />
              </label>
            </Button>
          </ButtonContainer>

          <input
            multiple
            type='file'
            accept='image/*'
            style={{
              opacity: 0,
              height: 80,
              width: 80,
              cursor: 'pointer',
              position: 'absolute',
              top: -20,
              right: 0,
            }}
            id={`contained-button-file-${index}`}
            onChange={(e) => {
              if (e.target.files.length === 3) {
                setUploadedImage(URL.createObjectURL(e.target.files[0]));
                setUploadedImageTwo(URL.createObjectURL(e.target.files[1]));
                setUploadedImageThree(URL.createObjectURL(e.target.files[2]));
                const i = new Image();
                const i2 = new Image();
                const i3 = new Image();
                i.onload = function () {
                  // const imageDimensions = [
                  //   {
                  //     height: i.height,
                  //     width: i.width,
                  //   },
                  // ];
                  setHeight(60);
                  setWidth(60);
                  setNoImage(false);
                };
                // i2.onload = function () {
                //   // const imageDimensions = [
                //   //   {
                //   //     height: i.height,
                //   //     width: i.width,
                //   //   },
                //   // ];
                //   setHeight('120px');
                //   setWidth('120px');
                // };
                // i3.onload = function () {
                //   // const imageDimensions = [
                //   //   {
                //   //     height: i.height,
                //   //     width: i.width,
                //   //   },
                //   // ];
                //   setHeight('120px');
                //   setWidth('120px');
                // };

                i.src = URL.createObjectURL(e.target.files[0]);
                i2.src = URL.createObjectURL(e.target.files[1]);
                i3.src = URL.createObjectURL(e.target.files[2]);
              } else {
                alert('יש לבחור 3 תמונות');
              }
            }}
          />
        </div>
      </Section1>
    </Container1>
  );
};

export default Upload;
