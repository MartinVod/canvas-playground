import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import Switch from 'react-switch';
import { useRecoilState } from 'recoil';

import CustomButtons from './CustomTools';

import {
  celebratorsNamesIsBold,
  celebratorsNamesIsUnderline,
  dateIsBold,
  dateIsUnderline,
} from '../recoil/themes';
import { gifVersion } from 'canvas';

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

const FormFillup = styled.input`
  width: 93%;
  padding: 12px 13px;
  margin: auto;
  margin-bottom: 10px;
  display: inline-block;
  border: 1px solid #666666;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #333333;
  color: #666666;
  font-size: 1rem;
`;

const CustomText = ({
  userName = '15.10.22',
  guildName = 'דני ודנה',
  setUsername,
  setGuildname,
  checked,
  checkedGuild,
  handleChangeGuild,
  handleChange,
  fontFamily,
  fontColor,
  setFontColor,
  bgColor,
  setBgColor,
  alignment,
  setFontFamily,
  bgColorGuild,
  setBgColorGuild,
  fontColorGuild,
  handleAlignment,
  setFontColorGuild,
  setFontFamilyGuild,
  fontFamilyGuild,
  align,
  // isBold,
  // isUnderline,
  // setIsBold,
  // setIsUnderline,
}) => {
  const [celebratorsNamesFontIsBold, setCelebratorsNamesFontIsBold] =
    useRecoilState(celebratorsNamesIsBold);

  const [celebratorsNamesFontIsUnderline, setCelebratorsNamesFontIsUnderline] = useRecoilState(
    celebratorsNamesIsUnderline,
  );
  const [dateFontIsBold, setDateFontIsBold] = useRecoilState(dateIsBold);
  const [dateFontIsUnderline, setDateFontIsUnderline] = useRecoilState(dateIsUnderline);

  return (
    <Container2>
      <Section1>
        <Heading1>תאריך</Heading1>
        <label htmlFor='material-switch'>
          <Toggle>
            <Switch
              checked={checkedGuild || !!guildName?.length}
              onChange={handleChange}
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
      {(checkedGuild || !!guildName?.length) && (
        <Section2>
          <FormFillup
            type='text'
            value={userName}
            name='username'
            placeholder='תאריך אירוע'
            onChange={(e) => setUsername(e.target.value)}
          />
          <CustomButtons
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
            isBold={dateFontIsBold}
            setIsBold={setDateFontIsBold}
            isUnderline={dateFontIsUnderline}
            setIsUnderline={setDateFontIsUnderline}
          />
        </Section2>
      )}

      <Section1 style={{ paddingTop: '25px' }}>
        <Heading1>שמות</Heading1>
        <label htmlFor='material-switch'>
          <Toggle>
            <Switch
              checked={checked || !!userName?.length}
              onChange={handleChangeGuild}
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
      {(checked || !!userName?.length) && (
        <Section2 style={{ paddingBottom: '20px' }}>
          <FormFillup
            type='text'
            value={guildName}
            name='guildname'
            placeholder='דני ודנה'
            onChange={(e) => setGuildname(e.target.value)}
          />

          <CustomButtons
            fontColors={fontColorGuild}
            setFontColors={setFontColorGuild}
            bgColors={bgColorGuild}
            setBgColors={setBgColorGuild}
            alignment={alignment}
            fontFamily={fontFamilyGuild}
            setFontFamily={setFontFamilyGuild}
            fontlist='list-font-guild'
            handleAlignment={handleAlignment}
            align={align}
            FontId='custom-color-font-guild'
            bgId='custom-color-bg-guild'
            isBold={celebratorsNamesFontIsBold}
            isUnderline={celebratorsNamesFontIsUnderline}
            setIsBold={setCelebratorsNamesFontIsBold}
            setIsUnderline={setCelebratorsNamesFontIsUnderline}
          />
        </Section2>
      )}
    </Container2>
  );
};

export default CustomText;
