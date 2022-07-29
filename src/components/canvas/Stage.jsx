import React, { useState } from 'react';

/// Components
import { Stage, Layer, Image, Group, Rect } from 'react-konva';
import { useRecoilState } from 'recoil';

import TransformableText from './TransformableText';
import TransformableImage from './TransformableImage';
import TransformableIcon from './TransformableIcon';

import {
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
  cleanImages,
} from '../recoil/themes';

const CanvasStage = ({
  stageRef,
  userName,
  guildName,
  // frameImg,
  imageTop,
  imageMiddle,
  imageBottom,
  checked,
  checkedGuild,
  bgColor,
  bgColorGuild,
  fontFamily,
  fontColor,
  fontColorGuild,
  fontFamilyGuild,
  alignment,
  width,
  height,
  SelectedIcon,
  dateTextIsBold,
  dateTextIsUnderline,
  celebratorTextIsBold,
  celebratorTextIsUnderline,
  stageBgColor,
  selectedFrame,
  colorOrImage,
}) => {
  const groupDimensions = {
    height: 1000,
    width: 300,
  };
  const groupHeight = groupDimensions.height;
  const aspectRatio = width / height;
  const imageRenderWidth = (aspectRatio * groupDimensions.height) / 4;
  const imageRenderHeight = groupDimensions.height / 4;
  const iconRenderWidth = 50;
  const iconRenderHeight = 50;

  // const imagePositionX = 30;
  // const imagePositionY = 35;
  // const imageMiddlePositionX = 30;
  // const imageMiddlePositionY = 35 + 250;
  // const imageBottomPositionX = 30;
  // const imageBottomPositionY = 35 + 500;
  // const iconPositionX = 100;
  // const iconPositionY = 35 + 800;

  const [imagePositionX, setimagePositionX] = useRecoilState(positionImageTopXInStore);
  const [imagePositionY, setimagePositionY] = useRecoilState(positionImageTopYInStore);
  const [imageMiddlePositionX, setmageMiddlePositionX] = useRecoilState(
    positionImageMiddleXInStore,
  );
  const [imageMiddlePositionY, setmageMiddlePositionY] = useRecoilState(
    positionImageMiddleYInStore,
  );
  const [imageBottomPositionX, setmageBottomPositionX] = useRecoilState(
    positionImageBottomXInStore,
  );
  const [imageBottomPositionY, setmageBottomPositionY] = useRecoilState(
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

  const [noImage, setNoImage] = useRecoilState(cleanImages);

  const rect = [
    {
      x: 50,
      y: 50,
      id: 'rect1',
    },
    {
      x: 100,
      y: 100,
      id: 'rect2',
    },
  ];

  const renderImgTop = [
    {
      x: imagePositionX,
      y: imagePositionY,
      id: 'renderImgTop',
    },
  ];
  const renderImgMiddle = [
    {
      x: imagePositionX,
      y: imagePositionY,
      id: 'renderImgMiddle',
    },
  ];
  const renderImgBottom = [
    {
      x: imagePositionX,
      y: imagePositionY,
      id: 'renderImgBottom',
    },
  ];
  const renderIcon = [
    {
      x: iconPositionX,
      y: iconPositionY,
      id: 'renderIcon',
    },
  ];
  // const renderImgMiddle = [

  // ];
  // const renderImgBottom = [

  // ];

  const [tranImgTop, setTranImgTop] = useState(renderImgTop);
  const [tranImgMiddle, setTranImgMiddle] = useState(renderImgMiddle);
  const [tranImgBottom, setTranImgBottom] = useState(renderImgBottom);
  const [tranIcon, setTranIcon] = useState(renderIcon);
  // const [tranImgMiddle, setTranImgMiddle] = useState(renderImgMiddle);
  // const [tranImgBottom, setTranImgBottom] = useState(renderImgBottom);
  const [selectedId1, selectShape1] = useState(null);
  const [rectangles, setRectangles] = useState(rect);
  const [selectedId, selectShape] = useState(null);

  const checkDeselect = () => {
    selectShape1(null);
    selectShape(null);
  };

  React.useEffect(() => {
    if (stageRef) {
      stageRef?.current?.cache();
    }
  }, [stageRef]);

  return (
    <Stage ref={stageRef} width={300} height={900} x={0} y={0}>
      <Layer>
        <Rect
          x={0}
          y={0}
          width={300}
          height={900}
          // fill={stageBgColor}
          {...(!!colorOrImage && { fillPatternImage: selectedFrame })}
          {...(!colorOrImage && { fill: stageBgColor })}
        />
        {/* <Group
          clipX={imagePositionX / 5}
          clipY={imagePositionY / 5}
          clipWidth={1000}
          clipHeight={groupHeight * 0.95}
        > */}

        {
          <TransformableImage
            image={imageTop}
            imageWidth={imageRenderWidth}
            imageHeight={imageRenderHeight}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
            isSelected={renderImgTop[0].id === selectedId1}
            onSelect={() => {
              selectShape1(renderImgTop[0].id);
            }}
            onChange={(newAttrs) => {
              setimagePositionX(newAttrs.x);
              setimagePositionY(newAttrs.y);
              const imgs = tranImgTop.slice();
              imgs[0] = newAttrs;
              setTranImgTop(imgs);
            }}
            initPosX={imagePositionX}
            initPosY={imagePositionY}
            noImage={noImage}
            // setInitPosX={setimagePositionX}
            // setInitPosY={setimagePositionY}
          />
        }

        <TransformableImage
          image={imageMiddle}
          imageWidth={imageRenderWidth}
          imageHeight={imageRenderHeight}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          isSelected={renderImgMiddle[0].id === selectedId1}
          onSelect={() => {
            selectShape1(renderImgMiddle[0].id);
          }}
          onChange={(newAttrs) => {
            setmageMiddlePositionX(newAttrs.x);
            setmageMiddlePositionY(newAttrs.y);
            const imgs = tranImgMiddle.slice();
            imgs[0] = newAttrs;
            setTranImgMiddle(imgs);
          }}
          initPosX={imageMiddlePositionX}
          initPosY={imageMiddlePositionY}
          noImage={noImage}

          // setInitPosX={setmageMiddlePositionX}
          // setInitPosY={setmageMiddlePositionY}
        />

        <TransformableImage
          image={imageBottom}
          imageWidth={imageRenderWidth}
          imageHeight={imageRenderHeight}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          isSelected={renderImgBottom[0].id === selectedId1}
          onSelect={() => {
            selectShape1(renderImgBottom[0].id);
          }}
          onChange={(newAttrs) => {
            setmageBottomPositionX(newAttrs.x);
            setmageBottomPositionY(newAttrs.y);
            const imgs = tranImgBottom.slice();
            imgs[0] = newAttrs;
            setTranImgBottom(imgs);
          }}
          initPosX={imageBottomPositionX}
          initPosY={imageBottomPositionY}
          noImage={noImage}

          // setInitPosX={setmageBottomPositionX}
          // setInitPosY={setmageBottomPositionY}
        />
        <TransformableIcon
          image={SelectedIcon}
          imageWidth={iconRenderWidth}
          imageHeight={iconRenderHeight}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          isSelected={renderIcon[0].id === selectedId1}
          onSelect={() => {
            selectShape1(renderIcon[0].id);
          }}
          onChange={(newAttrs) => {
            seticonPositionX(newAttrs.x);
            seticonPositionY(newAttrs.y);
            const imgs = tranIcon.slice();
            imgs[0] = newAttrs;
            setTranIcon(imgs);
          }}
          initPosX={iconPositionX}
          initPosY={iconPositionY}
          // setInitPosX={seticonPositionX}
          // setInitPosY={seticonPositionY}
        />
        {checked && (
          <TransformableText
            // eslint-disable-next-line react/no-array-index-key

            name={userName}
            colour={bgColor}
            fontFamily={fontFamily}
            alignment={alignment}
            fontColor={fontColor}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
            fontStyle='bold'
            fontSize={22}
            shapeProps={rect[0]}
            isSelected={rect[0].id === selectedId}
            onSelect={() => {
              selectShape(rect[0].id);
            }}
            onChange={(newAttrs) => {
              setcelebratorsPositionX(newAttrs.x);
              setcelebratorsPositionY(newAttrs.y);
              const rects = rectangles.slice();
              rects[0] = newAttrs;
              setRectangles(rects);
            }}
            isUnderline={celebratorTextIsUnderline}
            isBold={celebratorTextIsBold}
            initPosX={celebratorsPositionX}
            initPosY={celebratorsPositionY}
          />
        )}
        {checkedGuild && (
          <TransformableText
            // eslint-disable-next-line react/no-array-index-key
            name={guildName}
            colour={bgColorGuild}
            fontFamily={fontFamilyGuild}
            alignment={alignment}
            fontColor={fontColorGuild}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
            fontStyle='normal'
            fontSize={22}
            shapeProps={rect[1]}
            isSelected={rect[1].id === selectedId}
            onSelect={() => {
              selectShape(rect[1].id);
            }}
            onChange={(newAttrs) => {
              setdatePositionX(newAttrs.x);
              setdatePositionY(newAttrs.y);
              const rects = rectangles.slice();
              rects[1] = newAttrs;
              setRectangles(rects);
            }}
            isBold={dateTextIsBold}
            isUnderline={dateTextIsUnderline}
            initPosX={datePositionX}
            initPosY={datePositionY}
          />
        )}
        {/* </Group> */}

        {/* <Image
          image={frameImg}
          width={350}
          height={350}
          style={{ zIndex: '100', position: 'absolute' }}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          listening={false}
        /> */}
      </Layer>
    </Stage>
  );
};

export default CanvasStage;
