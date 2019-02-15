import * as React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import getTimestamp from '../../util/getTimeStamp';

export interface UpdateReimbursementViewProps {
    token: string,
    user: {
        id: number,
        role: number,
        username: string,
        password: string,
        email: string,
        firstName: string,
        lastName: string
    }
}
 
export interface UpdateReimbursementViewState {
    id: number,
    status: number
}
 
class UpdateReimbursementView extends React.Component<UpdateReimbursementViewProps, UpdateReimbursementViewState> {
    constructor (props: UpdateReimbursementViewProps) {
        super(props);
        this.state={
            id: 0,
            status: 0
        }
    }
    
    radioChange = (event: any) => {
        this.setState({
            status: event.currentTarget.value
        });
    }
    
    idChange = (event: any) => {
        this.setState({
            id: event.currentTarget.value
        })
    }

    updateReimbursement = async() => {
        let timestamp = getTimestamp();

        try{
            const url = 'http://ec2-18-221-233-241.us-east-2.compute.amazonaws.com:3000/reimbursements';
            const res = await fetch (url,
            {
                method: 'PATCH',
                body: JSON.stringify({
                    updated : {
                        id: this.state.id,
                        dateResolved: timestamp,
                        resolverId: this.props.user.id,
                        status: this.state.status
                    }
                }),
                headers: {
                    'x-access-token' : this.props.token,
                    'Content-Type' : 'application/json'
                }
            })

            const body = await res.json();
            if(body.auth) {
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
            <React.Fragment>
                <Form>
                    <FormGroup>
                        <Label for="idInput">Reimbursement ID</Label>
                        <Input id="idInput" 
                        value={this.state.id} onChange={this.idChange} />
                    </FormGroup>
                    <FormGroup>
                    <FormGroup cellPadding={5}>
                        <legend>Reimbursement Type</legend>
                        <FormGroup>
                            <Label check>
                                <Input type="radio" name="statusRadio" 
                                value={1} onChange={this.radioChange}/>
                                Pending
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label check>
                                <Input type="radio" name="statusRadio" 
                                value={2} onChange={this.radioChange}/>
                                Approved
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label check>
                                <Input type="radio" name="statusRadio" 
                                value={3} onChange={this.radioChange}/>
                                Denied
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    </FormGroup>
                    <Button color="login" onClick={this.updateReimbursement} id="updateReimbursementButton">Submit</Button>
                </Form>
            </React.Fragment>
         );
    }
}
 
export default UpdateReimbursementView;