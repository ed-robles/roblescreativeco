const Gallery = () => {
  return (
    <div className="text-center md:w-[800px] bg-[#4FBBFF] shadow-md">
      <div className="p-10 m-4 border border-white">
        <p className="text-4xl font-semibold">Brand Identity</p>
        <p className="pt-2 text-sm">
          Build a strong brand identity that resonates with your customers.
        </p>
      </div>
      <div className="p-10 m-4 border border-white">
        <p className="text-4xl font-semibold">Social Media Campaign</p>
        <p className="pt-2 text-sm">
          Engage your audience with creative and impactful social media
          campaigns.
        </p>
      </div>
      <div className="p-10 m-4 border border-white">
        <p className="text-4xl font-semibold">E-Commerce</p>
        <p className="pt-2 text-sm">
          Start selling online with a custom e-commerce website.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
