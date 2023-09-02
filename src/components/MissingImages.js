import { useState, useEffect } from 'react';

function CleanImage({ imageUrl, altText, placeHolderImageUrl }) {
  const [src, setSrc] = useState(imageUrl);
  
  useEffect(() => {
    setSrc(imageUrl); // Reset image source when `imageUrl` prop changes
  }, [imageUrl]);

  const handleError = () => {
    setSrc(placeHolderImageUrl);
  };

  return (
    <img src={src} alt={altText} onError={handleError} />
  );
}

export default CleanImage;
