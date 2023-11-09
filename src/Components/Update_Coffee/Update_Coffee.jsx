import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update_Coffee = () => {
 const coffee = useLoaderData()
 const {_id, name, quantity,  Supplier, taste,  category, Details,   photo } = coffee;


 const handleAddCoffee = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const quantity = form.quantity.value
    const Supplier = form.Supplier.value
    const taste = form.taste.value
    const category = form.category.value
    const Details = form.Details.value
    const photo = form.photo.value
    const newCoffee = {name, quantity, Supplier, taste, category, Details, photo,}
    console.log(newCoffee)

    // send data to server side
    fetch(`http://localhost:5000/coffee/${_id}`,{

        method:'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            Swal.fire({
                title: 'success!',
                text: 'Add coffee successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }

    })
   
}


    return (
        <div>
           <div  className="bg-[#F4F3F0]  p-24 max-w[1200px] mx-w-auto ">
        <h1 className="text-center text-2xl font-bold mb-10">Update  Coffee</h1>
        <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
      <form  onSubmit={handleAddCoffee}>
        {/* form  name and quantity row*/}
        <div className=" md:flex gap-8">
        <div className="form-control md:w-1/2 my-5">
  <label className="label">
    <span className="label-text text-2xl font-semibold">Name</span>
  </label><br />
  <label className="input-group  ">
    <input type="text" placeholder="coffee Name" name="name" defaultValue={name} className="input input-bordered w-full py-2 px-2" />
  </label>
</div>
        <div className="form-control md:w-1/2 my-5 ">
  <label className="label">
    <span className="label-text text-2xl font-semibold">Available Quantity</span>
  </label><br />
  <label className="input-group  ">
    <input type="text" placeholder="Available Quantity" name="quantity" defaultValue={quantity} className="input input-bordered w-full py-2 px-2" 
  
    />

  </label>
</div>
        </div>
        {/* form Supplier and taste*/}
        <div className=" md:flex gap-8">
        <div className="form-control md:w-1/2 my-5">
  <label className="label">
    <span className="label-text text-2xl font-semibold">Supplier</span>
  </label><br />
  <label className="input-group  ">
    <input type="text" placeholder="Supplier" name="Supplier" defaultValue={Supplier}  className="input input-bordered w-full py-2 px-2" />
  </label>
</div>
        <div className="form-control md:w-1/2 my-5 ">
  <label className="label">
    <span className="label-text text-2xl font-semibold">taste</span>
  </label><br />
  <label className="input-group  ">
    <input type="text" placeholder="taste" name="taste" defaultValue={taste}  className="input input-bordered w-full py-2 px-2" 
  
    />

  </label>
</div>
        </div>
        {/* form Category and Details*/}
        <div className=" md:flex gap-8">
        <div className="form-control md:w-1/2 my-5">
  <label className="label">
    <span className="label-text text-2xl font-semibold">Category</span>
  </label><br />
  <label className="input-group  ">
    <input type="text" placeholder="category" name="category"  defaultValue={category} className="input input-bordered w-full py-2 px-2" />
  </label>
</div>
        <div className="form-control md:w-1/2 my-5 ">
  <label className="label">
    <span className="label-text text-2xl font-semibold">Details</span>
  </label><br />
  <label className="input-group  ">
    <input type="text" placeholder="Details" name="Details" defaultValue={Details}  className="input input-bordered w-full py-2 px-2" 
  
    />

  </label>
</div>
        </div>
        {/* form photo row*/}
        <div className=" ">
        <div className="form-control w-full my-5">
  <label className="label">
    <span className="label-text text-2xl font-semibold">photo</span>
  </label><br />
  <label className="input-group  ">
    <input type="text" placeholder="photo" name="photo" defaultValue={photo}  className="input input-bordered w-full py-2 px-2" />
  </label>
</div>

        </div>
       
          {/* form button row*/}
      
         <input type="submit" value="Update Coffee" className="btn border-t-neutral-500 w-full bg-[#D2B48C] py-2 font-bold text-xl" />
      </form>
    </div>
        </div>
    );
};

export default Update_Coffee;