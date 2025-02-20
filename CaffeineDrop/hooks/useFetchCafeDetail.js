import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCafeDetail = (cafeId) => {
  const [cafeDetail, setCafeDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCafeDetail = async () => {
      try {
        const response = await axios.get(
          `http://13.124.11.195:3000/cafes/${cafeId}`
        ); // ✅ API 요청
        setCafeDetail(response.data);
      } catch (err) {
        console.error("카페 상세 정보를 불러오는 중 오류 발생:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCafeDetail();
  }, [cafeId]);

  return { cafeDetail, isLoading, error };
};

export default useFetchCafeDetail;
