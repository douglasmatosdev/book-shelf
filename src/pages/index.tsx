// import Image from 'next/image'
// import { Inter,Open_Sans } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

import { data } from "@/utils";

export default function Home() {
  return (
    <main className="flex justify-between p-24">
      {data.map((book, index) => {
        return (
          <div
            key={`${book.title}_${index}`}
            className="flex flex-col p-8 rounded-2xl shadow-2xl"
          >
            <h1>{book.title}</h1>
            <span>{book.author}</span>
            <span>{book.category}</span>
            <span>{book.edition}</span>
            <span>{book.publishing_company}</span>
          </div>
        );
      })}
    </main>
  );
}
