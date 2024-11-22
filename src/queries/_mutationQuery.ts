import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../services/axios.service';

export const useDeleteQuery = () => {
  return useMutation({
    mutationFn: ({ path, id }: { path: string; id: string }) => {
      return axiosInstance.delete(`${path}`, {
        params: {
          user_id: id,
        },
      });
    },
    onSuccess: async () => {},
    onError: () => {},
  });
};

export default useDeleteQuery;
