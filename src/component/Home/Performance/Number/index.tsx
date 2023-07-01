import { NumberPerformanceStyle } from "@/styled";

export default function NumberPerformance(): JSX.Element {
  return (
    <NumberPerformanceStyle>
      <img
        src="https://www.apple.com/v/macbook-air-13-and-15-m2/b/images/overview/performance/performance_mx__uefa6ex4jkia_large_2x.jpg"
        alt="Apple M2 Chip"
      />
      <div>
        <div>
          <p>Up to</p>
          <p>1.4x</p>
          <p>faster than</p>
          <p>
            MacBook air (M1)<sup>2</sup>
          </p>
        </div>
        <div>
          <p>Up to</p>
          <p>12x</p>
          <p>faster than fastest</p>
          <p>Intel-based</p>
          <p>
            MacBook Air<sup>3</sup>
          </p>
        </div>
        <div>
          <p>Up to</p>
          <p>18 hrs</p>
          <p>
            battery life<sup>1</sup>
          </p>
        </div>
      </div>
    </NumberPerformanceStyle>
  );
}
