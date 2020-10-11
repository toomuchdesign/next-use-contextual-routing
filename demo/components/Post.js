import styles from './styles.module.css';
import PostGrid from './PostGrid';

const Post = ({ id, pathname, pageState, showPostGrid }) => {
  return (
    <div className={styles.post}>
      <p>
        I am the post {id}; my pathname is: {pathname}
      </p>
      {pageState && <p>Page state is: {pageState}</p>}
      {showPostGrid && (
        <>
          <p>Go to another post staying in contextual navigation:</p>
          <PostGrid small />
        </>
      )}
    </div>
  );
};

export default Post;
