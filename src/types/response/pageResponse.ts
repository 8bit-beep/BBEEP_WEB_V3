export interface PageResponse<T> {
  content: T[];
  totalPage: number;
  currentPage: number;
}