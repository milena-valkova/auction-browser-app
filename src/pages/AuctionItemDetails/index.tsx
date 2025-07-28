const AuctionItemDetails = () => {
  return (
    <div className="flex flex-col min-h-3/4 md:flex-row items-center justify-center bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 max-w-5xl mx-auto my-6">
      {/* Left Side - Text Content */}
      <div className="p-10 md:w-1/2 bg-white">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
          Stamps · Buy Now
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 leading-snug">
          Stamps Collection ·<br />
          Buy Now
        </h1>
        <p className="mt-6 text-gray-700 text-base">
          Stamps at your fingertips, the next addition to your collection is
          just a click away. A guaranteed win with Buy Now.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 p-6 flex justify-center bg-gray-50">
        <img
          loading="lazy"
          src="/path/to/stamp-image.png" // Replace with actual path
          alt="Stamp Collection"
          className="max-w-full h-auto rounded-md"
        />
      </div>

      {/* Green background stripe */}
      <div className="absolute bottom-0 w-full h-24 bg-emerald-500 z-0" />
    </div>
  );
};

export default AuctionItemDetails;
