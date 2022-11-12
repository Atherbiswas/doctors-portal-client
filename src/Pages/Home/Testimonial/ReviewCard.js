import React from "react";

const ReviewCard = ({ review }) => {
  const { name, userReview, image, location } = review;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{userReview}</p>
        <div className="card-actions justify-start items-center mt-2">
          <div>
            <img src={image}  alt="" />
          </div>
          <div>
            <h5 className="font-semibold text-xl">{name}</h5>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
