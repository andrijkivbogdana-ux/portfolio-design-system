"use client";

import { FileUpload } from "@/components/FileUpload";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function FileUploadPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">FileUpload</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Drag-and-drop file upload with status states.
      </p>

      <ComponentPreview label="Idle (Default)">
        <FileUpload
          accept=".pdf,.png,.jpg"
          onFile={async (file) => {
            await new Promise((r) => setTimeout(r, 2000));
            console.log("Uploaded:", file.name);
          }}
          className="w-full"
        />
      </ComponentPreview>

      <CodeBlock code={`<FileUpload
  accept=".pdf,.png,.jpg"
  onFile={async (file) => {
    await uploadFile(file);
  }}
/>`} />
    </div>
  );
}
