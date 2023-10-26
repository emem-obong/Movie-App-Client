import React from 'react'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Showeye = ({eyeState, updateEye}) => {
  return  eyeState ? (
    <AiFillEye
      className="position-absolute end-0 top-50 fs-5 eye"
      onClick={() => {
        updateEye(false);
      }}
    />
  ) : (
    <AiFillEyeInvisible
      className="position-absolute end-0 top-50 fs-5 eye"
      onClick={() => {
        updateEye(true);
      }}
    />
  )
  
  
}

export default Showeye