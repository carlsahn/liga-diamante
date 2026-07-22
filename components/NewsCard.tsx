type NewsCardProps = {
  title: string;
  description: string;
};

export default function NewsCard({
  title,
  description,
}: NewsCardProps) {
  return (
    <article>
      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
}
