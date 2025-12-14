import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

import "./CodeBlock.css";

export default function CodeBlock({ code, language = "python" }) {
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightElement(codeRef.current);
  }, [code]);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="code-wrapper">
      <button className="copy-btn" onClick={copyCode}>
        {copied ? "Copied ✓" : "Copy"}
      </button>

      <pre>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
