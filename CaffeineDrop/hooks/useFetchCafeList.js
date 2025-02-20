import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://13.124.11.195:3000/cafes";

const useFetchCafeList = () => {
  const [cafeList, setCafeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCafes = async () => {
      try {
        // ✅ 1. 전체 카페 ID 리스트 가져오기
        const idsResponse = await axios.get(`${API_BASE_URL}/ids`);
        const cafeIds = idsResponse.data.cafeList; // [1, 2, ...]

        // ✅ 2. 각 ID별로 상세 정보 가져오기 (병렬 요청)
        const cafeRequests = cafeIds.map((id) =>
          axios.get(`${API_BASE_URL}/${id}`)
        );
        const cafesData = await Promise.all(cafeRequests);

        // ✅ 3. 가져온 카페 데이터 저장
        const formattedCafes = cafesData.map((res) => res.data);
        setCafeList(formattedCafes);
      } catch (err) {
        console.error("카페 리스트를 불러오는 중 오류 발생:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCafes();
  }, []);

  return { cafeList, setCafeList, isLoading, setIsLoading, error };
};

export default useFetchCafeList;
