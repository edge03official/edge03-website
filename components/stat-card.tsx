type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="border border-edge-line bg-edge-black p-6 transition-colors hover:border-edge-soft">
      <p className="type-stat text-white">{value}</p>
      <p className="type-small mt-5 max-w-44 text-edge-soft">{label}</p>
    </div>
  );
}
