import React from 'react';
import Link from 'next/link';
import styles from './SquaredLink.module.css';

export default function SquaredLink({
  href,
  as,
  scroll,
  shallow,
  style,
  children,
}) {
  return (
    <Link
      className={styles.postCard}
      href={href}
      as={as}
      scroll={scroll}
      shallow={shallow}
      style={style}
    >
      {children}
    </Link>
  );
}
