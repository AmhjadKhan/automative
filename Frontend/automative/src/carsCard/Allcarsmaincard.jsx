import React from "react";

const Allcarsmaincard = ({allCar}) => {
    // console.log(allCar)
    // const {_id, name, brandname,image, price, descraption} = allCar;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={allCar?.image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{allCar.name}</h2>
          <p className="text-4xl">{allCar.brandname}</p>
          {/* <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Allcarsmaincard;
