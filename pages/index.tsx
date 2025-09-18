import Link from "next/link";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Airbnb Application Clone system</h1>
      <Link href="/landing">
        <button className=" border px-3 py-1 text-lg mt-3  bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
          Get Started
        </button>
      </Link>
    </main>
  )
}

export default Home;
