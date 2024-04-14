export default function SkillsCard({ badges, children, heading }) {
  return (
    <section className="flex flex-col gap-8 lg:h-full lg:p-8 p-4 rounded-xl sm:gap-16 text-green-50">
      <h2>{heading}</h2>
      <p className="font-thin grow sm:text-lg">{children}</p>
      {badges && (
        <ul className="flex gap-4 items-center sm:text-2xl text-xl">
          {badges.map((badge, i) => (
            <li key={i}>{badge}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
