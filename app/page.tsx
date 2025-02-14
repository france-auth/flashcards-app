import Header from "@/components/Header";
import App from "@/components/App"

export default function Home() {
  return (
    <div className="overflow-y-hidden relative w-full flex flex-col items-center bg-white">
      <Header />
      <App />
    </div>
  );
}
