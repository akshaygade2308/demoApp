import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import PostsTable from './PostsTable'
import FormComponent from './FormComponent'
import Home from './Home'
import ErrorPage from './ErrorPage'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function displayNavbar () {
    return (
        <div>
            <Router>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand>My Project</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/tableContents">Posts</Nav.Link>
                    <Nav.Link href="/form">Forms</Nav.Link>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/tableContents">
                        <PostsTable />
                    </Route>
                    <Route path="/form">
                        <FormComponent />
                    </Route>
                    <Route path="/error">
                        <ErrorPage />
                    </Route>
            <Redirect from="*" to="/error" />
                </Switch>
            </Router>
        </div>
    )
}
export default displayNavbar