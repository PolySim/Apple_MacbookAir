const ButtonGoInside = () => {
  return (
    <div className="w-text mt-12 font-medium">
      <div className="flex justify-center items-center w-fit border-2 border-black rounded-full p-3 transition-all duration-300 hover:bg-black hover:text-white">
        Go inside M2
        <svg
          className="ml-2"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z"></path>
          <path d="M12 8.25v7.5"></path>
          <path d="M15.75 12h-7.5"></path>
        </svg>
      </div>
    </div>
  );
};

export default ButtonGoInside;
