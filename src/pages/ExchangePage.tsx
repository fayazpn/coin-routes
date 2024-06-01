import { useParams } from 'react-router-dom';

function ExchangePage() {
  const params = useParams();
  return (
    <div>
      ExchangePage
      {params.id}
    </div>
  );
}

export default ExchangePage;
