import './TwitterFollowUser.css'
import {useState} from 'react'

const TwiterFollowUser = ({ username='username', name , initialIsFollowing=false}) => {
    const [isFollowing, setIsFollowing]=useState(initialIsFollowing)
    const handleClick = () => setIsFollowing(prev=>!prev)

    return (
    <article className="tw-followUser">
        <header className="tw-followUser-header">
            <img 
                className="tw-followUser-avatar"
                alt={`El avatar de ${username}`} 
                src={`https://unavatar.io/${username}/`}/>
            <div className="tw-followUser-info">
                <strong>{name}</strong>
                <span className="tw-followUser-infoUsername">@midudev</span>
            </div>
        </header>

        <aside className='tw-followUser-aside'>
            {isFollowing ?
                <button onClick={handleClick} 
                className="tw-followUser-button isFollowing">
                    <span className='siguiendo' >Siguiendo</span>
                    <span className='dejarDeSeguir'>Dejar de seguir</span>
                </button> 
                        :
                <button onClick={handleClick} 
                className="tw-followUser-button">
                    Seguir
                </button>
            }
        </aside>
    </article>
    )
}

export default TwiterFollowUser