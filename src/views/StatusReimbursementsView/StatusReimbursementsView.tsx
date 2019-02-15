import * as React from 'react';
import { Form, Table, Button, FormGroup, Label, Input } from 'reactstrap';
import { TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

export interface StatusReimbursementsViewProps {
    token: string,
    user : {
        id: number,
        role: number,
        username: string,
        password: string,
        email: string,
        firstName: string,
        lastName: string
    }
}
 
export interface StatusReimbursementsViewState {
    data: [],
    status: number
}
 
class StatusReimbursementsView extends React.Component<StatusReimbursementsViewProps, StatusReimbursementsViewState> {
    constructor(props: StatusReimbursementsViewProps){
        super(props);
        this.state = {
            data: [],
            status: 0
        }
    }
    
    parseStatus = (entry: number) => {
        switch (entry) {
            case 1:
                return 'Pending';
            case 2:
                return 'Approved';
            case 3:
                return 'Denied';
            default:
                return 'DB_ERROR';
        }
    }

    fetchStatusTickets = async() => {
        try{
            const url = 'http://ec2-18-221-233-241.us-east-2.compute.amazonaws.com:3000/reimbursements/status/' + this.state.status;
            const res = await fetch (url,
            {
                method: 'GET',
                headers: {
                    'x-access-token' : this.props.token
                }
            })
            const body = await res.json();
            if(body.auth) {
                this.setState({
                    data: body.reimbursements
                });
            }
            else {
                this.setState({
                    data: []
                });
                console.log('Authorization failed.');
            }
        }
        catch (err) {
            console.log(err);
            this.setState({
                data: []
            });
        }    
    }

    radioChange = (event: any) => {
        this.setState({
            status: event.currentTarget.value
        });
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <Form inline>
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
                </Form>
                <Button color='login' onClick={this.fetchStatusTickets}>Search</Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Author Id</TableCell>
                            <TableCell>Amount Requested</TableCell>
                            <TableCell>Date Resolved</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Resolver Id</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.state.data.map((entry: any) => {
                                return (
                                    <TableRow>
                                        <TableCell>{entry.reimbursementId}</TableCell>
                                        <TableCell>{entry.author}</TableCell>
                                        <TableCell>{entry.amount}</TableCell>
                                        <TableCell>{entry.dateResolved}</TableCell>
                                        <TableCell>{entry.description}</TableCell>
                                        <TableCell>{entry.resolver}</TableCell>
                                        <TableCell>{this.parseStatus(entry.status)}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </React.Fragment>
        );
    }
}
 
export default StatusReimbursementsView;