// src/components/ProjectCard.tsx
type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  githubLink: string;
  liveDemoLink?: string;
  imageSrc?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  githubLink,
  liveDemoLink,
  imageSrc,
}: ProjectCardProps) {
  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-900 hover:shadow-xl transition duration-300">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={`${title} screenshot`}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 text-xs mb-4">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 px-2 py-1 rounded"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          {liveDemoLink && (
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
