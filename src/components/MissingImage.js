import { useState, useEffect } from 'react';

function MissingImage({ imageUrl, altText, placeHolderImageUrl }) {
  const [src, setSrc] = useState(imageUrl);

  useEffect(() => {
    setSrc(imageUrl); // Reset image source when `imageUrl` prop changes
  }, [imageUrl]);

  
  return (
    <img  src={src} alt={altText} onError={() => {
      console.log('Does this trigger a onError')}} />
  );
}

export default MissingImage;
