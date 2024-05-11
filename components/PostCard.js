/* eslint-disable eqeqeq */
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { deletePost } from '../api/postData';

function PostCard({ postObj, onUpdate }) {
  const userId = localStorage.getItem('auth_token');

  const deleteThisPost = () => {
    if (window.confirm(`Delete ${postObj.title}?`)) {
      deletePost(postObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card id="post-styling">
      <Card.Title>{postObj.title} Publication Date: {postObj.publication_date}</Card.Title>
      <Card.Img src={postObj.image_url} alt={postObj.title} style={{ minHeight: '300px ' }} />
      <Card.Body>
        { userId == postObj.user_id ? (
          <>
            <Link href={`/post/edit/${postObj.id}`} passHref>
              <Button variant="light">EDIT</Button>
            </Link>
            <Link href={`/post/${postObj.id}`} passHref>
              <Button variant="light" className="m-2">VIEW</Button>
            </Link>
            <Button variant="secondary" onClick={deleteThisPost} className="m-2 btn-block">
              DELETE
            </Button>
          </>
        ) : (
          <Link href={`/post/${postObj.id}`} passHref>
            <Button variant="light" className="m-2">VIEW</Button>
          </Link>
        )}
      </Card.Body>
    </Card>

  );
}

PostCard.propTypes = {
  postObj: PropTypes.shape({
    title: PropTypes.string,
    publication_date: PropTypes.number,
    image_url: PropTypes.string,
    user_id: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default PostCard;
