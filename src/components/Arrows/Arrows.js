const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img 
        src="/Home/arrow-right.webp"
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
        alt="Next"
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img 
        src="/Home/arrow-left.webp"
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
        alt="Previous"
      />
    );
  };
  
  export{NextArrow, PrevArrow}