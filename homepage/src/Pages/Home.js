import React from 'react-bootstrap';
import InfoCarousel from '../components/AppCarousel';
import UserReviews from '../components/AppTestimonials';
//import MapComponent2 from '../components/MapComponent';
// import Map3 from '../components/Map3';

function Home() {
    return (
        <div>
            <InfoCarousel/>
            <UserReviews/>
        </div>

    );
}

export default Home;