import * as React from 'react';
import { Form, Label, Input, Button } from 'reactstrap';
import { FormGroup } from '@material-ui/core';
import getTimestamp from '../../util/getTimeStamp';

export interface SubmitReimbursementViewProps {
    token: string,
    user: {
        id: number,
        role: number,
        username: string,
        password: string,
        email:string,
        firstName: string,
        lastName: string
    }
}
 
export interface SubmitReimbursementViewState {
    amount : number,
    description: string,
    reimbursementType: number
}
 
class SubmitReimbursementView extends React.Component<SubmitReimbursementViewProps, SubmitReimbursementViewState> {
    constructor(props: SubmitReimbursementViewProps){
        super(props);
        this.state = {
            amount: 0,
            description: '',
            reimbursementType: 0
        };
    }
    radioChange = (event: any) => {
        this.setState({
            reimbursementType: event.currentTarget.value
        });
    }

    amountChange = (event: any) => {
        this.setState({
            amount: event.target.value
        });
    }

    descriptionChange = (event: any) => {
        this.setState({
            description: event.target.value
        });
    }

    sendRequest = async () => {
        let timestamp = getTimestamp();

        try{
            const url = 'http://ec2-18-222-133-80.us-east-2.compute.amazonaws.com:3000/reimbursements';
            const res = await fetch (url,
            {
                method: 'POST',
                body: JSON.stringify({
                    reimbursement : {
                        author: this.props.user.id,
                        amount : this.state.amount,
                        datesubmitted : timestamp,
                        description : this.state.description,
                        type: this.state.reimbursementType
                    }
                }),
                headers: {
                    'x-access-token' : this.props.token,
                    'Content-Type' : 'application/json'
                }
            })

            const body = await res.json();
            if(body.reimbursementId) {
                console.log('Successfully submitted');
            }
            else {
                console.log(`Failed to submit. ${body.message}`)
            }
        }
        catch (err) {
            console.log(err);
        }   
    }

    render() { 
        return (  
            <Form>
                <FormGroup>
                    <Label for="amountInput">Amount</Label>
                    <Input type="number" name="amount" id="amountInput" 
                    value={this.state.amount} onChange={this.amountChange}/> 
                </FormGroup>
                <FormGroup>
                    <Label for="descriptionInput">Description</Label>
                    <Input type="textarea" name="description" id="descriptionInput" 
                    value={this.state.description} onChange={this.descriptionChange}/>
                </FormGroup>
                <FormGroup>
                    <legend>Reimbursement Type</legend>
                    <FormGroup>
                        <Label check>
                            <Input type="radio" name="typeRadio" 
                            value={1} onChange={this.radioChange}/>
                            Lodging
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label check>
                            <Input type="radio" name="typeRadio" 
                            value={2} onChange={this.radioChange}/>
                            Travel
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label check>
                            <Input type="radio" name="typeRadio" 
                            value={3} onChange={this.radioChange}/>
                            Food
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label check>
                            <Input type="radio" name="typeRadio" 
                            value={4} onChange={this.radioChange}/>
                            Other
                        </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup className="ml-auto p-2">
                    <Button onClick={this.sendRequest}>Submit</Button>
                </FormGroup>
            </Form>
        );
    }
}
 
export default SubmitReimbursementView;