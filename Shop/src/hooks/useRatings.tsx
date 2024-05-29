import { useEffect, useState } from 'react';
import { Ratings } from '../model/ratings';
import ApiService from '../service/ApiService';

export const useRatings = () => {
  const [ratings, setRatings] = useState<Ratings[] | null>(null);

  const fetchRatings = async () => {
    ApiService.get<Ratings[]>('/rating')
      .then((res) => {
        setRatings(res.data)
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchRatings();
  }, []);
  return { ratings, fetchRatings };
};
