import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EditPuppyPage extends Component {
    state = {
        formData: this.props.location.state.selectedPuppy
    }

    handleChange = e => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.updatePuppy(this.state.formData);
    };

    render() {
        return (
            <>
                <h1>Edit Puppy</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Breed</label>
                        <input
                            className="form-control"
                            name="breed"
                            value={this.state.formData.breed}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input
                            className="form-control"
                            name="age"
                            value={this.state.formData.age}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Picture URL</label>
                        <input
                            className="form-control"
                            name="image"
                            value={this.state.formData.image}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="btn btn-info mr-2"
                        >
                            UPDATE PUPPY
                        </button>
                        <Link className="btn btn-dark" to='/'>CANCEL</Link>
                    </div>
                </form>
            </>
        );
    }
}
