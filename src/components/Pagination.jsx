import React, { useEffect, useMemo, useState } from "react";
import { PageButton } from "../contexts/Button";

const filterPages = (visiblePages, totalPages) => {
    return visiblePages.filter(page => page <= totalPages);
};

const getVisiblePages = (page, total) => {
    if (total < 7) {
        return filterPages([1, 2, 3, 4, 5, 6], total);
    } else {
        if (page % 5 >= 0 && page > 4 && page + 2 < total) {
            return [1, page - 1, page, page + 1, total];
        } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
            return [1, total - 3, total - 2, total - 1, total];
        } else {
            return [1, 2, 3, 4, 5, total];
        }
    }
};

const Pagination = ({
    onPageChange,
    page,
    pageCount,
    pageSize,
  }) => {
    const [visiblePages, setVisiblePages] = useState(getVisiblePages(0, page));
    const changePage = p => {
        if (p === page + 1) {
            return;
        }
        const vps = getVisiblePages(p, page);
        setVisiblePages(filterPages(vps, page));
        onPageChange(p - 1);
    };

    const activePage = page + 1;


    return(
        <div className="Table__visiblePagesWrapper">
                {visiblePages.map((p, i, array) => {
                  for(i=1; i<=p;i++){
                     return + p[i-1]
                    }
                    return (
                        <PageButton
                            key={p}
                            className={
                                activePage === p
                                    ? 'Table__pageButton Table__pageButton--active'
                                    : 'Table__pageButton'
                            }
                            onClick={() => changePage(p)}
                        >
                         {p}
                        </PageButton>
                    );
                })}
            </div>
    )

    };
    
    export default Pagination;