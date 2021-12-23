import React from 'react';
import { connect } from 'react-redux';
import { createPost, showError } from './../redux/actions';
import { Warning } from './Warning';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);

    this.state = {
      title: '',
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    })
  }

  submitHandler = e => {
    e.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      this.props.showError('Заголовок поста не может быть пустым');
      return;
    }
    const newPost = {
      title,
      id: Date.now().toString()
    }
    console.log(newPost);
    this.props.createPost(newPost);
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <>
        {this.props.error && <Warning errorMessage={this.props.error} />}
        <form onSubmit={this.submitHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Заголовок поста</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={this.state.title}
              name="title"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success">Создать</button>
        </form>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.app.error
  }
}

const mapDispatchToProps = {
  createPost,
  showError
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
