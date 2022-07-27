import React, { useState } from 'react';

/// Components
import { Stage, Layer, Image, Group } from 'react-konva';
import TransformableText from './TransformableText';
import TransformableImage from './TransformableImage';
import TransformableIcon from './TransformableIcon';

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
  isUnderline,
  isBold,
}) => {
  console.log('imageTop,imageMiddle , imageBottom', imageTop, imageMiddle, imageBottom);

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

  const imagePositionX = 20;
  const imagePositionY = 38;
  // const imageMiddlePositionX = 20;
  // const imageMiddlePositionY = 200;
  // const imageBottomPositionX = 38.5;
  // const imageBottomPositionY = 400;

  const iconPositionX = 38;
  const iconPositionY = 70;

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

  return (
    <Stage ref={stageRef} width={300} height={1000} x={0} y={0} style={{}}>
      <Layer style={{ height: '100%', width: '100%' }}>
        {/* <Group
          clipX={imagePositionX / 5}
          clipY={imagePositionY / 5}
          clipWidth={1000}
          clipHeight={groupHeight * 0.95}
        > */}

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
            const imgs = tranImgMiddle.slice();
            imgs[0] = newAttrs;
            setTranImgMiddle(imgs);
          }}
        />

        {/* <TransformableImage
          icon={imageTop}
          iconWidth={imageRenderWidth}
          imageHeight={imageRenderHeight}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          isSelected={renderImgTop[0].id === selectedId1}
          onSelect={() => {
            selectShape1(renderImgTop[0].id);
          }}
          onChange={(newAttrs) => {
            const imgs = tranImgTop.slice();
            imgs[0] = newAttrs;
            setTranImgTop(imgs);
          }}
        /> */}

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
            const imgs = tranImgTop.slice();
            imgs[0] = newAttrs;
            setTranImgTop(imgs);
          }}
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
            const imgs = tranImgBottom.slice();
            imgs[0] = newAttrs;
            setTranImgBottom(imgs);
          }}
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
            const imgs = tranIcon.slice();
            imgs[0] = newAttrs;
            setTranIcon(imgs);
          }}
        />
        {checked && (
          <TransformableText
            // eslint-disable-next-line react/no-array-index-key
            isUnderline={isUnderline}
            isBold={isBold}
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
              const rects = rectangles.slice();
              rects[0] = newAttrs;
              setRectangles(rects);
            }}
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
              const rects = rectangles.slice();
              rects[1] = newAttrs;
              setRectangles(rects);
            }}
            isBold={isBold}
            isUnderline={isUnderline}
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
