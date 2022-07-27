import React from 'react';

// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faA,
  faB,
  faU,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faPenFancy,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

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

const CustomButtonAlign = styled.button`
  background-color: white;
  padding: 6px 8px;
  border-radius: 8px;
  margin-left: 12px;
  border: none;
  cursor: pointer;
  outline: none;
`;

const CustomButtons = ({
  bgColors,
  setBgColors,
  fontColors,
  setFontColors,
  alignment,
  isBold,
  isUnderline,
  setIsBold,
  setIsUnderline,
  handleAlignment,
  fontFamily,
  setFontFamily,
  align,
  FontId,
  fontlist,
  bgId,
}) => {
  const renderIcon = () => {
    switch (alignment) {
      case align[0]:
        return <FontAwesomeIcon icon={faAlignJustify} />;
      case align[1]:
        return <FontAwesomeIcon icon={faAlignLeft} />;
      case align[2]:
        return <FontAwesomeIcon icon={faAlignRight} />;
      default:
        return <FontAwesomeIcon icon={faAlignJustify} />;
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <div
        style={{
          backgroundColor: '#fafafa',
          borderRadius: '8px',
          height: 26,
          width: 26,
          padding: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <label htmlFor={FontId}>
          <FontAwesomeIcon icon={faA} style={{ fontSize: 14 }} />
        </label>
        <input
          type='color'
          accept='color'
          value={fontColors}
          style={{
            visibility: 'hidden',
            width: '1px',
            height: '1px',
            position: 'absolute',
            fontSize: 12,
          }}
          id={FontId}
          onChange={(e) => setFontColors(e.target.value)}
        />
      </div>

      <div
        style={{
          borderRadius: '8px',
          height: 26,
          width: 26,
          padding: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isBold ? '#fafafa' : 'rgba(214, 214, 214, 0.75)',
          cursor: 'pointer',
        }}
        onClick={() => setIsBold(!isBold)}
      >
        <FontAwesomeIcon icon={faB} style={{ fontSize: 14 }} />
      </div>

      <div
        style={{
          backgroundColor: isUnderline ? '#fafafa' : 'rgba(214, 214, 214, 0.75)',
          cursor: 'pointer',

          borderRadius: '8px',
          height: 26,
          width: 26,
          padding: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => setIsUnderline(!isUnderline)}
      >
        <FontAwesomeIcon icon={faU} style={{ fontSize: 14 }} />
      </div>

      <CustomButtonAlign onClick={handleAlignment}>{renderIcon()}</CustomButtonAlign>

      <CustomButton>
        <input
          list={fontlist}
          type='search'
          value={fontFamily}
          style={{ outline: 'none', border: 'none' }}
          placeholder='Font Type'
          onChange={(e) => setFontFamily(e.target.value)}
        />
        <datalist id={fontlist}>
          <option value='Merriweather' aria-label='Merriweather' />
          <option value='Comic Neue' aria-label='Comic Neue' />
          <option value='Source Sans Pro' aria-label='Source Sans Pro' />
          <option value='Space Mono' aria-label='Space Mono' />

          <option value='Bellefair' aria-label='Bellefair' />
          <option value='Bona Nova' aria-label='Bona Nova' />
          <option value='Edu VIC WA NT Beginner' aria-label='Edu VIC WA NT Beginner' />
          <option value='Heebo' aria-label='Heebo' />
          <option value='Mochiy Pop One' aria-label='Mochiy Pop One' />
          <option value='Noto Rashi Hebrew' aria-label='Noto Rashi Hebrew' />
          <option value='Noto Sans Hebrew' aria-label='Noto Sans Hebrew' />
          <option value='Roboto' aria-label='Roboto' />
          <option value='Rubik' aria-label='Rubik' />
          <option value='Rubik Beastly' aria-label='Rubik Beastly' />
          <option value='Rubik Microbe' aria-label='Rubik Microbe' />
          <option value='Secular One' aria-label='Secular One' />
          <option value='Tinos' aria-label='Tinos' />
          <option value='Uchen' aria-label='Uchen' />
          <option value='Varela Round' aria-label='Varela Round' />
        </datalist>
      </CustomButton>
    </div>
  );
};

export default CustomButtons;
