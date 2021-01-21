import React, {Component} from 'react'
import './Table.css'
import { Table } from 'react-bootstrap'

class PostsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            isLoading: false,
            isError: false
        }
    }

    async componentDidMount() {
        this.setState({isLoading: true})
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (response.ok) {
            const posts = await response.json()
            this.setState({posts: posts, isLoading: false})
        } else {
            this.setState({isError: true, isLoading: false})
        }
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