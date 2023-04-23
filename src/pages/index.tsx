import { useEffect, useState } from "react";
import Link from "next/link";

import { data } from "@/utils";

export default function Home() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const accessToken = "AIzaSyAx-p3s64bZ4cj_UOtgZTx-Hs-bPwT4uI4";
      const apiKey = "AIzaSyBvvroFtSdA9_jdbWK1f5b2qif3xkosWyE"
      const folderId = "1Ea1Qr1_FHOvqL18GMTYQuEDRm5cQ1EDP";
      const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=*`;

      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      }).then(r => {

        console.log(r)
        return r
      })
      const data = await response.json();
      setFiles(data.files);
    };

    fetchFiles();
  }, []);

  return (
    <main className="flex flex-col border border-red-100">
      <section className="flex justify-between">
        {/* {data.map((book, index) => {
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
        })} */}
        <div>
          <h1>My Google Drive Files</h1>
          <ul>
            {files?.map((file) => (
              <li key={file.id}>{file.name}</li>
            ))}
          </ul>
        </div>
      </section>
      <footer className="flex justify-center fixed bottom-0 items-center w-[100%] pb-4">
        <div className="flex justify-between items-center w-80">
          <Link href={`/policy-of-privacy`}>Policy of privacy</Link>
          <Link href={`/terms-of-user`}>Terms of User</Link>
        </div>
      </footer>
    </main>
  );
}
