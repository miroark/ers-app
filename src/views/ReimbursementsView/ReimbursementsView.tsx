import * as React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

export interface ReimbursementsViewProps {
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
 
export interface ReimbursementsViewState {
    data: []
}
 
class ReimbursementsView extends React.Component<ReimbursementsViewProps, ReimbursementsViewState> {
    constructor(props: ReimbursementsViewProps){
        super(props);
        this.state = {
            data: []
        }
    }
    async componentDidMount() {
        try{
            const url = 'http://ec2-18-222-133-80.us-east-2.compute.amazonaws.com:3000/reimbursements/author/userId/' + this.props.user.id;
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

    parseStatus = (entry: number) => {
        console.log(entry)
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
 
export default ReimbursementsView;