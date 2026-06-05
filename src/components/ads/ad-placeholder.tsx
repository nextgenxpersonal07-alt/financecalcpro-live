
import { Card } from "@/components/ui/card";

export function AdPlaceholder() {
  return (
    <Card className="bg-muted/50 border-dashed flex items-center justify-center min-h-[250px] p-4 text-center">
      <div className="space-y-1">
        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Advertisement</p>
        <p className="text-xs text-muted-foreground italic">Your Ad Here</p>
      </div>
    </Card>
  );
}
