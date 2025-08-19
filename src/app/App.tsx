import Header from "@/component/header/header";
import Home from "@/component/home/home";
import PhoneMode from "@/component/phoneMode";
import ScrollPositionInitializer from "@/lib/scrollPositionInitializer";
import WindowSizeInitilizer from "@/lib/windowSizeInitilizer";
import { useWindowStore } from "@/store/window.store";

export default function App() {
  const width = useWindowStore((state) => state.windowWidth);

  return (
    <main className="flex flex-col w-full min-h-screen">
      <WindowSizeInitilizer />
      <ScrollPositionInitializer />
      {width < 850 ? (
        <PhoneMode />
      ) : (
        <>
          <Header />
          <Home />
        </>
      )}
    </main>
  );
}
