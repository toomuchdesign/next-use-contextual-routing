import styles from '../index.module.css';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import Post from '../components/Post';
import PostGrid from '../components/PostGrid';
import InitialStateGrid from '../components/InitialStateGrid';
import { useContextualRouting } from '../../src';
export const backgroundColors = {
  1: '#9b55b7',
  2: '#e77e22',
  3: '#2c97dd',
} as const;

Modal.setAppElement('#__next');

const Index = () => {
  const router = useRouter();
  const pageState = Array.isArray(router.query.state)
    ? undefined
    : router.query.state;
  const postId = Array.isArray(router.query.postId)
    ? undefined
    : router.query.postId;
  const { returnHref } = useContextualRouting();

  return (
    <div
      className={styles.background}
      style={{ backgroundColor: backgroundColors[pageState] }}
    >
      <div className={styles.content}>
        <Modal
          isOpen={!!router.query.postId}
          onRequestClose={() => router.push(returnHref)}
          contentLabel="Post modal"
          style={{
            overlay: {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            },
          }}
        >
          <Post
            id={postId}
            pathname={router.pathname}
            pageState={pageState}
            showPostGrid
          />
        </Modal>
        <h2>Set initial page state:</h2>
        <InitialStateGrid />
        <h2>...then start contextual navigation!</h2>
        <PostGrid />
      </div>
    </div>
  );
};

export default Index;
