import prisma from "../lib/db";

export default async function Home() {
  const task = await prisma.task.findMany();
  return (
    <div>
      <h1>Home</h1>
      {
        task.map((t) => (
          <div key={t.id}>
            <p>{t.title}</p>
          </div>
        ))
      }
    </div>
  );
}
