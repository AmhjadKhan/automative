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
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        {/* 1st cars */}
      <div className="flex gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Car name"
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
          />
        </label>
      </div>
      </div>
      {/* 2nd card  */}
      <div className="flex gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Car name"
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
          />
        </label>
      </div>
      </div>
      {/* 3rd card  */}
      <div className="flex gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Car name"
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
          />
        </label>
      </div>
      </div>
      {/* 4th card  */}
      <div className="flex gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Car name"
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
          />
        </label>
      </div>
      </div>
      {/* 5th card  */}
      <div className="flex gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Car name"
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
          />
        </label>
      </div>
      </div>
      {/* 6th card  */}
      <div className="flex gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Car name"
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
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
            className="input input-bordered"
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
