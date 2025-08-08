import Image from 'next/image';
import Link from 'next/link';

export default function GetInvolvedPage() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Get Involved</h1>
      <p className="mb-4 text-gray-700">
        Join our community of changemakers and be part of shaping a safer, more prepared future.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1581091870622-3be1b0b6b76b"
        alt="Volunteer action"
        width={800}
        height={500}
        className="rounded-lg shadow-md mx-auto mb-6"
      />
      <Link href="/contact">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Contact Us
        </button>
      </Link>
    </div>
  );
}
