import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Coffee = ({coffee, coffees, setCoffees }) => {
    const {_id, name, quantity,  Supplier, taste,  category, Details,   photo } = coffee;

const handleDelete = _id => {
  console.log(_id)
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
    
      
      fetch(`http://localhost:5000/coffee/${_id}`,{
        method:"DELETE"
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          Swal.fire({
            title: "Deleted!",
            text: "Your coffee has been deleted.",
            icon: "success"
          });
           const remaining = coffees.filter(cof => cof._id !==_id)
           setCoffees(remaining)
        }
      })
    }
  });
}

    return (
       <div>
  <div className="card lg:card-side bg-base-100  py-8">
  <figure><img src={photo} alt="Album"/></figure>
  <div className="flex justify-between  w-full pr-5 py-5">
<div className="text-xl text-center jc">
<h2 className=''>{name}!</h2>
    <p>{Details}</p>
    <p>{Supplier}</p>
    <p>{quantity}</p>
</div>
    <div className="card-actions justify-end">
    <div className="btn-group btn-group-vertical space-y-2">
  <button className="btn ">view</button>
  <Link to={`updateCoffee/${_id}`}>
  <button className="btn ">Edit</button>
  </Link>
  <button
   onClick={() => handleDelete(_id)}
  className="btn">Delete</button>
</div>
    </div>
  </div>
</div>
       </div>
    )
};

export default Coffee;