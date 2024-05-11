import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getAllPosts } from '../api/postData';
import PostCard from '../components/postCard';

function Home() {
  const [posts, setPosts] = useState([]);

  const getEveryPosts = () => {
    getAllPosts().then(setPosts);
  };

  useEffect(() => {
    getEveryPosts();
  }, []);

  return (
    <div className="mb-4">
      <div>
        <Link href="/post/new" passHref>
          <Button> Add Post </Button>
        </Link>
      </div>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} postObj={post} onUpdate={getAllPosts} />
        ))}
      </div>
    </div>
  );
}

export default Home;
