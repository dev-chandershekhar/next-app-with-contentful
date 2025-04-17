import Image from "next/image";


export default function Home() {


  return (
   <main className="flex flex-col items-center justify-between p-24 min-h-[800px]">
      <h1 className="text-3xl font-bold underline">
       Hello guys!
      </h1>
      <p className="text-lg">   
        This is a simple Next.js application with Tailwind CSS.
      </p>
   </main>
  );
}
