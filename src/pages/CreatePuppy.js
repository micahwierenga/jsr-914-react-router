import React, { Component } from 'react';

export default class CreatePuppy extends Component {
    state = {
        formData: {
            name: '',
            breed: '',
            age: '',
            image: '',
        }
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
        this.props.createPuppy(this.state.formData);
    }

    render() {
        return (
            <div>
                <h1>Add Puppy</h1>
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
                            required
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
                    <button
                        type="submit"
                        className="btn btn-info"
                    >
                        ADD PUPPY
                    </button>
                </form>
            </div>
        );
    }
}
