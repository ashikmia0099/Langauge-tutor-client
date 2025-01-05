import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AddTutorials = () => {




    const { user, setUser,myTutuiral, setmyTutuiral } = useContext(AuthContext);



    const handleAddTutor = e => {
        e.preventDefault();
        // console.log('Add a new tutor')

        const form = e.target;
        const name = form.name.value;
        const language = form.language.value;
        const country = form.country.value;
        const description = form.description.value;
        const email = form.email.value;
        const price = form.price.value;
        const image = form.image.value;
        

        // console.log(name, language, country, description, email, price, image);
        const newTutorData = {
            name,
            language,
            country,
            description,
            email,
            price,
            image,
            
        };

        
        fetch('https://langauge-tutor-server.onrender.com/langauges', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTutorData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Tutor New Post Successfull",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }



    return (
        <div>
            <h2 className="text-3xl">Add A new Turtor</h2>
            <form onSubmit={handleAddTutor} className="card-body">
                {/* Tutor Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tutor Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Tutor Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tutor Langauge</span>
                    </label>
                    <input type="text" name='language' placeholder="Tutor Langauge" className="input input-bordered" required />
                </div>
                {/* job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Country Location</span>
                    </label>
                    <input type="text" name='country' placeholder="Country Location" className="input input-bordered" required />
                </div>
                {/* Tutor Details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tutor Details</span>
                    </label>
                    <textarea name="description" className="textarea textarea-bordered" placeholder="Tutor Details" required></textarea>
                </div>

                {/* Tutor Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tutor Email</span>
                    </label>
                    <input type="text" name='email' defaultValue={user?.email} placeholder="HR Email" className="input input-bordered" required />
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name='price' placeholder="Price" className="input input-bordered" required />

                </div>


                {/* Tutor Image URL */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tutor Image URL</span>
                    </label>
                    <input type='url' name='image' placeholder="Tutor Image URL" className="input input-bordered" required />
                </div>
                
                {/* submit button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddTutorials;