import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-button/30 w-full px-4 sm:px-6 lg:px-[200px] py-6 sm:py-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        {/* Top section with social */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end mb-6 gap-4 sm:gap-0">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="mailto:selenasketches@gmail.com" 
              className="w-10 h-10 rounded-full bg-text flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Email"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-background"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/selenasketches" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#E1306C] flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* Copyright */}
        <div className="text-center sm:text-right text-sm text-gray-600">
          © 2025 Selena Sketches
        </div>
      </div>
    </footer>
  );
}

