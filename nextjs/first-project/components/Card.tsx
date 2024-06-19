import client from "@/db"

export default async function Card() {
    const data = await getUserDetails()
    console.log(data)
  return (
    <div className="border border-gray-400 rounded-lg p-4 flex flex-col justify-center items-start gap-4">
      <span>{data.username}</span>
      <span>{data.password}</span>
    </div>
  );
}

async function getUserDetails() {
  const res = await client.user.findFirst({})
  return res
}
