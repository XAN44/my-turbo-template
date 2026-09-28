import { UsersResponseSchema } from "@repo/contracts";

export const dynamic = "force-dynamic";

export default async function Home() {
  const res = await fetch(`${process.env.API_URL}/users`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const users = UsersResponseSchema.parse(await res.json());

  return (
    <main style={{ padding: 24 }}>
      <h1>Users</h1>
      {users.length === 0 ? (
        <p>No users yet</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              {u.name ?? "Anonymous"} ({u.email})
              {u.password && <span>{u.password}</span>}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
