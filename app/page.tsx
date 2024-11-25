import Cinema from './components/Cinema';
import dados from './data/dados.json';

export default function HomePage() {
  return (
    <main style={{ padding: '20px' }}>
      <Cinema dados={dados} />
    </main>
  );
}
