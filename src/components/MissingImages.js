import { useState, useEffect } from 'react';

function MissingImage({ imageUrl, altText, placeHolderImageUrl }) {
  const [src, setSrc] = useState(imageUrl);
  
  const handleError = () => {
    setSrc(placeHolderImageUrl);
  };

  useEffect(() => {
    setSrc(imageUrl); // Reset image source when `imageUrl` prop changes
  }, [imageUrl]);

  
  return (
    <img src={src} alt={altText} onError={handleError} />
  );
}

export default MissingImage;
