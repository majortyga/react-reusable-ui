import React from "react";
import { HiClipboard, HiCheck, HiEye, HiEyeSlash } from "react-icons/hi2";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "@/hooks/useTheme";
import type { CSSProperties } from "react";
import type { SyntaxHighlighterProps } from "react-syntax-highlighter";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
  maxHeight?: string;
  showCopyButton?: boolean;
  showLanguage?: boolean;
  wrapLines?: boolean;
  highlightLines?: number[];
  startingLineNumber?: number;
  theme?: "dark" | "light";
}

export default function CodeBlock({
  code,
  language = "tsx",
  showLineNumbers = true,
  className = "",
  maxHeight = "none",
  showCopyButton = true,
  showLanguage = true,
  wrapLines = false,
  highlightLines = [],
  startingLineNumber = 1,
  theme: propTheme,
}: CodeBlockProps) {
  const { isDark } = useTheme();
  const theme = propTheme ?? (isDark ? "dark" : "light");
  const [copied, setCopied] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const customStyle = React.useMemo(() => {
    const baseStyle = isDark ? vscDarkPlus : vs;
    return {
      ...baseStyle,
      "pre[class*='language-']": {
        ...baseStyle["pre[class*='language-']"],
        borderRadius: "0.5rem",
        margin: 0,
        padding: 0,
      },
    };
  }, [isDark]);

  const lineStyle = React.useCallback(
    (lineNumber: number) => {
      const style: CSSProperties = { display: "block" };
      if (highlightLines.includes(lineNumber)) {
        style.backgroundColor = isDark
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.1)";
      }
      return { style };
    },
    [highlightLines, isDark]
  );

  return (
    <div
      className={`relative rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900  ${className}`}
    >
      <div className="flex items-center justify-between px-2 sm:px-4 py-2 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          {showLanguage && (
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {language}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          {maxHeight !== "none" && (
            <button
              onClick={toggleExpand}
              className="p-1 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              title={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? (
                <HiEyeSlash className="w-5 h-5" />
              ) : (
                <HiEye className="w-5 h-5" />
              )}
            </button>
          )}
          {showCopyButton && (
            <button
              onClick={handleCopy}
              className="p-1 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              title="Copy to clipboard"
            >
              {copied ? (
                <HiCheck className="w-5 h-5 text-green-500" />
              ) : (
                <HiClipboard className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </div>
      <div
        className="max-w-[90vw] overflow-x-auto"
        style={{ maxHeight: isExpanded ? "none" : maxHeight }}
      >
        <SyntaxHighlighter
          language={language}
          style={customStyle}
          showLineNumbers={showLineNumbers}
          wrapLines={wrapLines}
          wrapLongLines={false}
          startingLineNumber={startingLineNumber}
          lineProps={lineStyle}
          customStyle={{
            margin: 0,
            padding: 0,
            maxWidth: "100%",
            width: "fit-content",
            boxSizing: "border-box",
            fontSize: "0.85rem",
            lineHeight: "1.5",
            display: "block",
          }}
          className="text-xs sm:text-sm p-2 sm:p-4"
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
