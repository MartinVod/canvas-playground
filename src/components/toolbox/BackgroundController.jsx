import React, { useState } from 'react';
// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import Switch from 'react-switch';
import FramesCarousel from '../frameControllers/FrameCarousel';
import frameData from '../../../config/frameData';

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

const BackgroundController = ({
  stageBgColor,
  setStageBgColor,
  colorOrImage,
  setColorOrImage,
  setSelectedFrame,
}) => {
  const toggleColorOrImage = () => {
    setColorOrImage(!colorOrImage);
  };

  const FRAMES = {
    bg_1: frameData.frames.bg_1,
    bg_2: frameData.frames.bg_2,
    bg_3: frameData.frames.bg_3,
    bg_4: frameData.frames.bg_4,
    bg_5: frameData.frames.bg_5,
    bg_6: frameData.frames.bg_6,
    bg_7: frameData.frames.bg_7,
    bg_8: frameData.frames.bg_8,
    bg_9: frameData.frames.bg_9,
    bg_10: frameData.frames.bg_10,
    bg_11: frameData.frames.bg_11,
    bg_12: frameData.frames.bg_12,
    bg_13: frameData.frames.bg_13,
    bg_14: frameData.frames.bg_14,
    bg_15: frameData.frames.bg_15,
    bg_16: frameData.frames.bg_16,
    bg_17: frameData.frames.bg_17,
    bg_18: frameData.frames.bg_18,
    bg_19: frameData.frames.bg_19,
    bg_20: frameData.frames.bg_20,
    bg_21: frameData.frames.bg_21,
    bg_22: frameData.frames.bg_22,
    bg_23: frameData.frames.bg_23,
    bg_24: frameData.frames.bg_24,
    bg_25: frameData.frames.bg_25,

    bg_27: frameData.frames.bg_27,
    bg_28: frameData.frames.bg_28,
    bg_29: frameData.frames.bg_29,
    bg_30: frameData.frames.bg_30,
    bg_31: frameData.frames.bg_31,

    bg_34: frameData.frames.bg_34,
    bg_35: frameData.frames.bg_35,
    bg_36: frameData.frames.bg_36,
    bg_37: frameData.frames.bg_37,
    bg_38: frameData.frames.bg_38,
    bg_39: frameData.frames.bg_39,
    bg_40: frameData.frames.bg_40,
    bg_41: frameData.frames.bg_41,
    bg_42: frameData.frames.bg_42,
    bg_43: frameData.frames.bg_43,
    bg_44: frameData.frames.bg_44,
    bg_45: frameData.frames.bg_45,
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

          <input
            type='color'
            accept='color'
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
        <Section2 style={{ paddingBottom: '20px' }}>
          <CarouselC>
            <FramesCarousel frames={FRAMES} setSelectedFrame={setSelectedFrame} />
          </CarouselC>
        </Section2>
      )}
    </Container2>
  );
};

export default BackgroundController;
