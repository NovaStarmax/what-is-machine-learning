import { Link } from 'react-router-dom';
import { pages } from '../data/pages';

export default function PageGrid() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Notions Étudiées</h1>
      <div className="grid grid-cols-3 gap-6">
        {pages.map((page) => (
          <Link
            key={page.id}
            to={`/page/${page.id}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800">{page.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}