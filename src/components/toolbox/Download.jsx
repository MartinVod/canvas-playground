import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

import { useRecoilState } from 'recoil';

import {
  themesList as themesListInStore,
  selectedIcon,
  // iconPositionX,
  // iconPositionY,
  colorOrImage as bgType,
  stageBgColor as frameBgColor,
  stageBgImage as frameBgImage,
  celebratorsNames,
  date,
  stageBgImageRef as stageBgImageRefInStore,
  selectedIconRef,
  /* ========== */
  positionImageTopX as positionImageTopXInStore,
  positionImageTopY as positionImageTopYInStore,
  positionImageMiddleX as positionImageMiddleXInStore,
  positionImageMiddleY as positionImageMiddleYInStore,
  positionImageBottomX as positionImageBottomXInStore,
  positionImageBottomY as positionImageBottomYInStore,
  iconPositionX as iconPositionXInStore,
  iconPositionY as iconPositionYInStore,
  datePositionX as datePositionXInStore,
  datePositionY as datePositionYInStore,
  celebratorsPositionX as celebratorsPositionXInStore,
  celebratorsPositionY as celebratorsPositionYInStore,
  celebratorsNamesColor as celebratorsNamesColorInStore,
  celebratorsNamesFont as celebratorsNamesFontInStore,
  celebratorsNamesIsBold as celebratorsNamesIsBoldInStore,
  celebratorsNamesIsUnderline as celebratorsNamesIsUnderlineInStore,
  dateColor as dateColorInStore,
  dateFont as dateFontInStore,
  dateIsBold as dateIsBoldInStore,
  dateIsUnderline as dateIsUnderlineInStore,
  cleanImages,
} from '../recoil/themes';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DownloadContainer = styled.div`
  ${tw`
    `}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  ${tw`
    bg-color-bright
    px-4
    py-4
    text-black
    border-none
    outline-none
    hover:bg-frame-gray
    `}
  border-radius: 8px;
  cursor: pointer;
`;

const Download = ({
  stageRef,
  setUploadedImage,
  setUploadedImageMiddle,
  setUploadedImageBottom,
}) => {
  const [themesList, setThemesList] = useRecoilState(themesListInStore);

  const [SelectedIcon] = useRecoilState(selectedIcon);
  const [SelectedFrame] = useRecoilState(frameBgImage);
  const [stageBgColor] = useRecoilState(frameBgColor);
  const [colorOrImage] = useRecoilState(bgType);
  const [celebratorsText] = useRecoilState(celebratorsNames);
  const [dateText] = useRecoilState(date);
  const [stageBgImageRef, setStageBgImageRef] = useRecoilState(stageBgImageRefInStore);
  const [iconRef, setIconRef] = useRecoilState(selectedIconRef);

  const [positionImageTopX] = useRecoilState(positionImageTopXInStore);
  const [positionImageTopY] = useRecoilState(positionImageTopYInStore);
  const [positionImageMiddleX] = useRecoilState(positionImageMiddleXInStore);
  const [positionImageMiddleY] = useRecoilState(positionImageMiddleYInStore);
  const [positionImageBottomX] = useRecoilState(positionImageBottomXInStore);
  const [positionImageBottomY] = useRecoilState(positionImageBottomYInStore);
  const [iconPositionX] = useRecoilState(iconPositionXInStore);
  const [iconPositionY] = useRecoilState(iconPositionYInStore);
  const [datePositionX] = useRecoilState(datePositionXInStore);
  const [datePositionY] = useRecoilState(datePositionYInStore);
  const [celebratorsPositionX] = useRecoilState(celebratorsPositionXInStore);
  const [celebratorsPositionY] = useRecoilState(celebratorsPositionYInStore);
  const [celebratorsNamesColor] = useRecoilState(celebratorsNamesColorInStore);
  const [celebratorsNamesFont] = useRecoilState(celebratorsNamesFontInStore);
  const [celebratorsNamesIsBold] = useRecoilState(celebratorsNamesIsBoldInStore);
  const [celebratorsNamesIsUnderline] = useRecoilState(celebratorsNamesIsUnderlineInStore);
  const [dateColor] = useRecoilState(dateColorInStore);
  const [dateFont] = useRecoilState(dateFontInStore);
  const [dateIsBold] = useRecoilState(dateIsBoldInStore);
  const [dateIsUnderline] = useRecoilState(dateIsUnderlineInStore);
  const [noImage, setNoImage] = useRecoilState(cleanImages);

  const downloadURI = (uri, name) => {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = () => {
    const dataURL = stageRef.current.toDataURL({ pixelRatio: 4 });
    downloadURI(dataURL, 'cheers.png');
  };

  const handleResetStrip = () => {
    setNoImage(true);
  };

  const handleSaveTheme = () => {
    const themeRandomName = Math.floor(Math.random() * 10000);
    localStorage.setItem(
      'themesList',
      JSON.stringify([
        ...themesList,
        {
          name: `${celebratorsText.length ? celebratorsText : themeRandomName}`,
          SelectedIcon,
          SelectedFrame,
          stageBgColor,
          colorOrImage,
          celebratorsText,
          dateText,
          stageBgImageRef,
          iconRef,

          positionImageTopX,
          positionImageTopY,
          positionImageMiddleX,
          positionImageMiddleY,
          positionImageBottomX,
          positionImageBottomY,
          iconPositionX,
          iconPositionY,
          datePositionX,
          datePositionY,
          celebratorsPositionX,
          celebratorsPositionY,
          celebratorsNamesColor,
          celebratorsNamesFont,
          celebratorsNamesIsBold,
          celebratorsNamesIsUnderline,
          dateColor,
          dateFont,
          dateIsBold,
          dateIsUnderline,
        },
      ]),
    );

    setThemesList((state) => [
      ...state,
      {
        name: celebratorsText.length ? celebratorsText : themeRandomName,
        SelectedIcon,
        SelectedFrame,
        stageBgColor,
        colorOrImage,
        celebratorsText,
        dateText,
        stageBgImageRef,
        iconRef,

        positionImageTopX,
        positionImageTopY,
        positionImageMiddleX,
        positionImageMiddleY,
        positionImageBottomX,
        positionImageBottomY,
        iconPositionX,
        iconPositionY,
        datePositionX,
        datePositionY,
        celebratorsPositionX,
        celebratorsPositionY,
        celebratorsNamesColor,
        celebratorsNamesFont,
        celebratorsNamesIsBold,
        celebratorsNamesIsUnderline,
        dateColor,
        dateFont,
        dateIsBold,
        dateIsUnderline,
      },
    ]);
  };

  return (
    <Container>
      <DownloadContainer>
        <Button onClick={handleDownload}>הורד</Button>
      </DownloadContainer>
      <DownloadContainer>
        <Button onClick={handleSaveTheme}>שמור עיצוב</Button>
      </DownloadContainer>
      <DownloadContainer>
        <Button onClick={handleResetStrip}>נקה תמונות</Button>
      </DownloadContainer>
      <DownloadContainer>
        <Button onClick={() => {}}>שחור לבן</Button>
      </DownloadContainer>
    </Container>
  );
};

export default Download;
