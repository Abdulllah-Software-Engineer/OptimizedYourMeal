
const Page404 = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-gray-200 to-gray-400">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-lg max-w-md text-center text-white">
        <h1 className="text-7xl m-0">404</h1>
        <h5 className="text-xl mt-2 mb-2">Page Not Found</h5>
        <p className="text-lg mt-5 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-all"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default Page404;
