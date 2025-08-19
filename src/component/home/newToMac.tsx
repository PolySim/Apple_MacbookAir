import Tutorials from "./tutorial";

const NewToMac = () => {
  return (
    <div className="flex flex-col items-center w-full mt-12 bg-bg-image overflow-x-hidden">
      <h1 className="text-[48px] font-medium text-black w-text mt-12">
        New to Mac?
      </h1>
      <Tutorials />
    </div>
  );
};

export default NewToMac;
