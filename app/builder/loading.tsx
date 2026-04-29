// app/builder/loading.tsx
export default function BuilderLoading() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header skeleton */}
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
          <div className="flex gap-3">
            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Two-column layout skeleton */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left column – editor skeleton */}
          <div className="bg-white rounded-lg shadow p-6 space-y-6">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-3"></div>
                <div className="space-y-2">
                  <div className="h-10 w-full bg-gray-100 rounded animate-pulse"></div>
                  <div className="h-10 w-full bg-gray-100 rounded animate-pulse"></div>
                  <div className="h-24 w-full bg-gray-100 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column – preview skeleton */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-4">
              <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mx-auto"></div>
              <div className="h-4 w-64 bg-gray-200 rounded animate-pulse mx-auto"></div>
              <div className="h-32 w-full bg-gray-100 rounded animate-pulse"></div>
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i}>
                    <div className="h-5 w-40 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 w-full bg-gray-100 rounded animate-pulse mt-1"></div>
                    <div className="h-3 w-3/4 bg-gray-100 rounded animate-pulse mt-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}