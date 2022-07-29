import React, { useState } from 'react';
import Konva from 'konva';

// Components
import { Image, Transformer, Circle, Star, Shape, Path } from 'react-konva';

const TransformableImage = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  imageWidth,
  imageHeight,
  image,
  onMouseDown,
  onTouchStart,
  initPosX,
  initPosY,
  noImage,
  shape,
}) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();
  // const [noImage, setNoImage] = useRecoilState(cleanImages);

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
      // trRef?.current?.attr = {...};
    }
    if (image) {
      // shapeRef?.current?.attr = {...shapeRef?.current?.attr , border:"5"};
      // you many need to reapply cache on some props changes like shadow, stroke, etc.
      shapeRef?.current?.cache();
    } else {
      shapeRef?.current?.cache();
    }
  }, [isSelected, image]);

  return shape === 'square' ? (
    <>
      <Image
        shadowBlur={5}
        // opacity={noImage ? 0 : 1}
        width={237}
        height={237}
        image={image}
        x={initPosX}
        y={initPosY}
        strokeWidth={1} // border width
        stroke='black' // border color
        onClick={onSelect}
        onTap={onSelect}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        ref={shapeRef}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={() => {
          if (shapeRef.current) {
            const node = shapeRef.current;
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
            });
          }
        }}
      />

      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  ) : shape === 'circle' ? (
    <>
      <Circle
        x={initPosX + 120}
        y={initPosY + 100}
        radius={50}
        fillPatternImage={image}
        fillPatternScaleY={600 / 480}
        fillPatternScaleX={600 / 600}
        fillPatternOffsetX={120}
        fillPatternOffsetY={90}
        fillPatternRepeat='no-repeat'
        width={237 / 1.05}
        height={237 / 1.05}
        strokeWidth={1} // border width
        stroke='black' // border color
        onClick={onSelect}
        onTap={onSelect}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={() => {
          if (shapeRef.current) {
            const node = shapeRef.current;
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
            });
          }
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  ) : shape === 'star' ? (
    <>
      <Star
        x={initPosX + 120}
        y={initPosY + 100}
        numPoints={5}
        innerRadius={70}
        outerRadius={125}
        fillPatternImage={image}
        fillPatternScaleY={600 / 480}
        fillPatternScaleX={600 / 600}
        fillPatternOffsetX={120}
        fillPatternOffsetY={90}
        fillPatternRepeat='no-repeat'
        
        width={237 / 1.05}
        height={237 / 1.05}
        strokeWidth={1} // border width
        stroke='black' // border color
        onClick={onSelect}
        onTap={onSelect}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={() => {
          if (shapeRef.current) {
            const node = shapeRef.current;
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
            });
          }
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  ) : shape === 'heart' ? (
    <>
      <Path
        x={initPosX}
        y={initPosY}
        data={'M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z'}
        fillPatternImage={image}
        fillPatternScaleY={600 / 350}
        // width={237 / 1.2}
        // height={237 / 1.05}
        scale={{
          x: 0.7,
          y: 0.7,
        }}
        strokeWidth={1} // border width
        stroke='black' // border color
        onClick={onSelect}
        onTap={onSelect}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={() => {
          if (shapeRef.current) {
            const node = shapeRef.current;
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
            });
          }
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  ) : (
    <></>
  );
};

class FilterRect extends React.Component {
  state = {
    color: 'green',
  };
  componentDidMount() {
    this.applyCache();
  }
  handleClick = () => {
    this.setState(
      {
        color: Konva.Util.getRandomColor(),
      },
      () => {
        // recache shape when we updated it
        this.applyCache();
      },
    );
  };
  applyCache() {
    this.rect.cache();
  }

  render() {
    return (
      <Rect
        filters={[Konva.Filters.Noise]}
        noise={1}
        x={200}
        y={10}
        width={50}
        height={50}
        fill={this.state.color}
        shadowBlur={10}
        ref={(node) => {
          this.rect = node;
        }}
        onClick={this.handleClick}
      />
    );
  }
}

export default TransformableImage;
