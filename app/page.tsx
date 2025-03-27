'use client'

import Link from "next/link"

export default function Home() {
  return (
    <div>
      <main>
        <h1>cloud-run-nextjs-public-env-vars-demo</h1>
        <Link href="https://github.com/LukeSchlangen/cloud-run-nextjs-public-env-vars-demo">GitHub Repository</Link>
        <h2>Example public variable</h2>
        {process.env.NEXT_PUBLIC_EXAMPLE_VARIABLE}
      </main>
    </div>
  );
}
