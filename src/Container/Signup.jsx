// import React from "react";
import {useState} from "react";
import {UserAuthInput} from "../Component";
import { MdEmail } from "react-icons/md";
import {FcGoogle} from "react-icons/fc"
import { FaGithub } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import {motion} from "framer-motion";
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [getEmailValidationStatus, setGetEmailValidationStatus] = 
    useState(false);
    const [isLogin, setisLogin] = useState(false)
  return (
    <div className="w-full py-6">
      <img
        src={
          "https://code-pen-sepia.vercel.app/assets/codepenlogo-Cz-WsP-X.webp"
        }
        className="object-cotain w-32 opacity-50 h-auto" alt=""
      />
      <div className="w-full flex flex-col items-center  justify-center py-8">
        <p className="py-12 text-2xl text-primaryText">Join with Us! 😊</p>
        <div className="px-8 w-full md:w-auto py-4 rounded-xl bg-secondary 
        shadow-md flex flex-col items-center justify-center gap-8">

            {/* email */}
            <UserAuthInput 
            label="Email" 
            placeHolder="Email" 
            isPass={false} 
            key="Email" 
            setStatefunction={setEmail} 
            Icon={MdEmail}/>
            setGetEmailValidationStatus={setGetEmailValidationStatus}
            {/* password */}
            <UserAuthInput 
            label="Password" 
            placeHolder="Password" 
            key="Password"  
            isPass={true} 
            setStatefunction={setPassword} 
            Icon={IoMdEye}
            />
            {/* alert section */}
            {/* login button */}
             <motion.div
                whileTap = {{scale: 0.9}}
                className="flex items-center justify-center w-full py-3
                rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500">
                    <p className="text-xl text-white">Sign Up</p>
             </motion.div>
             {!isLogin ? (
             <p className="text-sm text-primaryText flex items-center justify-center gap-3">Already have an account? 
                <span
                onClick={() => setisLogin(!isLogin)}
                className="text-emerald-500 cursor-pointer">Login here</span></p>
             ):(
                <p className="text-sm text-primaryText flex items-center justify-center gap-3">Doesn't have an account !{" "}
                <span 
                onClick={() => setisLogin(!isLogin)}
                className="text-emerald-500 cursor-pointer">Create here</span></p>
             )}
            {/* account text section */}
            {/* or section */}
            <div className="flex items-center justify-center gap-12">
                <div className="h-[1px] bg-[rgba(256, 256, 256, 0.2)] rounded-md w-24"></div>
                <p className="text-sm text-[rgba(256, 256, 256, 0.2)">OR</p>
                <div className="h-[1px] bg-[rgba(256, 256, 256, 0.2)] rounded-md w-24"></div>
            </div>
            {/* sign in with google */}
            <motion.div  className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl
            hover:bg-[rgba(256, 256, 256, 0.4)] cursor-pointer"
            whileTap={{scale:0.9}}>
             <FcGoogle className="text-3xl"/>
             <p className="text-xl text-white">Sign in with Google</p>
            </motion.div>
            {/* or section */}
            <div className="flex items-center justify-center gap-12">
                <div className="h-[1px] bg-[rgba(256, 256, 256, 0.2)] rounded-md w-24"></div>
                <p className="text-sm text-[rgba(256, 256, 256, 0.2)">OR</p>
                <div className="h-[1px] bg-[rgba(256, 256, 256, 0.2)] rounded-md w-24"></div>
            </div>
            {/* sign in with github */}
            <motion.div  className="flex items-center justify-center gap-3 bg-[rgba(256,
            256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl
            hover:bg-[rgba(256, 256, 256, 0.4)] cursor-pointer"
            whileTap={{scale:0.9}}>
             <FaGithub className="text-3xl text-white"/>
             <p className="text-xl text-white">Sign in with Github</p>
            </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
