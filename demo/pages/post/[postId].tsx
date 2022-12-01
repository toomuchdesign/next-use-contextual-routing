import { useRouter } from 'next/router';
import Post from '../../components/Post';
import { data } from '../../components/PostGrid';

const PostPage = ({ id }) => {
  const router = useRouter();
  const { postId } = router.query;
  return <Post id={id || postId} pathname={router.pathname} />;
};

export async function getStaticPaths() {
  return {
    paths: data.map((id) => ({
      params: {
        postId: String(id),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.postId,
    },
  };
}

export default PostPage;
