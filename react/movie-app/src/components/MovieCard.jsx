import { useState } from 'react';

const MovieCard = ({movie}) => {
    const [rating, setRating] = useState(0);

    const [watched, setWatched] = useState(false);

    return (
        <div className="movie-container">
            <h2>{movie.name}</h2>
            <p>Rating: {rating} ⭐️</p>

            <button className="add-star-button" onClick={() => { setRating(rating + 1); }}>Add Star</button>
            <button className="remove-star-button" onClick={() => { setRating(rating - 1); }}>Remove Star</button>
            <button className="reset-button" onClick={() => { setRating(0); }}>Reset</button>
            <button onClick={() => setWatched(!watched)}>
                {watched ? "Watched ✅" : "Not Watched ❌"}
            </button>
        </div>
        
    );
}

export default MovieCard;