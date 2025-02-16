
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, image_url, details } = news;

    return (
        <div className="card bg-base-100 mb-16 shadow-xl">
            <figure>
                <img src={image_url} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {details.length > 200 
                        ? <>
                            {details.slice(0, 200)}... 
                            <Link to={`/news/${_id}`} className="font-bold text-blue-600"> Read More</Link>
                          </>
                        : details}
                </p>
            </div>
        </div>
    );
};

// Define PropTypes
NewsCard.propTypes = {
    news: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
    }).isRequired,
};

export default NewsCard;
