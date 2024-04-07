"use client";

import { useDropzone } from "@uploadthing/react";

import { UploadCloud } from "lucide-react";
import { Dispatch, SetStateAction, useCallback } from "react";
import { generateClientDropzoneAccept } from "uploadthing/client";

type UploadImageProps = {
  onFieldChange: (url: string) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
  files: File[];
};

const UploadImage = ({
  onFieldChange,
  imageUrl,
  setFiles,
  files,
}: UploadImageProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    onFieldChange(URL.createObjectURL(acceptedFiles[0]));
  }, [onFieldChange, setFiles]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });

  return (
    <div {...getRootProps()} className="flex flex-col">
      <input {...getInputProps()} />

      <div className="w-44 h-44 rounded-md border p-2 flex flex-col  gap-2 items-center justify-center cursor-pointer">
        <UploadCloud className="w-28 h-28" />
        <p className="text-light text-xs my-2 text-center">
          Drop files here or click to upload from your pc!
        </p>
      </div>

      {imageUrl && (
        <p className="text-xs text-muted-foreground my-2">
          {files.length} files will be uploaded.
        </p>
      )}
    </div>
  );
};

export default UploadImage;
