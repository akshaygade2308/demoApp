import React, {Component} from 'react'
import './Table.css'
import { Table } from 'react-bootstrap'
const axios = require('axios').default;

class PostsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            isLoading: false,
            isError: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true})
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(resp => {
                const result = resp.data
                this.setState({posts: result, isLoading: false})
            })
            .catch(err => {
                this.setState({isError: true, isLoading: false})
            });
    }

    renderTableHeader = () => {
        return Object.keys(this.state.posts[0]).map(index => <th key={index}>
            {index.toUpperCase()}
            </th>
        )
    }

    renderTableRows = () => {
        return this.state.posts.map(post => {
            return (
                <tr key={post.id}>
                    <td>{post.userId}</td>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
            )
        })
    }

    render() {
        const {posts, isLoading, isError} = this.state
        if (isLoading) {
            return <div>Loading</div>
        }
        if (isError) {
            return <div>Error</div>
        }
        return posts.length > 0
        ? (
            <div className='tableStyle'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {this.renderTableHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableRows()}
                    </tbody>
                </Table>
            </div>
        ) : (
            <div>No posts to display</div>
        )
    }
}
export default PostsTable