import './ReactBlurImageLoader.scss';

const ReactBlurImageLoader = ({ largeImg, placeHolderImg, className, altText }) => {
  window.onload = () => {
    const largePicture = document.querySelector('.image-container');
    const imgLarge = new Image();
    imgLarge.src = largePicture.dataset.large;
    imgLarge.onload = () => {
      imgLarge.classList.add('loaded');
    };
    imgLarge.classList.add('picture');
    largePicture.appendChild(imgLarge);
  };

  return (
    <div className={className}>
      <div className="image-container" data-large={largeImg}>
        <img className="placeholder" src={placeHolderImg} alt={altText} />
      </div>
    </div>
  );
};

export default ReactBlurImageLoader;
