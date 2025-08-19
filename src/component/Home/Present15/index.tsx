import { ScrollContext } from "@/context";
import { useVisible } from "@/hook/useVisible";
import { Present15Style } from "@/styled";
import { useContext, useRef } from "react";

export default function Present15(): JSX.Element {
  const { apparitionPresent15 } = useContext(ScrollContext);
  const presentRef = useRef<HTMLDivElement>(null);
  const isVisible = useVisible(presentRef, "10px");

  return (
    <Present15Style visible={apparitionPresent15 && isVisible} ref={presentRef}>
      <div>
        <div>Impressively big.</div>
        <div>Impossibly thin.</div>
      </div>
      <div>
        <div>
          The <b>new 15‑inch MacBook Air</b> makes room for more of what you
          love with a spacious Liquid Retina display. And with the 13‑inch
          model, you have more reasons than ever to choose Air. Supercharged by
          the M2 chip — and with up to 18 hours of battery life1 — both laptops
          deliver blazing-fast performance in an ultraportable design.
        </div>
      </div>
      <div>
        <div>13” model from $91.58/mo. for 12 mo. or $1099**</div>
        <div>
          <span>New</span> 15” model from $108.25/mo. for 12 mo. or $1299**
        </div>
      </div>
      <div>
        <div>
          Watch the film
          <svg fill="#0066cc" viewBox="0 0 24 24">
            <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM10,8l6,4-6,4Z" />
          </svg>
        </div>
        <div>
          Watch the event
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </div>
      </div>
    </Present15Style>
  );
}
