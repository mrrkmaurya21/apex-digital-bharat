import { Zap, FileText, CheckCircle2 } from "lucide-react";

export function TrustStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted ${className}`}
    >
      <span className="inline-flex items-center gap-1.5">
        <Zap className="w-3.5 h-3.5 text-accent" />
        Reply within 1 hour
      </span>
      <span className="inline-flex items-center gap-1.5">
        <FileText className="w-3.5 h-3.5 text-accent" />
        Quote within 48 hours
      </span>
      <span className="inline-flex items-center gap-1.5">
        <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
        No-obligation discovery call
      </span>
    </div>
  );
}
