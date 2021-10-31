import React from 'react';
import PuppyCard from '../components/PuppyCard';

export default function PuppyList(props) {
    return (
        <>
            <h1>Puppy List</h1>
            <div className='d-flex flex-wrap'>
                {props.puppyList.map(puppy => 
                    <PuppyCard
                        key={puppy.id}
                        puppy={puppy}
                        removePuppy={props.removePuppy}
                    />
                )}
            </div>
        </>
    )
}
