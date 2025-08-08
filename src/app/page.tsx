// src/app/page.tsx
export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-6"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')` }}
    >
      <h1 className="text-5xl font-extrabold drop-shadow-lg">Welcome to Overwatch</h1>
      <p className="mt-4 text-xl max-w-xl text-center drop-shadow-md">
        A platform that sees far, anticipates and responds.
      </p>
    </div>
  );
}
