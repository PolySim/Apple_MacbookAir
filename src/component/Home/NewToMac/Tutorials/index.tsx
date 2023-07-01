import { TutorialsStyle } from "@/styled";
import { HandleIsClickable, TutorialsProps } from "@/type";
import { useRef, useState } from "react";
import { NavIntoTutorial } from "@/styled";
import { IsClickable, HandleHorizontalScroll } from "@/type";

export default function Tutorials({ padding }: TutorialsProps): JSX.Element {
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
      <TutorialsStyle
        ref={tutorialsRef}
        padding={padding}
        onScroll={() => handleIsClickable(tutorialsRef.current)}
      >
        <div>
          <div>
            <img
              src="https://www.apple.com/v/macbook-air-13-and-15-m2/b/images/overview/switchers/new_mac_iphone__gjnuxvn4oz2a_large_2x.jpg"
              alt=""
            />
            <p>
              <span>Mac + iPhone.</span> Mac is designed to be just as easy to
              learn as iPhone. And whether you’re chatting with friends in
              Messages, transferring files with AirDrop, or locating devices
              with Find My — when you use Mac with iPhone, they work even better
              together.
            </p>
          </div>
          <div>
            <img
              src="https://www.apple.com/v/macbook-air-13-and-15-m2/b/images/overview/switchers/new_icloud__byry26m5o3py_large_2x.jpg"
              alt=""
            />
            <p>
              <span>iCloud.</span> With iCloud, you can store all your photos,
              contacts, and documents so they’re available on all your devices.
              Start a to-do list on your iPhone and check off items on your Mac
              — and so much more.
            </p>
          </div>
          <div>
            <img
              src="https://www.apple.com/v/macbook-air-13-and-15-m2/b/images/overview/switchers/new_migration__ghkh7thxrcqe_large_2x.jpg"
              alt=""
            />
            <p>
              <span>Migration Assistant.</span> Easily move files, apps, and
              more from your old PC or Mac. And if you need any help, Apple
              Support is always just an online chat, phone call, or in-store
              appointment away.
            </p>
          </div>
          <div>
            <img
              src="https://www.apple.com/v/macbook-air-13-and-15-m2/b/images/overview/switchers/new_powerful_apps__tqozueeskxeu_large_2x.jpg"
              alt=""
            />
            <p>
              <span>Powerful apps built in.</span> Mac comes with apps like
              FaceTime, Freeform, Photos, and Keynote that let you get to work
              creating and collaborating on your next big idea.
            </p>
          </div>
          <div>
            <div>
              <div>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.5 6 9 18l-4.5-4.5"></path>
                </svg>
                <p>Easy</p>
              </div>
              <div>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.5 6 9 18l-4.5-4.5"></path>
                </svg>
                <p>Powerful</p>
              </div>
              <div>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.5 6 9 18l-4.5-4.5"></path>
                </svg>
                <p>Amazing</p>
              </div>
              <div>
                <p>
                  Mac does <span>that.</span>
                </p>
              </div>
            </div>
            <p>
              <span>Yep, Mac does that.</span> It’s not just MacBook Air. Every
              Mac is designed to be this easy, powerful, and amazing.
            </p>
            <p>Learn more</p>
          </div>
        </div>
      </TutorialsStyle>
      <div>
        <NavIntoTutorial
          onClick={() => handleHorizontalScroll(tutorialsRef.current, -300)}
          clickable={isClickable.left}
          first
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15.375 5.25 8.625 12l6.75 6.75"></path>
          </svg>
        </NavIntoTutorial>
        <NavIntoTutorial
          clickable={isClickable.right}
          onClick={() => handleHorizontalScroll(tutorialsRef.current, 300)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m8.625 5.25 6.75 6.75-6.75 6.75"></path>
          </svg>
        </NavIntoTutorial>
      </div>
    </>
  );
}
