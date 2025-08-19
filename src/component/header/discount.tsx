export default function EducationDiscount(): JSX.Element {
  return (
    <div className="flex justify-center bg-gray-100 py-4 px-3">
      <div className="flex text-gray-900 font-light">
        Save on MacBook Air with M2 chip starting at $999 with education
        pricing. Plus get a $150 gift card.*
        <span className="flex ml-1.5 text-blue-500 hover:underline">
          Shop now
          <div className="flex items-center h-full w-min">
            <svg
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </div>
        </span>
      </div>
    </div>
  );
}
