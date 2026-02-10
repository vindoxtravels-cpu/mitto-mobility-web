interface LogoPlaceholderProps {
  name: string;
  className?: string;
}

export default function LogoPlaceholder({ name, className = "" }: LogoPlaceholderProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(word => word.charAt(0)).join('').toUpperCase().slice(0, 2);
  };

  const getBrandColor = (name: string) => {
    const colors: { [key: string]: string } = {
      'Google': '#4285F4',
      'Microsoft': '#00A4EF',
      'Amazon': '#FF9900',
      'Apple': '#000000',
      'Meta': '#0668E1',
      'Netflix': '#E50914',
      'Spotify': '#1DB954',
      'Adobe': '#FF0000',
      'IBM': '#054ADA',
      'Oracle': '#F80000',
      'Salesforce': '#00A1E0',
      'LinkedIn': '#0077B5',
      'Tesla': '#CC0000',
      'Twitter': '#1DA1F2',
      'Uber': '#000000',
      'Airbnb': '#FF5A5F',
      'Slack': '#4A154B',
      'Dropbox': '#0061FF',
      'Zoom': '#2D8CFF',
    };
    return colors[name] || '#6B7280';
  };

  return (
    <div
      className={`w-full h-full flex items-center justify-center text-white font-bold text-sm ${className}`}
      style={{ 
        backgroundColor: getBrandColor(name),
        boxShadow: `0 0 0 2px rgba(255,255,255,0.35) inset`
      }}
      aria-label={`Company logo placeholder for ${name}`}
    >
      {getInitials(name)}
    </div>
  );
}
