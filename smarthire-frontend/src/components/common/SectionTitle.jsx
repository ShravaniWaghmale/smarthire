export default function SectionTitle({
  badge,
  title,
  description,
}) {
  return (
    <div className="max-w-3xl mx-auto mb-12 text-center">

      <span className="inline-block px-4 py-2 text-sm font-medium text-blue-300 border rounded-full bg-blue-500/10 border-blue-500/20">

        {badge}

      </span>

      <h2 className="mt-5 text-4xl font-bold md:text-5xl">

        {title}

      </h2>

      <p className="mt-4 text-lg leading-8 text-gray-400">

        {description}

      </p>

    </div>
  );
}