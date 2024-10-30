export const Title =({text, className})=>{
    return <h1 className={`text-xl md:text-[36px] font-bold text-center ${className}`}>
       {text || "Demo Title"}
    </h1>
}