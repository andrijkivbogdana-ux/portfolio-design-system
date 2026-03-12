"use client";

import { useState, useRef, type DragEvent, type ChangeEvent } from "react";
import { Upload, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Spinner } from "./Spinner";

type UploadStatus = "idle" | "dragover" | "uploading" | "success" | "error";

export interface FileUploadProps {
  accept?: string;
  onFile?: (file: File) => void | Promise<void>;
  className?: string;
}

export function FileUpload({ accept, onFile, className }: FileUploadProps) {
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setStatus("uploading");
    try {
      await onFile?.(file);
      setStatus("success");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Upload failed");
      setStatus("error");
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div
      onClick={() => status === "idle" && inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        if (status === "idle") setStatus("dragover");
      }}
      onDragLeave={() => {
        if (status === "dragover") setStatus("idle");
      }}
      onDrop={handleDrop}
      className={cn(
        "border-2 border-dashed rounded-xl p-10 text-center transition-colors duration-fast",
        status === "idle" && "border-border hover:border-border-strong cursor-pointer",
        status === "dragover" && "border-acid bg-acid/5",
        status === "uploading" && "border-border cursor-wait",
        status === "success" && "border-success",
        status === "error" && "border-error",
        className
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />
      {status === "idle" || status === "dragover" ? (
        <>
          <Upload className="w-8 h-8 text-ink-muted mx-auto mb-3" />
          <p className="text-sm text-ink-secondary">Drop your portfolio here</p>
          <p className="text-xs text-ink-muted mt-1">PDF, PNG, or URL</p>
        </>
      ) : status === "uploading" ? (
        <>
          <Spinner className="mx-auto mb-3" />
          <p className="text-sm text-ink-secondary">Uploading...</p>
        </>
      ) : status === "success" ? (
        <>
          <CheckCircle className="w-8 h-8 text-success mx-auto mb-3" />
          <p className="text-sm text-ink-secondary">Upload complete</p>
        </>
      ) : (
        <>
          <XCircle className="w-8 h-8 text-error mx-auto mb-3" />
          <p className="text-sm text-error">{errorMessage}</p>
        </>
      )}
    </div>
  );
}
