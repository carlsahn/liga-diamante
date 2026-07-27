export default function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-xs uppercase tracking-[0.4em] text-blue-300">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-3xl font-black text-white">
        {title}
      </h2>
    </div>
  );
}