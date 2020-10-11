import Link from 'next/link';
import styles from './styles.module.css';
import { useContextualRouting } from 'src';
export const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function PostGrid({ small }) {
  const { makeContextualHref } = useContextualRouting();

  return (
    <div className={styles.postCardGridWrapper}>
      <div
        className={[
          styles.postCardGrid,
          small && styles.postCardGrid__small,
        ].join(' ')}
      >
        {data.map((id, index) => (
          <Link
            key={index}
            href={makeContextualHref({ postId: id })}
            as={`/post/${id}`}
          >
            <a
              className={[
                styles.postCard,
                small && styles.postCard__small,
              ].join(' ')}
            >
              {id}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
