export function Footer() {
  return (
    <footer className="border-t bg-white mt-auto">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-6">
            <span>&copy; 2025 Real Estate Transaction Management</span>
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Help Center</a>
            <a href="#" className="hover:text-gray-900">Contact Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
