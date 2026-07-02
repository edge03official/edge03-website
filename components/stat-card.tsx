import { renderBrandText } from "@/components/wordmark";

type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="border border-edge-line bg-white/70 p-6 shadow-edge-soft transition-colors hover:border-edge-navyLight">
      <p className="type-stat text-edge-navy">{renderBrandText(value)}</p>
      <p className="type-small mt-5 max-w-44 text-edge-soft">{renderBrandText(label)}</p>
    </div>
  );
}
