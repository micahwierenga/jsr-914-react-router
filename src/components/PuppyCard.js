import React from 'react';
import { Link } from 'react-router-dom';

export default function PuppyCard(props) {
    return (
        <div className="p-2">
            <div className="card" style={{'width': '18rem'}}>
                <img className="card-img-top" src={props.puppy.image} alt={props.puppy.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.puppy.name}</h5>
                    <p className="card-text"><strong>Age: </strong>{props.puppy.age}</p>
                    <p className="card-text"><strong>Breed: </strong>{props.puppy.breed}</p>
                    <div>
                        <div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Link className='btn btn-xs btn-primary' to={{ pathname: `/puppies/details/${props.puppy.id}`, state: {selectedPuppy: props.puppy} }}>DETAILS</Link>
                            <Link className='btn btn-xs btn-warning' to={{ pathname: `/puppies/edit/${props.puppy.id}`, state: {selectedPuppy: props.puppy} }}>EDIT</Link>
                            <button
                                className='btn btn-xs btn-danger'
                                onClick={() => props.removePuppy(props.puppy.id)}
                            >
                                DELETE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
