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
        { userId === postObj.userId ? (
          <>
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
    publication_date: PropTypes.string,
    image_url: PropTypes.string,
    userId: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default PostCard;
