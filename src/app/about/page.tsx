import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">About Overwatch</h1>
      <p className="mb-4 text-gray-700">
        Our mission is to enable open civic dialogue on critical public policy issues like pandemic preparedness, health systems resilience, and community-led action.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        alt="Community engagement"
        width={800}
        height={500}
        className="rounded-lg shadow-md mx-auto"
      />
    </div>
  );
}
