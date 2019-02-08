import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Col } from 'reactstrap';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import './App.css';
import Navbar from './components/navbar/Navbar';
import './include/Bootstrap';
import { store } from './Store';
import HomeView from './views/HomeView';
import ProfileView from './views/ProfileView';
import AllUsersView from './views/AllUsersView';
import UserIdView from './views/UserIdView';
import UpdateUserView from './views/UpdateUserView';
import SubmitReimbursementView from './views/SubmitReimbursementView';
import ReimbursementsView from './views/ReimbursementsView';
import StatusReimbursementsView from './views/StatusReimbursementsView';
import AllReimbursementsView from './views/AllReimbursementsView';
import AuthorReimbursementsView from './views/AuthorReimbursementsView';
import UpdateReimbursementView from './views/UpdateReimbursementView';

class App extends Component {
  state = {
    redirect: true
  }

  // Forces a redirect to /home when the user first loads the page.
  renderRedirect= () => {
    if(this.state.redirect) {
      this.state.redirect = false;
      return <Redirect to='/home' />;
    }
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Col sm={{offset: 1, size: 10}} id="view">
              <Jumbotron id="viewJumboTron" >
                {this.renderRedirect()}
                <Route path="/home" component={HomeView} />

                <Route path="/profile" component={ProfileView} />
                <Route path="/view-all-users" component={AllUsersView} />
                <Route path="/user-by-id" component={UserIdView} />
                <Route path="/update-user" component={UpdateUserView}/>

                <Route path="/submit" component={SubmitReimbursementView} />
                <Route path="/reimbursements" component={ReimbursementsView} />
                <Route path="/all-reimbursements" component={AllReimbursementsView} />
                <Route path="/reimbursements-status" component={StatusReimbursementsView} />
                <Route path="/reimbursements-author" component={AuthorReimbursementsView} />
                <Route path="/reimbursement-update" component={UpdateReimbursementView} />
              </Jumbotron>
            </Col>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
