import React from 'react';
import { CheckCircle2, Clock, Calendar, BookOpen, Users, ArrowRight } from 'lucide-react';

const getStatusConfig = (status: string) => {
  if (status.includes('Published') || status.includes('Completed') || status.includes('Data complete')) {
    return { icon: CheckCircle2, color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-100' };
  }
  if (status.includes('Ongoing') || status.includes('Under publication')) {
    return { icon: Clock, color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-100' };
  }
  return { icon: Calendar, color: 'text-orange-700', bg: 'bg-orange-50', border: 'border-orange-100' };
};

export const EvidenceGrid = ({ data }: { data: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4">
      {data.map((item, i) => {
        const { icon: Icon, color, bg, border } = getStatusConfig(item.status);
        return (
          <div key={i} className={`p-5 rounded-2xl border ${border} bg-white shadow-sm flex flex-col relative overflow-hidden group print:break-inside-avoid`}>
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-30 ${bg} -z-10 transition-transform group-hover:scale-110`} />
            
            <div className="flex justify-between items-start mb-3 gap-2">
              <h4 className="font-semibold text-[#1d1d1f] text-[15px] leading-tight">{item.study}</h4>
              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${bg} ${color} whitespace-nowrap`}>
                <Icon className="w-3 h-3" />
                {item.status}
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-[#86868b] mb-4 font-medium">
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                {item.n}
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span className="truncate max-w-[120px]" title={item.publication}>{item.publication}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-[14px] font-bold text-[#1d1d1f] leading-snug">
                {item.finding}
              </p>
            </div>
            
            <div className="mt-auto pt-4 border-t border-gray-50">
              <div className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <p className="text-[13px] text-[#515154] leading-relaxed">
                  {item.implications}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
