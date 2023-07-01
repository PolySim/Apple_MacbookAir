import { EducationDiscountStyled } from "@/styled";

export default function EducationDiscount(): JSX.Element {
  return (
    <EducationDiscountStyled>
      <div>
        Save on MacBook Air with M2 chip starting at $999 with education
        pricing. Plus get a $150 gift card.*
        <span>
          Shop now
          <div>
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
    </EducationDiscountStyled>
  );
}
