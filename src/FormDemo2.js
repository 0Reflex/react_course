import React, { Component } from "react";
import { FormGroup, Label , Input, Button} from "reactstrap";
import alertify from "alertifyjs"


export default class FormDemo2 extends Component {
    state = { email: "", pasaword: "", city: "", description: "" }
    handleChange = event => {
        let name = event.target.name;
        let value= event.target.value;
        this.setState({ [name]: value });

    }
    handleSubmit = event => {
        event.preventDefault();
        alertify.success(this.state.email + " added to db!", 2)
        alertify.success(this.state.pasaword+ " added to db!", 2)
        alertify.success(this.state.description + " added to db!", 2)
        alertify.success(this.state.city + " added to db!", 2)
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email" name="email" id="email" placeholder="Enter email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password" name="password" id="password" placeholder="Enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                            type="textarea" name="description" id="description" placeholder="Enter description" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="select" name="city" id="city" onChange={this.handleChange}>
                            <option>Ankara</option>
                            <option>İstanbul</option>
                            <option>İzmir</option>
                            <option>Adana</option>
                            <option>Kilis</option>
                        </Input>
                    </FormGroup>
                    <Button type="Submit">Save</Button>
                </form>
            </div>
        )
    }

}
