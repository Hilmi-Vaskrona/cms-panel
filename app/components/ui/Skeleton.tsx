"use client";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return <div className={`skeleton ${className}`} />;
}

export function StatCardSkeleton() {
  return (
    <div className="cms-card p-5">
      <div className="flex items-start justify-between mb-3">
        <Skeleton className="w-11 h-11 rounded-xl" />
        <Skeleton className="w-16 h-6 rounded-full" />
      </div>
      <Skeleton className="h-8 w-20 mb-2" />
      <Skeleton className="h-4 w-28" />
    </div>
  );
}

export function TableRowSkeleton({ cols = 4 }: { cols?: number }) {
  return (
    <tr>
      {Array.from({ length: cols }).map((_, i) => (
        <td key={i} className="py-4 px-4">
          <Skeleton className="h-4 w-full max-w-[120px]" />
        </td>
      ))}
    </tr>
  );
}

export function CardSkeleton() {
  return (
    <div className="cms-card p-5">
      <div className="flex items-start justify-between mb-3">
        <Skeleton className="w-12 h-12 rounded-xl" />
        <Skeleton className="w-14 h-5 rounded-full" />
      </div>
      <Skeleton className="h-5 w-3/4 mb-2" />
      <Skeleton className="h-3 w-full mb-3" />
      <Skeleton className="h-3 w-2/3 mb-3" />
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <Skeleton className="h-3 w-20" />
        <div className="flex gap-1">
          <Skeleton className="w-7 h-7 rounded-lg" />
          <Skeleton className="w-7 h-7 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
