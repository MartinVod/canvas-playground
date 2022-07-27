import React from 'react';
import Konva from 'konva';

// Components
import { Image, Transformer } from 'react-konva';

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
}) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    console.log('Konva', Konva.Image);
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
      // trRef?.current?.attr = {...};
    }
    if (image) {
      console.log('shapeRef', shapeRef);
      // shapeRef?.current?.attr = {...shapeRef?.current?.attr , border:"5"};
      // you many need to reapply cache on some props changes like shadow, stroke, etc.
      shapeRef?.current?.cache();
    }
  }, [isSelected, image]);

  return (
    <>
      <Image
        width={237}
        height={237}
        image={image}
        x={50}
        y={240}
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
