import { PlaceholderBlock } from "@/components/placeholder-block";

export function LogoGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {Array.from({ length: 6 }, (_, index) => (
        <PlaceholderBlock
          key={index}
          label={`Client logo ${index + 1}`}
          height="sm"
          variant="logo"
        />
      ))}
    </div>
  );
}
