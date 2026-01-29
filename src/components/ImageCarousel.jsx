import React from 'react'

function useImageCarousel(initialIndex = 0, imagesArray = []) {
  const [index, setIndex] = React.useState(initialIndex);
  const next = () => setIndex((i) => (i + 1) % imagesArray.length);
  const prev = () => setIndex((i) => (i - 1 + imagesArray.length) % imagesArray.length);
  return { index, next, prev };
}

export default function ImageCarousel({ images = [], captions = [], initialIndex = 0, width }) {
  const { index, next, prev } = useImageCarousel(initialIndex, images);
  const imgClass = 'project-image clickable-image';

  let wrapperStyle = {};
  if (width !== undefined && width !== null) {
    const w = typeof width === 'number' ? `${width}%` : String(width);
    wrapperStyle = { width: w, flex: '0 0 auto', minWidth: 0, boxSizing: 'border-box', margin: '0 auto', overflow: 'hidden' };
  }

  const caption = (captions && captions[index]) || '';

  return (
    <div className="image-wrapper" style={wrapperStyle}>
      <img
        src={images[index]}
        alt={`Image ${index + 1}`}
        className={imgClass}
        onClick={next}
      />
      <div className="image-caption">
        <p>
          {typeof caption === 'string' ? (
            <span dangerouslySetInnerHTML={{ __html: caption }} />
          ) : (
            caption
          )}
          {' '}
          ({index + 1} / {images.length})
        </p>
      </div>
      <div className="image-navigation">
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}
