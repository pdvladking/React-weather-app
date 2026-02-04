function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 font-sans text-gray-800 p-6">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
export default Layout;
