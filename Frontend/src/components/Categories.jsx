import { Link } from 'react-router-dom';

function Categories() {
  return (
    <section id="categories" className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Distancias</h2>

      <ul className="flex flex-col items-center space-y-4">
        <li>
          <Link to="/categoria6k" className="block bg-[#030777] text-white p-4 rounded-lg shadow-md w-64 text-center text-xl font-semibold hover:bg-[#040a99] transition">
            6K Recreativa
          </Link>
        </li>
        <li>
          <Link to="/categoria12k" className="block bg-[#030777] text-white p-4 rounded-lg shadow-md w-64 text-center text-xl font-semibold hover:bg-[#040a99] transition">
            12K Competitiva
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Categories;