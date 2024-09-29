// eslint-disable-next-line react/prop-types
const Region = ({ src, alt, transform, handleState, transformHover }) => {
  //   console.log(transformHover);
  const handleMouseEnter = (e) => {
    console.log(transformHover);
    e.currentTarget.style.transform = `${transformHover}`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = `${transform}`;
    e.currentTarget.style.zIndex = 200;
  };

  return (
    <img
      //   key={index}
      src={src}
      alt={alt}
      className="h-full absolute transition-transform duration-300"
      onClick={() => handleState(alt)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        zIndex: 100,
        transform: transform,
      }}
    />
    // <img
    //   src={src}
    //   alt={alt}
    //   className=" absolute transition-transform duration-300"
    //   onClick={() => handleState('mjeex')}
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={handleMouseLeave}
    //   style={{
    //     zIndex: 100,
    //     transform: {transform},
    //   }}
    // />
  );
};

export default Region;
