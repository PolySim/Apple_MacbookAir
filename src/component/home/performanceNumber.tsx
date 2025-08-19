const NumberPerformance = () => {
  return (
    <div className="flex justify-between mt-12 w-text">
      <img
        className="w-[152px] h-[152px] box-content pr-12 border-r border-black mr-12"
        src="https://www.apple.com/v/macbook-air-13-and-15-m2/b/images/overview/performance/performance_mx__uefa6ex4jkia_large_2x.jpg"
        alt="Apple M2 Chip"
      />
      <div className="flex justify-between w-[calc(100%-249px)]">
        <div>
          <p className="text-[19px] text-gray-500 font-medium">Up to</p>
          <p className="text-[72px] text-black font-semibold">1.4x</p>
          <p className="text-[19px] text-gray-500 font-medium">faster than</p>
          <p className="text-[19px] text-gray-500 font-medium">
            MacBook air (M1)<sup>2</sup>
          </p>
        </div>
        <div>
          <p className="text-[19px] text-gray-500 font-medium">Up to</p>
          <p className="text-[72px] text-black font-semibold">12x</p>
          <p className="text-[19px] text-gray-500 font-medium">
            faster than fastest
          </p>
          <p className="text-[19px] text-gray-500 font-medium">Intel-based</p>
          <p>
            MacBook Air<sup>3</sup>
          </p>
        </div>
        <div>
          <p className="text-[19px] text-gray-500 font-medium">Up to</p>
          <p className="text-[72px] text-black font-semibold">18 hrs</p>
          <p className="text-[19px] text-gray-500 font-medium">
            battery life<sup>1</sup>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NumberPerformance;
