type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="border border-edge-line bg-edge-black p-6">
      <p className="text-4xl font-semibold text-white">{value}</p>
      <p className="mt-3 text-sm text-edge-muted">{label}</p>
    </div>
  );
}
