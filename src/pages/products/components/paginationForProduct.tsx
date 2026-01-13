import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function PaginationForProduct({
  totalPages,
  currentPage,
  setCurrentPage,
}: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          />
        </PaginationItem>
        {pages.map((page) =>
          page === currentPage || page === currentPage + 1 ? (
            <PaginationItem key={page} onClick={() => setCurrentPage(page)}>
              <PaginationLink isActive={page === currentPage}>
                {page}
              </PaginationLink>
            </PaginationItem>
          ) : null
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationForProduct;
