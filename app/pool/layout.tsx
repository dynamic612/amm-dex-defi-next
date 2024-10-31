export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block min-w-[400] text-center justify-between">
        {children}
      </div>
    </section>
  );
}
