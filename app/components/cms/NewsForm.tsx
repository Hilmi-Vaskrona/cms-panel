"use client";

import { useState } from "react";
import Editor from "./Editor";
import Image from "next/image";

export default function NewsForm() {
  const [content, setContent] =
    useState("");

  const [image, setImage] =
    useState<string | null>(null);

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-5">
        Tambah Berita
      </h1>

      <input
        type="text"
        placeholder="Judul Berita"
        className="w-full border p-3 rounded-xl mb-4"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
        className="mb-4"
      />

      {image && (
        <div className="mb-5">
          <Image
            src={image}
            alt="preview"
            width={500}
            height={300}
            className="rounded-xl object-cover"
          />
        </div>
      )}

      <Editor
        data={content}
        setData={setContent}
      />

      <button className="bg-blue-600 text-white px-5 py-3 rounded-xl mt-5 hover:bg-blue-700 transition">
        Simpan Berita
      </button>
    </div>
  );
}