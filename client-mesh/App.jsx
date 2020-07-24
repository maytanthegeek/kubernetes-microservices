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
      .catch((err) => {
        console.log(err);
      })
      .then(response => response.json())
      .catch((err) => {
        console.log(err);
        return {
          id: this.userId,
          name: "Guest",
        }
      })
      .then((user) => this.setState({
        user,
      }));
    
    fetch(`/post`)
    .then(response => response.json())
    .then((posts) => this.setState({
      posts,
    }));
  }

  handlePostClick(postId) {
    this.setState({
      selectedPost: postId,
    })
    fetch(`/post/${postId}`)
      .then(response => response.json())
      .then((post) => this.setState({
        postContent: post.content,
      }));
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
