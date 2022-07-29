import React from 'react';
import { useRecoilState } from 'recoil';

import { cleanImages } from '../recoil/themes';

// Components
import Upload from '../toolbox/Upload';
import CustomText from '../toolbox/InputText';
import BackgroundController from '../toolbox/BackgroundController';
import ThemesController from '../toolbox/ThemesController';

const Inputs = ({
  checked,
  setchecked,
  checkedGuild,
  setcheckedGuild,
  handleChange,
  handleChangeGuild,
  uploadedImage,
  uploadedImageMiddle,
  uploadedImageBottom,
  setUploadedImage,
  setUploadedImageMiddle,
  setUploadedImageBottom,
  userName,
  setUsername,
  guildName,
  setGuildname,
  fontFamily,
  setFontFamily,
  bgColor,
  setBgColor,
  fontColor,
  setFontColor,
  alignment,
  bgColorGuild,
  setBgColorGuild,
  fontColorGuild,
  setFontColorGuild,
  handleAlignment,
  fontFamilyGuild,
  setFontFamilyGuild,
  align,
  setHeight,
  setWidth,
  stageBgColor,
  setStageBgColor,
  // celebratorIsBold,
  // isUnderline,
  // setIsBold,
  // setIsUnderline,
  // isBold,
  // isUnderline,
  // setIsBold,
  // setIsUnderline,
  colorOrImage,
  setColorOrImage,
  setSelectedFrame,
}) => {
  const [noImage, setNoImage] = useRecoilState(cleanImages);

  return (
    <div>
      <Upload
        // uploadedImage={uploadedImage}
        setUploadedImage={setUploadedImage}
        setUploadedImageTwo={setUploadedImageMiddle}
        setUploadedImageThree={setUploadedImageBottom}
        setHeight={setHeight}
        setWidth={setWidth}
        setNoImage={setNoImage}
        // index={'top'}
      />

      <CustomText
        checked={checked}
        checkedGuild={checkedGuild}
        setchecked={setchecked}
        setcheckedGuild={setcheckedGuild}
        handleChange={handleChange}
        handleChangeGuild={handleChangeGuild}
        userName={userName}
        setUsername={setUsername}
        guildName={guildName}
        setGuildname={setGuildname}
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
        bgColor={bgColor}
        setBgColor={setBgColor}
        fontColor={fontColor}
        setFontColor={setFontColor}
        alignment={alignment}
        bgColorGuild={bgColorGuild}
        setBgColorGuild={setBgColorGuild}
        fontColorGuild={fontColorGuild}
        setFontColorGuild={setFontColorGuild}
        fontFamilyGuild={fontFamilyGuild}
        setFontFamilyGuild={setFontFamilyGuild}
        handleAlignment={handleAlignment}
        align={align}
        // isBold={isBold}
        // isUnderline={isUnderline}
        // setIsBold={setIsBold}
        // setIsUnderline={setIsUnderline}
      />
      <BackgroundController
        {...{ stageBgColor, setStageBgColor, colorOrImage, setColorOrImage, setSelectedFrame }}
      />
      <ThemesController />
    </div>
  );
};

export default Inputs;
