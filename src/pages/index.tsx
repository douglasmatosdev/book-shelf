
import { data } from "@/utils";

export default function Home() {
  return (

    <main className="flex flex-col border border-red-100">
      <section className="flex justify-between">

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
      </section>
      <footer className="flex justify-center fixed bottom-0 items-center w-[100%] pb-4" >

        <div className="flex justify-between items-center w-80">
          <a href="/policy-of-privacy">Policy of privacy</a>
          <a href="/terms-of-user">Terms of User</a>
        </div>
      </footer>
    </main>
  );
}