import React from 'react';
import Link from 'next/link';
import styles from './SquaredLink.module.css';

export default function SquaredLink({
  href,
  as,
  style,
  children,
}: {
  href: string;
  as?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <Link className={styles.postCard} href={href} as={as} style={style}>
      {children}
    </Link>
  );
}
