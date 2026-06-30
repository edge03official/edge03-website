type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="border border-edge-line bg-edge-black p-6 transition-colors hover:border-edge-soft">
      <p className="text-5xl font-semibold leading-none text-white">{value}</p>
      <p className="mt-5 max-w-44 text-sm leading-6 text-edge-soft">{label}</p>
    </div>
  );
}
