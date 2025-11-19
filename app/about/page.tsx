import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-background min-h-screen py-8 sm:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* Left Column - Image */}
          <div className="md:col-span-1">
            <div className="relative rounded-lg aspect-[3/4] overflow-hidden">
              <Image
                src="/selena.png"
                alt="Selena"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="md:col-span-2">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-accent mb-6">About Me!</h1>
            <div className="prose prose-lg max-w-none text-text">
              <p className="mb-4">
                Selena B is an illustration junior at Moore College of Art and Design, 
                anticipating graduating in 2024. She often works digitally in Procreate, creating 
                pieces that capture serenity and hope with a soft color palette and delicate poses.
              </p>
              <p>
                After graduation, she plans on becoming a tattoo artist, who creates reminders of 
                inner strength and hope for the client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

