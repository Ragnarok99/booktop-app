import client from "./client";

export interface SearchParams {
  q: string;
}

interface Search {
  params?: SearchParams;
}

export const searchBooks = async ({ params }: Search) => {
  const { data } = await client.get("/api/v1/books", { params });
  return data;
};
