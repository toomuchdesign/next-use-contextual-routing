import styles from 'demo/index-styles.module.css';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import Post from 'demo/components/Post';
import PostGrid from 'demo/components/PostGrid';
import InitialStateGrid from 'demo/components/InitialStateGrid';
import { useContextualRouting } from '../../src';
export const backgroundColors = {
  1: '#9b55b7',
  2: '#e77e22',
  3: '#2c97dd',
};

Modal.setAppElement('#__next');

const Index = () => {
  const router = useRouter();
  const pageState = router.query.state;
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
            id={router.query.postId}
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
