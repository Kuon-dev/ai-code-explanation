import { Toaster } from 'sonner';
import Markdown from '@/app/components/markdown'

export default function Home() {
  return (
    <main className="mx-auto max-w-[692px] overflow-x-hidden px-6 py-12 text-gray-1200 antialiased sm:py-32 md:overflow-x-visible md:py-16">
      <Markdown />
      <Toaster position="top-center" theme="dark"/>
    </main>
  );
}
