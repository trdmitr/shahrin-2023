import React, {Fragment, useContext} from 'react'
import { useParams } from "react-router";
import classes from "./SingContent.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { audioSource, tzitata, videoSource } from '../HOOKS/utils';
import { Context } from '../context'
import RoundLoader from '../Loader/RoundLoader';
const SingContent = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { sings} = useContext(Context);
    console.log(Array.from(sings))
    
     const currSings3 = () => { 
       
        if (sings.length === 0) {
        return null
      }
      else {
        return Array.from(sings).filter(sings => sings.id === params.id);
      }
      
      
    }
    const currSings =  Array.from(sings).filter(sings => sings.id === params.id);
    console.log(currSings)
    if (!currSings.length) {
        return (
          <div className='loadBlock'>
            <RoundLoader />
            <Link to="/"><button className={classes.btnError}> На главную!</button></Link>
          </div>
        )
      }
    return (
             currSings.map((currSing) => {
             const {id, photo, name, linkTo, audio1, audio_name1, audio2, audio_name2, 
                audio3, audio_name3, video1, video_name1, video2, video_name2, 
                video3, video_name3, picture  } = currSing
               return (
               <Fragment key={id}>
                    <div className={classes.mediaSong} >
                        <img className={classes.mediaImage_modal} src={photo}  alt={name} />
                        
                        <div className={classes.headerSong}>
                            <p>{name}</p></div>
                        <a className={[classes.linkTo, linkTo ? '' : classes.mediaHidden].join(' ')} href={linkTo}
                         target="_blank" rel="noopener noreferrer"> Канал исполнителя </a>
                        <div className=
                            {
                                classes.audioBlock
                            }>
                            {audioSource(audio1, audio_name1)}
                            {audioSource(audio2, audio_name2)}
                            {audioSource(audio3, audio_name3)}
                            {/* {audioSource(currSing.rezAudio2, currSing.rezAudio1)} */}
                        </div>
                        <div className={classes.videoBlock}
                        // {
                        //   [classes.videoBlock, currSing.video1 ? '' : classes.mediaHidden].join(' ')
                        >
                            {videoSource(video1, video_name1)}
                            {videoSource(video2, video_name2)}
                            {videoSource(video3, video_name3)}
                        </div>
                        {tzitata(picture)}
                        <button className={classes.bTnSing} onClick={() => navigate(-1)}>Назад</button>
                        {/* {tzi(currSing.picture)} */}
                    </div>

                    </Fragment>
             )}
            )
    )
}

export default React.memo(SingContent) 