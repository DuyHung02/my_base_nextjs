import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../services/axios.service';

type ISearchQuery = {
  keyword: string;
  currentPage: number;
};

const searchQuery = async (payload: ISearchQuery) => {
  const { currentPage, keyword } = payload;
  return axiosInstance.get('/api/search', {
    params: {
      keyword,
      page: currentPage,
    },
  });
};

export const useSearchQuery = (payload: ISearchQuery) => {
  return useQuery({
    queryKey: ['search_query', payload],
    queryFn: () => searchQuery(payload),
  });
};

export default useSearchQuery;
