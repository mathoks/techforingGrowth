export const SubTitle =({text, className})=>{
    return <b className={`text-xs md:text-xl text-center font-bold ${className}`}>
       {text || "Demo Sub Title"}
    </b>
}