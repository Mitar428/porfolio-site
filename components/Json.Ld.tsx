

export default function JsonLd({
  podaci,
}: {
  podaci: Record<string, unknown>;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
       
        __html: JSON.stringify(podaci).replace(/</g, "\\u003c"),
      }}
    />
  );
}