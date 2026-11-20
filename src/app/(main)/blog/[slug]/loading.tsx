export default function BlogSlugLoaading() {
  return (
    <main>
      <header className="bg-tertiary py-14">
        <div className="container flex flex-col items-center m-auto px-6 animate-pulse">
          <div className="h-4 w-40 bg-gray-300 rounded mb-8" />
          <div className="h-10 w-3/4 bg-gray-300 rounded mb-4" />
          <div className="h-4 w-48 bg-gray-300 rounded" />
        </div>
      </header>
      <article className="container m-auto px-6 py-16">
        <div className="max-w-4xl mx-auto animate-pulse">
          <div className="aspect-video bg-gray-200 rounded-xl mb-10" />
          <div className="h-5 bg-gray-200 rounded mb-4" />
          <div className="h-5 bg-gray-200 rounded mb-4" />
          <div className="h-5 w-2/3 bg-gray-200 rounded" />
        </div>
      </article>
    </main>
  );
}
