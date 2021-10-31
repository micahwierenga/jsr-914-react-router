import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowPuppy(props) {
    const { selectedPuppy } = props.location.state;
    return (
        <div className="p-2">
            <div className="card" style={{'width': '38rem'}}>
                <div className="card-body">
                    <h2 className="card-title text-center mb-3">{selectedPuppy.name.toUpperCase()}</h2>
                    <div className="d-flex justify-content-around">
                        <div className="card-text"><strong>Age: </strong>{selectedPuppy.age}</div>
                        <div className="card-text"><strong>Breed: </strong>{selectedPuppy.breed}</div>
                    </div>
                </div>
                <img className="card-img-top border-top border-bottom" src={selectedPuppy.image} alt={selectedPuppy.name} />
                <div className="card-body">
                    <div className='d-flex justify-content-center'>
                        <Link className='btn btn-xs btn-warning' to={{ pathname: `/puppies/edit/${selectedPuppy.id}`, state: {selectedPuppy: selectedPuppy}  }}>EDIT</Link>
                        <button
                            className='btn btn-xs btn-danger margin-left-10'
                            onClick={() => props.removePuppy(selectedPuppy.id)}
                        >
                            DELETE
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
