/**
 * PublicContentHeader - Reusable header for SSR detail pages
 * Used in: /ssr/post/[id], /ssr/blog/[slug], /ssr/work/[id]
 */

import Image from 'next/image';
import styles from './PublicContentHeader.module.css';

interface PublicContentHeaderProps {
  type: string; // "Post", "Blog", "Work"
  title: string;
  creator: {
    name: string;
    avatar?: string;
    avatar_small?: string;
    avatar_medium?: string;
  };
  date: string;
  views?: number;
  readingTime?: number; // in minutes
  engagement?: {
    likes?: number;
    comments?: number;
  };
}

export default function PublicContentHeader({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  title,
  creator,
  date,
  views,
  readingTime,
  engagement,
}: PublicContentHeaderProps) {
  const avatarUrl = creator.avatar_medium || creator.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(creator.name)}&background=ffa000&color=fff&size=80`;

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.authorRow}>
        <Image
          src={avatarUrl}
          alt={creator.name}
          width={48}
          height={48}
          className={styles.avatar}
        />

        <div>
          <p className={styles.authorName}>{creator.name}</p>
          <div className={styles.meta}>
            <span className={styles.metaItem}>{date}</span>

            {readingTime !== undefined && (
              <>
                <span className={styles.metaDot}>•</span>
                <span className={styles.metaItem}>{readingTime} min read</span>
              </>
            )}

            {views !== undefined && (
              <>
                <span className={styles.metaDot}>•</span>
                <span className={styles.metaItem}>👁 {views.toLocaleString()} views</span>
              </>
            )}
          </div>
        </div>
      </div>

      {engagement && (engagement.likes !== undefined || engagement.comments !== undefined) && (
        <div className={styles.engagementBar}>
          {engagement.likes !== undefined && (
            <div className={styles.statPillAccent}>
              <span className={styles.statIcon}>♥</span>
              <span>{engagement.likes.toLocaleString()}</span>
            </div>
          )}
          {engagement.comments !== undefined && (
            <div className={styles.statPillMuted}>
              <span className={styles.statIcon}>💬</span>
              <span>{engagement.comments.toLocaleString()}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
