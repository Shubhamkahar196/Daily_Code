// export const Button = ({ disabled,children,onClick }) => {


//   return   <div 
//      onClick={onClick} className={`rounded-xl text-4xl px-32 py-8 text-white cursor-pointer ${disabled ? "bg-blue-200" : "bg-green-400"}`}
//     >
//         {children}
//     </div>
    
  
// };


export const Button = ({
     disabled,
     onClick,
     children,
     
}) =>{
    return <span onClick={onClick} className={`rounded-xl text-xl px-8 py-4 text-white cursor-pointer ${disabled ? "bg-blue-200" : "bg-green-400"}`}>
     {children}


    </span>
}