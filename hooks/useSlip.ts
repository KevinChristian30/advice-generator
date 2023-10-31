import SlipService from '@/services/SlipService';
import Slip from '@/types/Slip';
import { useEffect, useState } from 'react'

const useSlip = () => {
  const [data, setData] = useState<Slip>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  const fetch = async () => {
    try {
      setLoading(true);

      const response = await SlipService.getRandomSlip();

      setData({
        id: response.data.slip.id,
        advice: response.data.slip.advice
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { data, loading, error, fetch };
}

export default useSlip;