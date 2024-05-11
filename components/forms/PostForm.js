/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { createPost, updatePost } from '../../api/postData';

const initialState = {
  title: '',
  image_url: '',
  content: '',
};

function PostForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const userId = localStorage.getItem('auth_token');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updatePost(formInput).then(() => router.push('/'));
    } else {
      const payload = { ...formInput, user: userId };
      createPost(payload).then(() => router.push('/'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Add a'} Post</h2>

        <FloatingLabel controlId="floatingInput1" label="Post Title" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            value={formInput.title}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput2" label="Post Image" className="mb-3">
          <Form.Control
            type="url"
            placeholder="Enter an image url"
            name="image_url"
            value={formInput.image_url}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput1" label="Post Content" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Content"
            name="content"
            value={formInput.content}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <Button variant="btn-small btn-secondary" type="submit">{obj.id ? 'Update' : 'Create'} Post</Button>

      </Form>
    </>
  );
}

PostForm.propTypes = {
  pbj: PropTypes.shape({
    title: PropTypes.string,
    image_url: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default PostForm;
