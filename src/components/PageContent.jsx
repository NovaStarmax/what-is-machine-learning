import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { pages } from '../data/pages';
import 'katex/dist/katex.min.css';

export default function PageContent() {
  const { id } = useParams();
  const page = pages.find(p => p.id === parseInt(id));

  if (!page) {
    return <div>Page non trouvée</div>;
  }

  const nextPages = page.nextPages.map(nextId => pages.find(p => p.id === nextId));

  return (
    <div className="container mx-auto p-8">
      <Link to="/" className="text-blue-500 hover:text-blue-700 mb-4 block">
        ← Retour au menu
      </Link>
      <div className="bg-white rounded-lg shadow-md p-8 prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
          components={{
            h1: ({node, ...props}) => <h1 className="text-4xl font-bold mb-6" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-3xl font-bold mt-8 mb-4" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-2xl font-bold mt-6 mb-3" {...props} />,
            p: ({node, ...props}) => <p className="mb-4" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc ml-6 mb-4" {...props} />,
            ol: ({node, ...props}) => <ol className="list-decimal ml-6 mb-4" {...props} />,
            li: ({node, ...props}) => <li className="mb-2" {...props} />,
            blockquote: ({node, ...props}) => (
              <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
            ),
            code: ({node, inline, ...props}) => 
              inline ? (
                <code className="bg-gray-100 rounded px-1" {...props} />
              ) : (
                <pre className="bg-gray-100 rounded p-4 overflow-x-auto">
                  <code {...props} />
                </pre>
              ),
            table: ({node, ...props}) => (
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 my-4" {...props} />
              </div>
            ),
            th: ({node, ...props}) => (
              <th className="border border-gray-300 px-4 py-2 bg-gray-100" {...props} />
            ),
            td: ({node, ...props}) => (
              <td className="border border-gray-300 px-4 py-2" {...props} />
            ),
          }}
        >
          {page.content}
        </ReactMarkdown>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Notions suivantes :</h3>
        <div className="flex gap-4">
          {nextPages.map(nextPage => (
            <Link
              key={nextPage.id}
              to={`/page/${nextPage.id}`}
              className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
            >
              {nextPage.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}