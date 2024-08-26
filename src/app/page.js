export default async function Home() {
  // api request to GitHub
  const res = await fetch("https://api.github.com/users/eddiejaoude");
  const data = await res.json();

  return (
    <ul className="bg-gray-100 rounded-lg p-6 shadow-md max-w-md mx-auto mt-8">
      <li className="mb-4">
        <span className="font-bold text-gray-700">Name:</span>
        <span className="ml-2 text-gray-600">{data.name}</span>
      </li>
      <li className="mb-4">
        <span className="font-bold text-gray-700">Location:</span>
        <span className="ml-2 text-gray-600">{data.location}</span>
      </li>
      <li>
        <span className="font-bold text-gray-700">Bio:</span>
        <span className="ml-2 text-gray-600">{data.bio}</span>
      </li>
    </ul>
  );
}
