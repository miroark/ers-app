import * as React from 'react';
import { Table } from 'reactstrap';
import { TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

export interface AllReimbursementsViewProps {
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
 
export interface AllReimbursementsViewState {
    data: []
}
 
class AllReimbursementsView extends React.Component<AllReimbursementsViewProps, AllReimbursementsViewState> {
    constructor(props: AllReimbursementsViewProps){
        super(props);
        this.state = {
            data: []
        }
    }
    async componentDidMount() {
        try{
            const url = 'http://ec2-18-221-233-241.us-east-2.compute.amazonaws.com:3000/reimbursements';
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
                console.log(body.message);
            }
        }
        catch (err) {
            console.log(err);
            this.setState({
                data: []
            });
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

    render() { 
        return ( 
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
         );
    }
}
 
export default AllReimbursementsView;