import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import classes from "./CaverPage.module.css"
// import { Context } from '../context'
// import Player from '../Player/Player';
import Modal from '../UI/Modal/Modal';
import About from '../UI/About';
import PlayButton from '../UI/Modal/PlayButton';
import CaverContent from './CaverContent';
// import useFetch from '../HOOKS/useFetch';
import Loader from '../Loader/Loader';
import Papa from "papaparse";
import Player from '../Player/Player';
export const CaverPage = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({});
  const [loading_songs, setLoading_songs] = useState(false);
  const location = useLocation();
  const urlParse22 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTVCa0hKERg4eUM2_RC-q5QU2Vpa_tJpr5d_WHU0VC6AJwG2NYIFuvzWmpIP2y6qyO7tyRfJ-kdObF9/pub?output=csv";
  // const urlParse21 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSJpAqJmngxzKzdpaHbqA9kxuJkx0eljTICVi0qJ6Qk6-1YcpFBitfQOV2C2qHZ9uZF04zeNLYUSXov/pub?output=csv"
  // const urlParse22 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTqMSBKbaIPUyfikTyHNpByUzLbxWxChMy96gx1a7WKMXFGNydi2ZTgotnDwgbhLjGkXuTlhGGgsKZ8/pub?output=csv";
  // ДДТ-2022 НОРМ
  const urlParse21= "https://docs.google.com/spreadsheets/d/e/2PACX-1vSpPQhfjT4O_x-GEXItq61IRLur3F1qXAvP0i-ERlrIPB8Oz-FIrYle1aXZtUdmbK-kycI651UbJTAP/pub?output=csv";
  const urlParse23 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSxrG1RYqLc-Zo0_M_V5YQraaG_oO_RccbgfeYg0OOX3yHbjfmB4c9kvNOurWeCk99FKKr6iLn6b7S3/pub?output=csv"
  const urlLoc = location.pathname;
  
  const currUrl = urlLoc.includes('cavers21') ? urlParse21 : urlLoc.includes('cavers22') ? urlParse22 : urlLoc.includes('cavers23') ? urlParse23 : "";
  // const { all_songs, loading_songs, error } = useFetch(currUrl)
  // console.log (all_songs, loading_songs)
  useEffect(() => {
    setLoading_songs(true);
    Papa.parse(currUrl,
      {
        download: true,
        header: true,
        complete: (results) => {
          setLoading_songs(false);
          setData(results.data)
          
        },
        skipEmptyLines: true,
        error: (error) => {
          console.error(error);
          // setSongError(true)
          setLoading_songs(false);
        }
      })
  }, [currUrl])
  // console.log(data)
  const all_songs = Array.from(data);
 
  // const { setSings } = useContext(Context);
//   const all_songs = useSelector(
//     ({ songs_reducer: { all_songs } }) => all_songs
// );
// const loading_songs
//     = useSelector(
//         ({ songs_reducer: { loading_songs
//         } }) => loading_songs
//     );

  // const navigatorState = store.getState()
  // console.log("store", navigatorState);
  return (
    <div className="device device-iphone-x">
      <div className="device-frame">
        <div className="device-content">
          <div className={classes.row}>
            
            <Modal visible={modal} setVisible={setModal}>
              <About />
            </Modal>
            <PlayButton onClick={() => setModal(true)}>
              <span role="img" aria-label="emoji name"> 📌 </span>
            </PlayButton>
            <div className={classes.column50}>
            
              <CaverContent loading_songs = {loading_songs} all_songs = {all_songs} />
              
            </div>
            <a style={{color: "white"}} href="https://trdmitr.github.io/alltributes/" target="_blank" rel="noopener noreferrer">
        <button >Все трибьюты </button>
      </a>
            {loading_songs ? <div className='loadBlock'><Loader/></div>  :
            <Player all_songs = {all_songs } />}
            
          </div>
          <Link to="/"><button className={classes.btnHome}>Главная</button></Link>
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
