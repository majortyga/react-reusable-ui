import React, { useRef } from "react";

export interface UploadProps {
  onChange: (files: FileList) => void;
  multiple?: boolean;
  accept?: string;
  className?: string;
}

const Upload: React.FC<UploadProps> = ({
  onChange,
  multiple = false,
  accept,
  className = "",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = React.useState(false);
  const [files, setFiles] = React.useState<FileList | null>(null);

  const handleFiles = (fileList: FileList) => {
    setFiles(fileList);
    onChange(fileList);
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
        dragActive
          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
          : "border-gray-300 dark:border-gray-600"
      } ${className}`}
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setDragActive(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setDragActive(false);
      }}
      onDrop={(e) => {
        e.preventDefault();
        setDragActive(false);
        if (e.dataTransfer.files) handleFiles(e.dataTransfer.files);
      }}
    >
      <input
        ref={inputRef}
        type="file"
        multiple={multiple}
        accept={accept}
        className="hidden"
        onChange={(e) => e.target.files && handleFiles(e.target.files)}
      />
      <div className="text-gray-500 dark:text-gray-300 mb-2">
        Drag & drop files here or{" "}
        <span className="text-blue-600 dark:text-blue-400 underline">
          browse
        </span>
      </div>
      {files && files.length > 0 && (
        <ul className="mt-2 text-left text-xs text-gray-700 dark:text-gray-200">
          {Array.from(files).map((file, i) => (
            <li key={i}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Upload;
