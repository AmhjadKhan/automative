import React from "react";

const Addproduct = () => {
  const handleForm = e =>{
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const brandname = form.brandname.value;
    const price = form.price.value;
    const descraption = form.descraption.value;
    const image = form.image.value;
      
     const allCars ={name, brandname, price, descraption, image}
     console.log(allCars)

    //  send data to server 
    fetch('http://localhost:5000/allCars',{
       method:'POST',
       headers: {
        'content-type':'application/json'
       },
       body:JSON.stringify(allCars)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
    })
  }
  return ( 
    <div className=" py-46">
      <h1 className="text-center text-3xl font-bold">You ADD your product in Home</h1>
      <form onSubmit={handleForm}>
        {/* 1st cars */}
      <div className="gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Car name"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Brand name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="brandname"
            placeholder="Car name"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">price</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="price"
            placeholder="price"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Short Descraprion</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="descraption"
            placeholder="Car name"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Image-url</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="image"
            placeholder="Car name"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      </div>
      <input className="btn btn-block mt-6 bg-slate-600" type="submit" value='ADD CARS' />
      </form>
    </div>
  );
};

export default Addproduct;
