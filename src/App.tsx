import { Toaster } from "sonner";
import { AuthorCredit } from "@/components/AuthorCredit";
import { PfaPane } from "@/components/AppPane/PfaPane";
import { WindowToolbar } from "@/components/WindowToolbar";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-desktop p-4 md:p-10">
      <Toaster richColors position="bottom-right" />
      <div
        data-testid="finder-window"
        className="flex h-[min(780px,85vh)] w-full max-w-6xl flex-col overflow-hidden rounded-[12px] border border-black/10 bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_24px_80px_rgba(0,0,0,0.28)]"
      >
        <WindowToolbar />
        <PfaPane />
      </div>
      <AuthorCredit />
    </div>
  );
}
