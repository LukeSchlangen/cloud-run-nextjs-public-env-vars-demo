'use client'

export default function Home() {
  return (
    <div>
      <main>
        <h1>cloud-run-nextjs-public-env-vars-demo</h1>
        <h2>Example public variable</h2>
        {process.env.NEXT_PUBLIC_EXAMPLE_VARIABLE}
      </main>
    </div>
  );
}
