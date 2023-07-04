import React, { useContext } from 'react'
import SingContent from './SingContent';
import { Context } from '../context'
const SinglPage = () => {  
  const  sings = useContext(Context);
  console.log(sings)
  return (
    <div className="device device-iphone-x">
      <div className="device-frame">
        <div className="device-content">
          <SingContent sings = {sings} />
        </div>
      </div>
      <div className="device-stripe"></div>
      <div className="device-header">
        <div className="device-sensors"></div>
      </div>
      <div className="device-btns"></div>
      <div className="device-power"></div>
    </div>
  )
}

export default SinglPage