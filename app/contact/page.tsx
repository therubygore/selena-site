'use client';

import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    // Load Tally embed script
    const loadTallyScript = () => {
      const w = "https://tally.so/widgets/embed.js";
      const v = function() {
        if ("undefined" != typeof (window as any).Tally) {
          (window as any).Tally.loadEmbeds();
        } else {
          document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => {
            const iframe = e as HTMLIFrameElement;
            if (iframe.dataset.tallySrc) {
              iframe.src = iframe.dataset.tallySrc;
            }
          });
        }
      };

      if ("undefined" != typeof (window as any).Tally) {
        v();
      } else if (document.querySelector('script[src="' + w + '"]') == null) {
        const s = document.createElement("script");
        s.src = w;
        s.onload = v;
        s.onerror = v;
        document.body.appendChild(s);
      }
    };

    loadTallyScript();
  }, []);

  return (
    <div className="bg-background min-h-screen py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-accent mb-6 sm:mb-8 text-center">Contact Me</h1>
        
        {/* Tally Form Embed Container */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="mb-6">
            <iframe 
              data-tally-src="https://tally.so/embed/Y55VEv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="372" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="Contact form"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

