#!/usr/bin/env python3
"""
Compiles public-safe Resume PDFs from Resume_CVs/*.typ using Typst,
stripping phone numbers and Student IDs before compilation.
"""

from pathlib import Path
import re
import subprocess
import tempfile

ROOT_DIR = Path(__file__).resolve().parent.parent
RESUME_SRC_DIR = ROOT_DIR.parent / "Resume_CVs"
OUTPUT_DIR = ROOT_DIR / "public" / "resumes"

TRACKS = [
    {
        "source": "2023A7PS0229U - Nikunj Gupta - Neovara.typ",
        "output": "Nikunj_Gupta_AI_Data_Resume.pdf",
        "label": "AI Agents, LLMs & Data Science",
    },
    {
        "source": "2023A7PS0229U - Nikunj Gupta - Siemens.typ",
        "output": "Nikunj_Gupta_Software_Systems_Resume.pdf",
        "label": "Software, Distributed Systems & ML",
    },
    {
        "source": "2023A7PS0229U - Nikunj Gupta.typ",
        "output": "Nikunj_Gupta_Cybersecurity_General_Resume.pdf",
        "label": "Cybersecurity, VAPT & Systems Engineering",
    },
]


def sanitize_typst_source(content: str) -> str:
    # Strip Student ID references
    content = content.replace(" | ID: 2023A7PS0229U", "")
    content = content.replace("Student ID: 2023A7PS0229U | ", "")
    content = re.sub(r"2023A7PS0229U", "", content)

    # Strip phone numbers
    content = content.replace(" | +971 50 814 8234 / +91 7042004636", "")
    content = re.sub(r"\+971\s*50\s*814\s*8234", "", content)
    content = re.sub(r"\+91\s*7042004636", "", content)
    return content


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    with tempfile.TemporaryDirectory() as tmpdir:
        tmp_path = Path(tmpdir)
        for track in TRACKS:
            src_file = RESUME_SRC_DIR / track["source"]
            if not src_file.exists():
                raise FileNotFoundError(f"Missing source Typst file: {src_file}")

            raw_text = src_file.read_text(encoding="utf-8")
            clean_text = sanitize_typst_source(raw_text)

            # Verify no sensitive tokens remain in Typst source
            for forbidden in ("2023A7PS0229U", "814 8234", "7042004636"):
                if forbidden in clean_text:
                    raise ValueError(f"Forbidden token '{forbidden}' still present after sanitization!")

            temp_typ = tmp_path / track["source"]
            temp_typ.write_text(clean_text, encoding="utf-8")

            out_pdf = OUTPUT_DIR / track["output"]
            subprocess.run(
                ["/opt/homebrew/bin/typst", "compile", str(temp_typ), str(out_pdf)],
                check=True,
            )
            print(f"[OK] Compiled sanitized PDF: {out_pdf.name} ({out_pdf.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
