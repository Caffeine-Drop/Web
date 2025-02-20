import { useState, useEffect } from "react";
import axios from "axios";

const useFetchSpecialty = (cafeId) => {
  const [isSpecialty, setIsSpecialty] = useState(false); // ✅ 기본값을 false로 설정
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!cafeId) return;

    const fetchSpecialtyStatus = async () => {
      try {
        const response = await axios.get(
          `http://13.124.11.195:3000/cafes/${cafeId}/specialty`
        );
        setIsSpecialty(response.data.success ?? false); // ✅ 백엔드 값이 없으면 false로 설정
      } catch (err) {
        console.error("스페셜티 인증 여부 조회 실패:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpecialtyStatus();
  }, [cafeId]);

  return { isSpecialty, isLoading, error };
};

export default useFetchSpecialty;
