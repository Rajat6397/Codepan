import {useState} from "react";
 import { MdEmail } from "react-icons/md";
 import { IoMdEye, IoMdEyeOff } from "react-icons/io";
//  import { IoMdEyeOff } from "react-icons/io";
 import {motion} from "framer-motion";
const UserAuthInput = ({
  label,
  placeHolder,
  isPass,
  setStateFunction,
  Icon,
  setGetEmailValidationStatus
}) => {
    const [value, setValue] = useState("");
    const [showpass, setShowPass] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);

    const handleTextChange = (e) =>{
        setValue(e.Target.value);
        setStateFunction(e.target.value);

        if(placeHolder === "Email"){
         const emailRegex = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
         const status = emailRegex.test(value);
         setIsEmailValid(status);
         setGetEmailValidationStatus(status);
        }
    };
  return (
    <div className="flex flex-col items-start justify-start gap-1">
      <label className="text-sm text-gray-300">{label}</label>
      <div
        className={`flex items-center justify-center gap-3 w-full md:w-96 
            rounded-md px-4 py-1 bg-gray-200${
             !isEmailValid &&
             placeHolder === "Email" &&
             value.length > 0 &&
             "border-2 border-red-500"
            }`}
      >
        <Icon className="text-text555  text-2xl" />
        <input
          type={isPass  & showpass ? "passsword" : "text"}
          placeholder={placeHolder}
          className="flex-1 w-full h-full py-2 outline-none border-none
           bg-trasparent text-text555 text-lg" 
           value={value}
          onChange={handleTextChange}
        />
        {isPass &&( 
        <motion.div  
        whileTap={{scale:0.9}} 
        className="cursor-pointer">
        {/* <IoMdEye className="text-text555 text-2xl" /> */}
        {showpass ? (
            <IoMdEye className="text-text555 text-2xl"/>
        ):
        (
            <IoMdEyeOff className="text-text555 text-2xl"/>
        )
        }
        </motion.div>
        )}
      </div>
    </div>
  );
};
export default UserAuthInput;
