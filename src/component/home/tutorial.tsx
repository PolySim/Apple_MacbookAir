import { cn } from "@/lib/utils";
import { HandleHorizontalScroll, HandleIsClickable, IsClickable } from "@/type";
import { useRef, useState } from "react";

const Tutorials = () => {
  const padding = Math.max(
    0.075 * window.innerWidth,
    (window.innerWidth - 980) / 2
  );
  const tutorialsRef = useRef<HTMLDivElement>(null);

  const [isClickable, setIsClickable] = useState<IsClickable>({
    left: false,
    right: true,
  });

  const handleIsClickable: HandleIsClickable = (element) => {
    if (element) {
      element.scrollLeft === 0
        ? setIsClickable((curr) => ({ ...curr, left: false }))
        : setIsClickable((curr) => ({ ...curr, left: true }));
      const scrollRight =
        element.scrollWidth - window.innerWidth - element.scrollLeft;
      scrollRight === 0
        ? setIsClickable((curr) => ({ ...curr, right: false }))
        : setIsClickable((curr) => ({ ...curr, right: true }));
    }
  };

  const handleHorizontalScroll: HandleHorizontalScroll = (element, step) => {
    if (element) {
      element.scrollLeft += step;
    }
    handleIsClickable(element);
  };

  return (
    <>
      <div
        ref={tutorialsRef}
        className="flex box-border w-full overflow-x-scroll scroll-smooth scroll-snap-type-x-mandatory disable-scrollbar mt-12"
        style={{
          scrollPadding: `0 ${padding}px`,
        }}
        onScroll={() => handleIsClickable(tutorialsRef.current)}
      >
        <div
          className="flex gap-x-6 w-max"
          style={{ padding: `0 ${padding}px` }}
        >
          <div className="w-[310px] h-[550px] scroll-snap-align-start">
            <img
              className="w-full h-[300px] object-cover"
              src="https://www.apple.com/v/macbook-air-13-and-15-m2/b/images/overview/switchers/new_mac_iphone__gjnuxvn4oz2a_large_2x.jpg"
              alt=""
            />
            <p className="mt-6 text-gray-500 text-[21px] leading-6">
              <span className="text-black font-medium">Mac + iPhone.</span> Mac
              is designed to be just as easy to learn as iPhone. And whether
              you’re chatting with friends in Messages, transferring files with
              AirDrop, or locating devices with Find My — when you use Mac with
              iPhone, they work even better together.
            </p>
          </div>
          <div className="w-[310px] h-[550px] scroll-snap-align-start">
            <img
              className="w-full h-[300px] object-cover"
              src="https://www.apple.com/v/macbook-air-13-and-15-m2/b/images/overview/switchers/new_icloud__byry26m5o3py_large_2x.jpg"
              alt=""
            />
            <p className="mt-6 text-gray-500 text-[21px] leading-6">
              <span className="text-black font-medium">iCloud.</span> With
              iCloud, you can store all your photos, contacts, and documents so
              they’re available on all your devices. Start a to-do list on your
              iPhone and check off items on your Mac — and so much more.
            </p>
          </div>
          <div className="w-[310px] h-[550px] scroll-snap-align-start">
            <img
              className="w-full h-[300px] object-cover"
              src="https://www.apple.com/v/macbook-air-13-and-15-m2/b/images/overview/switchers/new_migration__ghkh7thxrcqe_large_2x.jpg"
              alt=""
            />
            <p className="mt-6 text-gray-500 text-[21px] leading-6">
              <span className="text-black font-medium">
                Migration Assistant.
              </span>{" "}
              Easily move files, apps, and more from your old PC or Mac. And if
              you need any help, Apple Support is always just an online chat,
              phone call, or in-store appointment away.
            </p>
          </div>
          <div className="w-[310px] h-[550px] scroll-snap-align-start">
            <img
              className="w-full h-[300px] object-cover"
              src="https://www.apple.com/v/macbook-air-13-and-15-m2/b/images/overview/switchers/new_powerful_apps__tqozueeskxeu_large_2x.jpg"
              alt=""
            />
            <p className="mt-6 text-gray-500 text-[21px] leading-6">
              <span className="text-black font-medium">
                Powerful apps built in.
              </span>{" "}
              Mac comes with apps like FaceTime, Freeform, Photos, and Keynote
              that let you get to work creating and collaborating on your next
              big idea.
            </p>
          </div>
          <div className="w-[310px] h-[550px] scroll-snap-align-start">
            <div className="flex flex-col justify-center w-[310px] h-[300px] pl-12 bg-white">
              <div className="flex items-center">
                <svg
                  className="mr-1.5 text-lime-500 stroke-[4px]"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.5 6 9 18l-4.5-4.5"></path>
                </svg>
                <p className="text-[32px] font-medium text-black">Easy</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="mr-1.5 text-lime-500 stroke-[4px]"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.5 6 9 18l-4.5-4.5"></path>
                </svg>
                <p className="text-[32px] font-medium text-black">Powerful</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="mr-1.5 text-lime-500 stroke-[4px]"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.5 6 9 18l-4.5-4.5"></path>
                </svg>
                <p className="text-[32px] font-medium text-black">Amazing</p>
              </div>
              <div>
                <p className="text-[32px] font-medium text-black">
                  Mac does <span className="font-medium">that.</span>
                </p>
              </div>
            </div>
            <p className="mt-6 text-gray-500 text-[21px] leading-6">
              <span className="text-black font-medium">
                Yep, Mac does that.
              </span>{" "}
              It’s not just MacBook Air. Every Mac is designed to be this easy,
              powerful, and amazing.
            </p>
            <p className="mt-6 text-blue-500 text-[19px] cursor-pointer hover:underline">
              Learn more
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-text my-12">
        <div
          className={cn(
            "w-[38px] h-[38px] rounded-full bg-gray-200 flex items-center justify-center cursor-pointer mr-2",
            {
              "opacity-100": isClickable.left,
              "opacity-20": !isClickable.left,
            }
          )}
          onClick={() => handleHorizontalScroll(tutorialsRef.current, -300)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="stroke-[2px] text-gray-500"
          >
            <path d="M15.375 5.25 8.625 12l6.75 6.75"></path>
          </svg>
        </div>
        <div
          className={cn(
            "w-[38px] h-[38px] rounded-full bg-gray-200 flex items-center justify-center cursor-pointer ml-2",
            {
              "opacity-100": isClickable.right,
              "opacity-20": !isClickable.right,
            }
          )}
          onClick={() => handleHorizontalScroll(tutorialsRef.current, 300)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="stroke-[2px] text-gray-500"
          >
            <path d="m8.625 5.25 6.75 6.75-6.75 6.75"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Tutorials;

/**
 * export const NavIntoTutorial = styled.div<{
  clickable: boolean;
  first?: boolean;
}>`
  opacity: ${(props) => (props.clickable ? "1" : "0.2")};
  background-color: rgba(210, 210, 215, 0.64);
  color: ${colorGray};
  margin-right: ${(props) => (props.first ? "18px" : "0")};

  :hover {
    background-color: ${(props) =>
      props.clickable
        ? "rgba(223,223,227,.6976)"
        : "rgba(210, 210, 215, 0.64)"};
  }
`;

 */
