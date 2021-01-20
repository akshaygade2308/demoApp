import React, {Component} from 'react'
import './Table.css'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            isLoading: false,
            isError: false
        }
        this.renderTableHeader = this.renderTableHeader.bind(this)
        this.renderTableRows = this.renderTableRows.bind(this)
    }

    async componentDidMount() {
        this.setState({isLoading: true})
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (response.ok) {
            const posts = await response.json()
            console.log('posts', posts)
            this.setState({posts: posts, isLoading: false})
        } else {
            this.setState({isError: true, isLoading: false})
        }
    }

    renderTableHeader = () => {
        return Object.keys(this.state.posts[0]).map(attr => <th key={attr}>
            {attr.toUpperCase()}
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
            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        {this.renderTableHeader()}
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows()}
                </tbody>
            </table>
        ) : (
            <div>No posts to display</div>
        )
    }
}
export default Table