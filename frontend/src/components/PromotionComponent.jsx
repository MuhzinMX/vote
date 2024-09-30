const PromotionBanner = () => {
  return (
    <div className="flex items-center p-4 bg-gray-100 mt-5">
      <img
        src="../../assets/logo.jpg"
        alt="Company Logo"
        className="w-20 h-auto mr-4"
      />
      <div className="flex flex-col">
        <h2 className="text-md font-bold">Empower Target Technology </h2>
        <p className="text-sm text-gray-600">Transforming ideas into reality</p>
      </div>
    </div>
  );
};

export default PromotionBanner;
