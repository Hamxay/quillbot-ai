interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderColor: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  borderColor,
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col px-4 border-l-2`}
      style={{ borderLeftColor: borderColor }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold text-xl mb-2 text-black" >{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
}
