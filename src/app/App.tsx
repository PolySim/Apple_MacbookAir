import Header from "@/component/header/header";
import Home from "@/component/Home";
import PhoneMode from "@/component/PhoneMode";
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
