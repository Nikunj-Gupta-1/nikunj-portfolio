/**
 * Safe Markdown to HTML renderer used by nikunj-agent chat bubbles
 */
export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatInlineMarkdown(line) {
  let out = escapeHtml(line);
  out = out.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+|\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return out;
}

export function renderMarkdown(md) {
  const cleanedMd = String(md || "")
    .replace(/<think>[\s\S]*?<\/think>/gi, "")
    .trim();

  const lines = cleanedMd.split("\n");
  const html = [];
  let inList = false;
  let inCodeBlock = false;
  let codeBuffer = [];

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (line.trim().startsWith("```")) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBuffer = [];
      } else {
        html.push(`<pre class="arch-pre"><code>${escapeHtml(codeBuffer.join("\n"))}</code></pre>`);
        inCodeBlock = false;
        codeBuffer = [];
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(rawLine);
      continue;
    }

    if (!line.trim()) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      continue;
    }

    if (line.startsWith("### ")) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<h3>${formatInlineMarkdown(line.slice(4))}</h3>`);
    } else if (line.startsWith("#### ")) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<h4>${formatInlineMarkdown(line.slice(5))}</h4>`);
    } else if (/^(\s*[-•]|\d+\.)\s+/.test(line)) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      const itemText = line.replace(/^(\s*[-•]|\d+\.)\s+/, "");
      html.push(`<li>${formatInlineMarkdown(itemText)}</li>`);
    } else if (line === "---") {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push('<hr style="border:0;border-top:1px solid var(--border-subtle);margin:0.75rem 0;" />');
    } else {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<p>${formatInlineMarkdown(line)}</p>`);
    }
  }

  if (inCodeBlock && codeBuffer.length > 0) {
    html.push(`<pre class="arch-pre"><code>${escapeHtml(codeBuffer.join("\n"))}</code></pre>`);
  }
  if (inList) html.push("</ul>");
  return html.join("");
}
