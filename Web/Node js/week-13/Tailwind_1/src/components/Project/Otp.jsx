import React, {useRef,useState} from 'react'
import { Button } from './Button';


export function Otp(){
   
     const ref1 = useRef(); 
     const ref2 = useRef(); 
     const ref3 = useRef(); 
     const ref4 = useRef(); 
     const ref5 = useRef(); 
     const ref6 = useRef();
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="flex justify-center">
      <SubOtpBox reference={ref1} onDone={() => ref2.current.focus()} />
      <SubOtpBox
        reference={ref2}
        onDone={() => ref3.current.focus()}
        onBack={() => ref1.current.focus()}
      />
      <SubOtpBox
        reference={ref3}
        onDone={() => ref4.current.focus()}
        onBack={() => ref2.current.focus()}
      />
      <SubOtpBox
        reference={ref4}
        onDone={() => ref5.current.focus()}
        onBack={() => ref3.current.focus()}
      />
      <SubOtpBox
        reference={ref5}
        onDone={() => ref6.current.focus()}
        onBack={() => ref4.current.focus()}
      />
      <SubOtpBox
        reference={ref6}
        onDone={() => setDisabled(false)}
        onBack={() => ref5.current.focus()}
      />
      <br />
      <br />
      <Button disabled={disabled}>Signup</Button>
    </div>
  );
}




function SubOtpBox({ reference, onDone, onBack }) {
  const [inputBoxValue, setInputBoxValue] = useState('');



const handleChange = (e) => {
  const val = e.target.value;
  if (val === '') {
    setInputBoxValue('');
    onBack();
  } else if (/^\d$/.test(val)) {
    setInputBoxValue(val);
    onDone();
  } else {
    setInputBoxValue('');
  }
};



  return (
    <div>
      <input
        value={inputBoxValue}
        ref={reference}
        onChange={handleChange}
        type="text"
        maxLength={1}
        className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white"
      />
    </div>
  );
}
