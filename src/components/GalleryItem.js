import { Link } from 'react-router-dom';
import { useState } from 'react'

const GalleryItem = (props) => {
    // Styles
    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)) ,url(${props.item.artworkUrl100})`,
        'backgroundRepeat': '',
        'backgroundSize': 'contain',
        'color': 'red'
    }
    
    let [view, setView] = useState(false);
    // Library simple view
    const simpleView = () => {
        return(
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }
    // Library detailed view
    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h3>
                    <Link to={`/artist/${props.item.artistId}`}>
                        {props.item.artistName}
                    </Link>
                </h3>
                <h3>
                    <Link to={`/album/${props.item.collectionId}`}>
                        {props.item.collectionName}
                    </Link>
                </h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }
    

    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            {/* Ternary to show simple view when 'view' is false */}
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem