import React from "react";

type iProps = {
  children?: React.ReactNode
}

const Heading:React.FC<iProps> = ({children}) => {
  return (
    <div className="w-full flex flex-col content-between text-[#C8C093] text-4xl md:text-6xl items-center">
      {children}
      <div className="w-full m-3 rounded-lg h-[0.2vh] bg-[#C8C093]" />
    </div>
  )
}

export default Heading;
