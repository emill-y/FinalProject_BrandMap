

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} BrandMap, Inc.</p>
        <div className="space-x-6 mt-2 sm:mt-0">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
