import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import ReviewCard from './ReviewCard';

const Testimonial = () => {

    const reviewsData = [
        {
            _id: 1,
            name: 'Winson Herry',
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people1,
            location: 'California'
        },
        {
            _id: 2,
            name: 'Melinda Flower',
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people2,
            location: 'Florida'
        },
        {
            _id: 3,
            name: 'Tanisha Bail',
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people3,
            location: 'New York'
        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                <h4 className='text-xl font-bold text-primary'>Testimonial</h4>
                <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img src={quote} className="lg:w-48 w-24" alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    reviewsData.map(review => <ReviewCard 
                    key={review._id}
                    review={review}
                    ></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;