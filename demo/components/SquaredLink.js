import React from 'react';
import Link from 'next/link';
import styles from './SquaredLink.module.css';

export default function SquaredLink({
  small,
  href,
  as,
  scroll,
  shallow,
  ...props
}) {
  console.log(props);
  return (
    <Link href={href} as={as} scroll={scroll} shallow={shallow}>
      <a className={styles.postCard} {...props} />
    </Link>
  );
}
