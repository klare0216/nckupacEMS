import React from 'react';
import { Route, HashRouter, Switch, Link } from 'react-router-dom';
import MembersTable from '../MembersTable/MembersTable';
import MemberForm from '../MemberForm/MemberForm';

class app extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <nav className="navbar navbar-light bg-light">
                        <div className="navbar nav-item" >
                            <Link to="/memberForm">
                                <button className="btn btn-outline-success ml-3" type="submit" id="add">+</button>
                            </Link>
                            <Link to="/list">
                                <button className="btn btn-outline-success ml-3" type="submit" id="btn">社員名單</button>
                            </Link>
                        </div>
                    </nav>
                    <Switch>
                        <Route path="/list" component={MembersTable} />
                        <Route path="/memberForm" component={MemberForm} />
                        <Route path="/" exact render={() => (<div></div>)} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
};



export default app;