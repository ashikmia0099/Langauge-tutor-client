import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMyTuturial = () => {

    const updatemyTutorial = useLoaderData()

    const {_id, language, country, description, price, image} = updatemyTutorial;


    
        const handleUpdateTutor = e => {
            e.preventDefault();
            // console.log('Update a new tutor')

            const form = e.target;
            const language = form.language.value;
            const country = form.country.value;
            const description = form.description.value;
            const price = form.price.value;
            const image = form.image.value;
            
    
            // console.log( language, country, description, price, image);
            const UpdateTutorData = {
                
                language,
                country,
                description,
                price,
                image,
                
            };
    
            
            fetch(`https://langauge-tutor-server.onrender.com/langauges/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(UpdateTutorData)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: "Tutor Post Update Successfull",
                            icon: "success",
                            draggable: true
                        });
                    }
                })
        }
    

    return (
        <div>
            <h2 className="text-3xl">Add A new Turtor</h2>
            <form onSubmit={handleUpdateTutor} className="card-body">
                {/* Tutor Name */}
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tutor Langauge</span>
                    </label>
                    <input type="text" name='language' defaultValue={language} placeholder="Tutor Langauge" className="input input-bordered" required />
                </div>
                {/* job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Country Location</span>
                    </label>
                    <input type="text" name='country' defaultValue={country} placeholder="Country Location" className="input input-bordered" required />
                </div>
                {/* Tutor Details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tutor Details</span>
                    </label>
                    <textarea name="description" defaultValue={description} className="textarea textarea-bordered" placeholder="Tutor Details" required></textarea>
                </div>

                
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" required />

                </div>


                {/* Tutor Image URL */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tutor Image URL</span>
                    </label>
                    <input type='url' name='image' defaultValue={image} placeholder="Tutor Image URL" className="input input-bordered" required />
                </div>
                
                {/* submit button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateMyTuturial;