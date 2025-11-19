import Image from 'next/image';

// Portfolio image filenames (they should be in public/portfolio/)
// Note: hero.JPG is excluded as it's used for the hero banner
const portfolioImages: string[] = [
  'IMG_6778.JPG',
  'IMG_7516.jpg',
  'IMG_7960.JPG',
  'IMG_8278.JPG',
  'IMG_8279.JPG',
  'IMG_0238.JPG',
  'IMG_2625.JPG',
  'IMG_1636.JPG',
  'IMG_1979.JPG',
  'IMG_4210.JPG',
  'IMG_4320.JPG',
  'IMG_4344.JPG',
  'Ryan.jpg',
  '3CE2CF64-331A-46B0-A411-6A30B829215F.jpg',
  '9B79EB2A-1601-4C36-B996-A81D166CE086.jpg',
  'barnish_colortemp_femalestudy.jpeg',
  'IMG_4877.PNG',
  'IMG_4879.PNG',
  'IMG_4880.PNG',
];

export default function PortfolioGrid() {
  // Filter out hero image from portfolio grid (case-insensitive)
  const filteredImages = portfolioImages.filter(img => {
    const lowerImg = img.toLowerCase();
    return lowerImg !== 'hero.jpg' && lowerImg !== 'hero.jpeg' && lowerImg !== 'hero.png' && img !== 'hero.JPG';
  });
  
  // If no images are added yet, show placeholders
  const hasImages = filteredImages.length > 0;
  const items = hasImages 
    ? filteredImages.map((img, i) => ({
        id: i + 1,
        image: `/portfolio/${img}`,
        alt: `Portfolio item ${i + 1}`,
      }))
    : Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        image: null,
        alt: `Portfolio item ${i + 1}`,
      }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-0 pb-4 sm:pb-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer relative"
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <span className="text-sm">Portfolio Image {item.id}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

