export const Input = ({
      onClick,
     placeholder,
     type
}) =>{
    return <span onClick={onClick} className={`rounded-2xl p-8 text-4xl px-32 py-8 text-white cursor-pointer bg-blue-200  `}>
    

     <input type={type} placeholder={placeholder} className="bg-blue-500 outline-none"></input>
    </span>
}