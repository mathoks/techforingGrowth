import "./All_buttons.css";

 const Banner_btn = ({ text, OpenScheduleDemo, className }) => {
   return (
     <button className={`banner_btns ${className}`} onClick={() => OpenScheduleDemo(true)}>
      { text }
     </button>
   )
}

export { Banner_btn };