import React, { useState } from 'react';
// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import Switch from 'react-switch';

// import CustomButtons from './CustomTools';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

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
  w-3/4
  text-2xl
  text-color-bright
  font-normal
  col-span-2
  pb-2
  pl-4
  text-left
  mb-2
`}
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

const Toggle = styled.div`
  ${tw`
     pl-5
     pt-1.5
  `}
`;

const ButtonContainer = styled.div`
  display: block;
  margin-top: 2px;
  margin-right: 30px;
`;

const CustomButton = styled.button`
  background-color: white;
  padding: 6px 8px;
  padding-right: 3px;
  border-radius: 8px;
  margin-left: 12px;
  border: none;
  cursor: pointer;
  outline: none;
`;
// const FormFillup = styled.input`
//   width: 93%;
//   padding: 12px 13px;
//   margin: auto;
//   margin-bottom: 10px;
//   display: inline-block;
//   border: 1px solid #666666;
//   border-radius: 4px;
//   box-sizing: border-box;
//   background-color: #333333;
//   color: #666666;
//   font-size: 1rem;
// `;

const BackgroundController = ({ stageBgColor, setStageBgColor }) => {
  const [colorOrImage, setColorOrImage] = useState(false); // false = color , true = image

  const toggleColorOrImage = () => {
    setColorOrImage(!colorOrImage);
  };

  return (
    <Container2>
      <Section1>
        <Heading1>צבע</Heading1>
        <label htmlFor='material-switch'>
          <Toggle>
            <Switch
              checked={!colorOrImage}
              onChange={toggleColorOrImage}
              onColor='#666666'
              onHandleColor='#ffffff'
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              height={13}
              width={30}
              className='react-switch'
              id='material-switch'
            />
          </Toggle>
        </label>
      </Section1>
      {!colorOrImage && (
        <Section2>
          <span style={{ color: 'white' }}>לחץ על מנת לשנות צבע רקע</span>
          {/* <ButtonContainer> */}
          {/* <CustomButton> */}
          {/* <label htmlFor={'custom-color-stage-bg'}>
                <FontAwesomeIcon icon={faUpload} />
              </label> */}
          <input
            type='color'
            // accept='color'
            value={stageBgColor}
            style={{
              width: '200px',
              height: '30px',
              backgroundColor: 'transparent',
              borderWidth: 0,
              cursor: 'pointer',
            }}
            id={'custom-color-stage-bg'}
            onChange={(e) => setStageBgColor(e.target.value)}
          />
          {/* </CustomButton> */}
          {/* </ButtonContainer> */}
          {/* <FormFillup
            type='text'
            value={userName}
            name='username'
            placeholder='תאריך אירוע'
            onChange={(e) => setUsername(e.target.value)}
          /> */}
          {/* <CustomButtons
            fontColors={fontColor}
            setFontColors={setFontColor}
            bgColors={bgColor}
            setBgColors={setBgColor}
            alignment={alignment}
            fontFamily={fontFamily}
            setFontFamily={setFontFamily}
            fontlist='list-font-name'
            handleAlignment={handleAlignment}
            align={align}
            FontId='custom-color-font-name'
            bgId='custom-color-bg-name'
          /> */}
        </Section2>
      )}

      <Section1 style={{ paddingTop: '25px' }}>
        <Heading1>רקעים</Heading1>
        <label htmlFor='material-switch'>
          <Toggle>
            <Switch
              checked={colorOrImage}
              onChange={toggleColorOrImage}
              onColor='#666666'
              onHandleColor='#ffffff'
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              height={13}
              width={30}
              className='react-switch'
              id='material-switch'
            />
          </Toggle>
        </label>
      </Section1>
      {colorOrImage && (
        <Section2 style={{ paddingBottom: '20px' }}>carousel or list of backgrounds</Section2>
      )}
    </Container2>
  );
};

export default BackgroundController;
