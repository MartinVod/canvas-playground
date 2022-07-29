import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useRecoilState } from 'recoil';
import {
  themesList as themesListInStore,
  selectedTheme as selectedThemeInStore,
  selectedIcon,
  iconPositionX,
  iconPositionY,
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
} from './recoil/themes';

function ThemeItem({ name }) {
  const [themesList, setThemesList] = useRecoilState(themesListInStore);
  const [selectedTheme, setSelectedTheme] = useRecoilState(selectedThemeInStore);

  const [SelectedIcon, setSelectedIcon] = useRecoilState(selectedIcon);
  const [SelectedFrame, setSelectedFrame] = useRecoilState(frameBgImage);
  const [stageBgColor, setStageBgColor] = useRecoilState(frameBgColor);
  const [colorOrImage, setColorOrImage] = useRecoilState(bgType);
  const [celebratorsText, setCelebratorsText] = useRecoilState(celebratorsNames);
  const [dateText, setDateText] = useRecoilState(date);

  const [stageBgImageRef, setStageBgImageRef] = useRecoilState(stageBgImageRefInStore);
  const [iconRef, setIconRef] = useRecoilState(selectedIconRef);

  const [positionImageTopX, setpositionImageTopX] = useRecoilState(positionImageTopXInStore);
  const [positionImageTopY, setpositionImageTopY] = useRecoilState(positionImageTopYInStore);
  const [positionImageMiddleX, setpositionImageMiddleX] = useRecoilState(
    positionImageMiddleXInStore,
  );
  const [positionImageMiddleY, setpositionImageMiddleY] = useRecoilState(
    positionImageMiddleYInStore,
  );
  const [positionImageBottomX, setpositionImageBottomX] = useRecoilState(
    positionImageBottomXInStore,
  );
  const [positionImageBottomY, setpositionImageBottomY] = useRecoilState(
    positionImageBottomYInStore,
  );
  const [iconPositionX, seticonPositionX] = useRecoilState(iconPositionXInStore);
  const [iconPositionY, seticonPositionY] = useRecoilState(iconPositionYInStore);
  const [datePositionX, setdatePositionX] = useRecoilState(datePositionXInStore);
  const [datePositionY, setdatePositionY] = useRecoilState(datePositionYInStore);
  const [celebratorsPositionX, setcelebratorsPositionX] = useRecoilState(
    celebratorsPositionXInStore,
  );
  const [celebratorsPositionY, setcelebratorsPositionY] = useRecoilState(
    celebratorsPositionYInStore,
  );
  const [celebratorsNamesColor, setcelebratorsNamesColor] = useRecoilState(
    celebratorsNamesColorInStore,
  );
  const [celebratorsNamesFont, setcelebratorsNamesFont] = useRecoilState(
    celebratorsNamesFontInStore,
  );
  const [celebratorsNamesIsBold, setcelebratorsNamesIsBold] = useRecoilState(
    celebratorsNamesIsBoldInStore,
  );
  const [celebratorsNamesIsUnderline, setcelebratorsNamesIsUnderline] = useRecoilState(
    celebratorsNamesIsUnderlineInStore,
  );
  const [dateColor, setdateColor] = useRecoilState(dateColorInStore);
  const [dateFont, setdateFont] = useRecoilState(dateFontInStore);
  const [dateIsBold, setdateIsBold] = useRecoilState(dateIsBoldInStore);
  const [dateIsUnderline, setdateIsUnderline] = useRecoilState(dateIsUnderlineInStore);

  useEffect(() => {
    console.log('selectedTheme?.iconRef', selectedTheme?.iconRef);
    console.log('selectedTheme?.stageBgImageRef', selectedTheme?.stageBgImageRef);
    if (selectedTheme) {
      if (selectedTheme?.iconRef) {
        let newImg = document.createElement('img');
        newImg.crossOrigin = 'AnonymousIcon';
        newImg.height = 90;
        newImg.width = 90;
        newImg.src = selectedTheme?.iconRef;
        setSelectedIcon(newImg);
      }

      if (selectedTheme?.stageBgImageRef) {
        let chosenFrame = new Image();
        chosenFrame.height = 900;
        chosenFrame.width = 300;
        chosenFrame.src = selectedTheme?.stageBgImageRef;

        setSelectedFrame(chosenFrame);
      }

      setStageBgColor(selectedTheme?.stageBgColor);
      setColorOrImage(selectedTheme?.colorOrImage);
      setCelebratorsText(selectedTheme?.celebratorsText);
      setDateText(selectedTheme?.dateText);
      // ========================
      setpositionImageTopX(selectedTheme.positionImageTopX);
      setpositionImageTopY(selectedTheme.positionImageTopY);
      setpositionImageMiddleX(selectedTheme.positionImageMiddleX);
      setpositionImageMiddleY(selectedTheme.positionImageMiddleY);
      setpositionImageBottomX(selectedTheme.positionImageBottomX);
      setpositionImageBottomY(selectedTheme.positionImageBottomY);
      seticonPositionX(selectedTheme.iconPositionX);
      seticonPositionY(selectedTheme.iconPositionY);
      setdatePositionX(selectedTheme.datePositionX);
      setdatePositionY(selectedTheme.datePositionY);
      setcelebratorsPositionX(selectedTheme.celebratorsPositionX);
      setcelebratorsPositionY(selectedTheme.celebratorsPositionY);
      setcelebratorsNamesColor(selectedTheme.celebratorsNamesColor);
      setcelebratorsNamesFont(selectedTheme.celebratorsNamesFont);
      setcelebratorsNamesIsBold(selectedTheme.celebratorsNamesIsBold);
      setcelebratorsNamesIsUnderline(selectedTheme.celebratorsNamesIsUnderline);
      setdateColor(selectedTheme.dateColor);
      setdateFont(selectedTheme.dateFont);
      setdateIsBold(selectedTheme.dateIsBold);
      setdateIsUnderline(selectedTheme.dateIsUnderline);
    }
  }, [selectedTheme]); //eslint-disable-line

  const handleSelectTheme = () => {
    if (name === selectedTheme) {
      setSelectedTheme(null);
    } else {
      setSelectedTheme(themesList.find((theme) => theme.name === name));
    }
  };

  const handleDeleteTheme = () => {
    let newThemeList = themesList.filter((theme) => theme.name !== name);
    setThemesList(newThemeList);
    newThemeList = JSON.stringify(newThemeList);
    localStorage.setItem('themesList', newThemeList);
  };

  return (
    <div
      style={{
        marginTop: '2px',
        marginBottom: '2px',
        backgroundColor: name === selectedTheme?.name ? 'lightgrey' : 'transparent',
        width: '100%',
        color: 'whitesmoke',
        padding: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '0 10px',
      }}
    >
      <div onClick={handleDeleteTheme}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
      <div onClick={handleSelectTheme}>{name}</div>
    </div>
  );
}

export default ThemeItem;
