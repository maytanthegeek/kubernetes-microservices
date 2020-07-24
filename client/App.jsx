import React from "react";

export default class App extends React.Component {
  
  constructor() {
    super()
    this.userId = 0;
    this.state = {
      user: null,
      posts: [],
    };
    fetch(`/user/${this.userId}`)
      .then(response => response.json())
      .then((response) => {
        if (response.err) {
          console.log(response.data);
          this.setState({
            user: {
              id: -1,
              name: 'Guest'
            },
          });
          return
        }
        this.setState({
          user: response.data,
        });
      });
    
    fetch(`/post`)
    .then(response => response.json())
      .then((response) => {
        if (response.err) {
          console.log(response.data);
          return
        }
        this.setState({
          posts: response.data,
        });
      });
  }

  handlePostClick(postId) {
    this.setState({
      selectedPost: postId,
    })
    fetch(`/post/${postId}`)
      .then(response => response.json())
      .then((response) => {
        if (response.err) {
          console.log(response.data);
          this.setState({
            postContent: '',
          });
          return
        }
        this.setState({
          postContent: response.data.content,
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          Welcome {this.state.user?.name}
        </div>
        <div>
          <section>
            {this.state.posts.map((post) => (
              <article key={post.id}>
                <details>
                  <summary onClick={() => this.handlePostClick(post.id)}>{post.title}</summary>
                  { post.id === this.state.selectedPost ?
                      <p>{this.state.postContent}</p> :
                      null
                  }
                </details>
              </article>
            ))}
          </section>
        </div>
      </div>    
    );
  }
}
