/**
 * TypeBadge Component
 *
 * Displays content type badge with appropriate styling
 */

interface TypeBadgeProps {
  type: string;
}

export function TypeBadge({ type }: TypeBadgeProps) {
  const getTypeLabel = (type: string) => {
    switch (type.toLowerCase()) {
      case 'post': return 'Post';
      case 'blog': return 'Blog';
      case 'work':
      case 'portfolio': return 'Portfolio';
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'post': return '#4ECDC4';
      case 'blog': return '#F38181';
      case 'work':
      case 'portfolio': return '#ffa000';
      default: return '#7c521b';
    }
  };

  const color = getTypeColor(type);

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 10px',
        fontSize: '11px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        borderRadius: '12px',
        backgroundColor: `${color}15`,
        color: color,
        border: `1px solid ${color}40`,
      }}
    >
      {getTypeLabel(type)}
    </span>
  );
}
