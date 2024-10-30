const TermsPolicyTextCard = ({ title, paragraph1, paragraph2, lists,lists2 }) => {
   
    // const divideWidth = `{title.length}%`
    return (
       
        <div>
            <h3 className="roboto text-[24px] font-medium text-[#333] mt-5">{title}</h3>
            <div className="greenDivider md:w-[60%] lg:w-[40%] w-[70%] mt-1"></div>
            {/* <div className={`greenDivider  w-[${dividerWidth}] mt-1`}></div> */}
            <p className="roboto text-[16px] leading-6 text-light-gray pe-3 mt-3">{paragraph1}</p>

            {lists && lists.length > 0 && (
                <ul className="list-disc text-light-gray ms-[50px] mt-2">
                    {lists.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
           
          {
            paragraph2 && <p className="roboto text-[16px] leading-6 text-light-gray pe-3 mt-3">{paragraph2}</p>
          }
           {lists2 && lists2.length > 0 && (
                <ul className="list-disc text-light-gray ms-[50px] mt-2">
                    {lists.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TermsPolicyTextCard;


