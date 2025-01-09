// import { returnPaginationRange } from "@/lib/util";
import _ from "lodash";
import React from "react";

// Eclipse effect
export function returnPaginationRange(totalPage, page, limit, siblings) {
  let totalPageNoInArray = 7 + siblings;
  if (totalPage <= totalPageNoInArray) {
    return _.range(1, totalPage + 1);
  }

  let leftSiblingIndex = Math.max(1, page - siblings);
  let rightSiblingIndex = Math.min(page + siblings, totalPage);

  let showLeftDots = leftSiblingIndex > 2;
  let showRightDots = rightSiblingIndex < totalPage - 2;

  if (!showLeftDots && showRightDots) {
    let leftItemsCount = 3 + 2 * siblings;
    let leftItems = _.range(1, leftItemsCount + 1);
    return [...leftItems, "... ", totalPage];
  } else if (showLeftDots && !showRightDots) {
    let rightItemsCount = 3 + 2 * siblings;
    let rightItems = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
    return [1, " ...", ...rightItems];
  } else {
    let middleRange = _.range(leftSiblingIndex, rightSiblingIndex + 1);
    return [1, "... ", ...middleRange, " ...", totalPage];
  }
}

const PagenationComponent = ({
  totalPage,
  page,
  limit,
  siblings,
  onPageChange,
  totalResults,
}) => {
  let array = returnPaginationRange(
    totalPage,
    page,
    limit,
    siblings,
    totalResults
  );
  return (
    <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Showing
            <span className="font-semibold text-black">
              {" "}
              {(page - 1) * limit + 1}
              {" -"}
            </span>
            <span className="font-semibold text-black">
              {" "}
              {page !== totalPage ? page * limit : totalResults}{" "}
            </span>
            out of
            <span className="font-semibold text-black"> {totalResults} </span>
            results
          </p>
        </div>
        <div className="isolate inline-flex -space-x-px rounded-md shadow-sm">
          <span
            className={`relative inline-flex items-center rounded-l-md px-2 py-2 cursor-pointer hover:bg-gray-300  text-black ring-1 ring-inset ring-gray-300 ${
              page === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-100"
            } focus:z-20 focus:outline-offset-0`}
            onClick={() => page > 1 && onPageChange("<")}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          {array.map((value) => {
            if (value === page) {
              return (
                <span
                  key={value}
                  aria-current="page"
                  className="relative border z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-neutral-900 cursor-pointer "
                  onClick={() => onPageChange(value)}
                >
                  {value}
                </span>
              );
            } else {
              return (
                <span
                  key={value}
                  className="relative border inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 cursor-pointer "
                  onClick={() => onPageChange(value)}
                >
                  {value}
                </span>
              );
            }
          })}

          <span
            className={`relative inline-flex items-center rounded-r-md px-2 py-2 cursor-pointer  text-gray-400 ring-1 ring-inset ring-gray-300 ${
              page === totalPage
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-gray-100"
            } focus:z-20 focus:outline-offset-0`}
            onClick={() => page < totalPage && onPageChange(">")}
          >
            <span className="sr-only">Next</span>
            <svg
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PagenationComponent;
