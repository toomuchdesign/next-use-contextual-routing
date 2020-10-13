import styles from './styles.module.css';
import PostGrid from './PostGrid';

const Post = ({ id, pathname, pageState, showPostGrid }) => {
  return (
    <div className={styles.post}>
      <h2>I am the post {id}</h2>
      <h3>my pathname is: {pathname}</h3>
      {pageState && (
        <h3>Initial page state is preserved and is: {pageState}</h3>
      )}
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
