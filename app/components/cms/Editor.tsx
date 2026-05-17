"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface Props {
  data: string;
  setData: (value: string) => void;
}

export default function Editor({
  data,
  setData,
}: Props) {
  return (
    <CKEditor
      editor={ClassicEditor as never}
      data={data}
      onChange={(_, editor) => {
        setData(editor.getData());
      }}
    />
  );
}