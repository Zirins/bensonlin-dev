// src/components/ExperienceCard.tsx

type ExperienceItem = {
  title: string;
  company?: string;
  dateRange: string;
  description: string[];
  techUsed?: string;
};

export default function ExperienceCard({
  title,
  company,
  dateRange,
  description,
  techUsed,
}: ExperienceItem) {
  return (
    <div className="relative pl-8 border-l-2 border-purple-500 dark:border-purple-400 mb-10">
      <div className="absolute left-[-6px] top-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-white dark:border-gray-900" />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-purple-300 mb-1 italic">{company}</p>
      <p className="text-xs text-gray-400 mb-2">{dateRange}</p>
      <ul className="list-disc ml-4 text-sm text-gray-300 space-y-1">
        {description.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
      {techUsed && (
        <p className="text-xs italic text-gray-400 mt-2">
          (Used: <span className="text-purple-200">{techUsed}</span>)
        </p>
      )}
    </div>
  );
}
