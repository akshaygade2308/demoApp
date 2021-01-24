import React, {Component} from 'react'
import './ErrorPage.css'
import { Form, Button, Col } from 'react-bootstrap'
import './FormComponent.css'
const axios = require('axios')

class DisplayForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                userId: this.state.userId,
                title: this.state.title,
                body: this.state.body
            })
            console.log('result', res.data)
            alert('Entry posted successfully')
        } catch (error) {
            console.log('error', error)
        }
    }
    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <Form className='formStyle' action="https://jsonplaceholder.typicode.com/posts" method = "POST" onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="number"
                            name='userId'
                            value={userId}
                            placeholder="Enter User ID"
                            onChange={this.handleChange}
                            required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text"
                            name='title'
                            value={title}
                            placeholder="Enter Title"
                            onChange={this.handleChange}
                            required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Body</Form.Label>
                        <Form.Control type="text"
                            name='body'
                            value={body}
                            placeholder="Enter Body"
                            onChange={this.handleChange}
                            required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
export default DisplayForm