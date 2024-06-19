import LoginForm from "../components/LoginForm"
export default function Home() {
  return (
    <main className="h-screen w-full flex justify-center items-center">
      <div className="p-4 border border-gray-300 rounded-lg">
        <h1 className="text-4xl font-semibold text-center">Let&apos;s Auth bro</h1>
        <LoginForm />
      </div>
    </main>
  );
}
