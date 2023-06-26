import { useVisible } from "@/Function/useVisible";
import { ScrollContext } from "@/context";
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
        <div>New 15” model from $108.25/mo. for 12 mo. or $1299**</div>
      </div>
      <div>
        <div>Watch the film</div>
        <div>
          Watch the event
          <svg
            width="34"
            height="34"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </div>
      </div>
    </Present15Style>
  );
}
