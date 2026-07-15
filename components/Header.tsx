export function Header() {
  return (
    <header className="w-full border-b border-gray-100 bg-white py-4 shadow-sm z-10">
      <div className="flex items-center justify-center px-4">
        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21s-6.716-4.35-9.428-8.06C.79 10.31 1.2 6.6 4.1 4.86c2.36-1.42 5.1-.66 6.9 1.42.6.7 1 .7 1 .7s.4 0 1-.7c1.8-2.08 4.54-2.84 6.9-1.42 2.9 1.74 3.31 5.45 1.53 8.08C18.716 16.65 12 21 12 21z"
              fill="#5E969E"
            />
          </svg>
        </div>
        <h1 className="text-center text-lg font-bold tracking-tight text-primary sm:text-xl">
          瓦谷クリニック
        </h1>
      </div>
    </header>
  );
}
