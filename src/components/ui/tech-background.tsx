export default function TechBackground() {
  return (
    <div className="fixed inset-0 -z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Geometric lines and shapes */}
      <div className="absolute inset-0 opacity-20">
        {/* Horizontal lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        
        {/* Vertical lines */}
        <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
        <div className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent via-indigo-400 to-transparent"></div>
        <div className="absolute top-0 left-3/4 h-full w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-45">
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent"></div>
          </div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400/20 rounded-lg transform rotate-12 blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-indigo-400/20 rounded-full blur-sm"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border border-cyan-400/20 transform rotate-45 blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-blue-400/20 rounded-lg blur-sm"></div>
        
        {/* Additional shapes for full page coverage */}
        <div className="absolute top-96 left-1/4 w-16 h-16 border border-blue-400/20 rounded-lg blur-sm"></div>
        <div className="absolute top-[600px] right-1/4 w-20 h-20 border border-indigo-400/20 transform rotate-30 blur-sm"></div>
        <div className="absolute top-[800px] left-1/6 w-12 h-12 border border-cyan-400/20 rounded-full blur-sm"></div>
        <div className="absolute top-[1000px] right-1/6 w-24 h-24 border border-blue-400/20 transform rotate-15 blur-sm"></div>
        <div className="absolute top-[1200px] left-1/3 w-18 h-18 border border-indigo-400/20 rounded-lg blur-sm"></div>
        <div className="absolute top-[1400px] right-1/3 w-16 h-16 border border-cyan-400/20 transform rotate-45 blur-sm"></div>
        
        {/* Code-like elements scattered throughout */}
        <div className="absolute top-1/3 right-1/4 text-blue-400/10 text-xs font-mono">
          &lt;/&gt;
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-indigo-400/10 text-xs font-mono">
          { }
        </div>
        <div className="absolute top-1/2 right-1/3 text-cyan-400/10 text-xs font-mono">
          [ ]
        </div>
        <div className="absolute top-[500px] left-1/5 text-blue-400/10 text-xs font-mono">
          &lt;div&gt;
        </div>
        <div className="absolute top-[700px] right-1/5 text-indigo-400/10 text-xs font-mono">
          function()
        </div>
        <div className="absolute top-[900px] left-1/4 text-cyan-400/10 text-xs font-mono">
          const x = 1;
        </div>
        <div className="absolute top-[1100px] right-1/4 text-blue-400/10 text-xs font-mono">
          import React
        </div>
        <div className="absolute top-[1300px] left-1/5 text-indigo-400/10 text-xs font-mono">
          useEffect()
        </div>
      </div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Subtle blur overlay */}
      <div className="absolute inset-0 bg-background/5 backdrop-blur-[1px]"></div>
    </div>
  );
}


