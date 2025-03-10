import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
    const scriptContent = `
#!/bin/bash

REPO_URL="https://github.com/allandantas21/GradeMe_42Rio.git"
REPO_DIR="GradeMe_42Rio"

if [ ! -d "$REPO_DIR" ]; then
  git clone "$REPO_URL"
fi

make -C "$REPO_DIR"
  `;
  
    res.setHeader('Content-Type', 'application/x-sh');
    res.setHeader('Content-Disposition', 'attachment; filename=install.sh');
    res.status(200).send(scriptContent);
}