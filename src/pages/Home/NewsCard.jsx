import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title,thumbnail_url,details } = news;
    return (
       



        <div className="card bg-base-100 mb-16  shadow-xl">
            <figure>
                <img
                    src={thumbnail_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
               
                    {
                        details.length > 200
                         ? <p>{details.slice(0,200)} <Link className='font-bold text-blue-600'>Read More</Link></p>
                         :<p>{details}</p>
                    }
              
                
            </div>
        </div>
    );
};

// Define PropTypes
NewsCard.propTypes = {
    news: PropTypes.shape({
        title: PropTypes.string.isRequired,
         thumbnail_url: PropTypes.string.isRequired,
    }).isRequired,
};

export default NewsCard;












// import React from 'react';
// import PropTypes from 'prop-types';

// const NewsCard = ({ news: { title, thumbnail_url } }) => (
//   <div className="card bg-base-100 mb-16 border-b-2 shadow-xl">
//     <figure>
//       <img src={thumbnail_url} alt={title} />
//     </figure>
//     <div className="card-body">
//       <h2 className="card-title">{title}</h2>
//       <p>If a dog chews shoes whose shoes does he choose?</p>
//       <div className="card-actions justify-end">
//         <button className="btn btn-primary">Buy Now</button>
//       </div>
//     </div>
//   </div>
// );

// // Define PropTypes
// NewsCard.propTypes = {
//   news: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     thumbnail_url: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default NewsCard;

