"use client";

import AppCard from "@/components/AppCard";
import PaginationComponent from "@/components/PagenationComponent";
import { Spinner } from "@nextui-org/spinner";
import { useState } from "react";
import { getUsers, getUsersData, getUsersLength } from "@/data/users";
import { useEffect } from "react";
import TestComponent from "@/components/TestComponent";

export default function Home() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [users, setUsers] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch data whenever `page` or `limit` changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      const result = await getUsersData(page, limit);
      setUsers(result.users);
      console.log(result.users);
      setTotalPage(result.totalPage);
      setTotalResults(result.totalResults);
      setLoading(false); // End loading
    };

    fetchData();
  }, [page, limit]);

  // console.log(totalResults, totalPage, users);

  // Render laoding spinner
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner
          size="lg"
          color="Danger"
          label="Loading..."
          className="font-mono"
        />
      </div>
    );
  }

  // // static data
  // let totalPage = Math.ceil(getUsersLength() / limit);
  // const users = getUsers(page, limit);

  // Handle page change
  function handlePageChange(value) {
    console.log(value);

    // If the user clicks "<" or "..." on the first pages
    if ((value === "<" && page !== 1) || value === "... ") {
      // If we are within the first 5 pages, go to the last page
      if (page <= 5) {
        setPage(totalPage - 1); // Go to the last page
      } else {
        setPage(page - 1); // Move to the previous page
      }
    }
    // If the user clicks ">" or "..." on the last pages
    else if ((value === ">" && page !== totalPage) || value === " ...") {
      // If we are on the last 5 pages, go to the first page
      if (page > totalPage - 5) {
        setPage(2); // Go to the first page
      } else {
        setPage(page + 1); // Move to the next page
      }
    }
    // Regular page change
    else {
      setPage(value);
    }
  }

  return (
    <div className="grid grid-cols-1 font-geist">
      <h1 className="text-3xl text-center font-normal mb-4 pt-5">
        App Listings
      </h1>
      <div className="border-b"></div>
      {/* Card List */}
      <div className="flex flex-col mx-auto">
        {users.map((app, index) => (
          <AppCard
            key={app._id}
            app={app}
            index={index}
            page={page}
            limit={limit}
          />
        ))}
        {/* <TestComponent /> */}
      </div>
      <div className="border-b mt-10"></div>
      {/* Pagination */}
      <PaginationComponent
        totalPage={totalPage}
        page={page}
        limit={limit}
        siblings={1}
        totalResults={totalResults}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
