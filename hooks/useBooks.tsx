import { useQuery } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/constants";
import { SearchParams, searchBooks } from "@/api/books/searchBooks";

interface UseBooks {
  prefix?: string;
  params?: SearchParams;
}

const useBooks = ({ prefix = "", params }: UseBooks = {}) => {
  const key = `${prefix}${REACT_QUERY_KEYS.BOOKS}`;

  const booksQuery = useQuery(
    [key, { ...params }],
    () => searchBooks({ params }),
    {
      select: (data) => data?.data,
      enabled: Boolean(params?.q),
    }
  );

  return booksQuery;
};

export default useBooks;
