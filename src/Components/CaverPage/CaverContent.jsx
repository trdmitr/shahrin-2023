import React, { useContext } from 'react'
// import Img from '../UI/Img';
import { Link } from 'react-router-dom';
import classes from "./CaverPage.module.css"
import { Context } from '../context'
import RoundLoader from '../Loader/RoundLoader';
const CaverContent = ({all_songs, loading_songs}) => {
    const { setSings } = useContext(Context);
    return  all_songs.map((song) => {
        const {photo, name, id} = song
        return (

            <Link key={id} to={`/cavers/${id}`}onClick={() => setSings(all_songs)}>
                <div className={classes.media}>
                    <div className={classes.mediaImage}>
                    {loading_songs
 ? <RoundLoader/> : <img loading="lazy" src={photo} width={100} alt={name} />}	
                        {/* <Img imgUrl={photo} imgAlt={name} /> */}
                    </div>
                    <div>
                        <p> {name} </p>
                    </div>
                </div>
            </Link>
    )

    })
    
}
export default React.memo(CaverContent)