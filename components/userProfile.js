import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function ProfileCard({ userObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Image
          className="rounded-circle"
          style={{ maxWidth: '100px' }}
          alt="profile-img"
          src={userObj.profile_image_url}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1618870391418-4dde5f442397?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
          }}
        />
        <p className="full-name">{userObj.first_name} {userObj.last_name}</p>
        <p className="username">Username: {userObj.username}</p>
        <p className="card-text">Bio: {userObj.bio}</p>
        <h5 className="card-text">Profile created on : {userObj.created_on}</h5>
      </Card.Body>
    </Card>
  );
}

ProfileCard.propTypes = {
  userObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    username: PropTypes.string,
    bio: PropTypes.string,
    created_on: PropTypes.number,
    profile_image_url: PropTypes.string,
  }).isRequired,
};

export default ProfileCard;
