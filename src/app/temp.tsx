"use client";

import AppCard from "@/components/AppCard";
import Pagination from "@/components/Pagenation";
import { Spinner } from "@nextui-org/spinner";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemsPerPage = 15; // Number of items per page
  let totalPages; // total pages on fetched data

  useEffect(() => {
    // Fetch data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api-nest-stag.shopdigest.com/api/v1/shopify/apps/category?page=1&limit=${itemsPerPage}&order=asc&categoryId=66ae05136e4fafffc188af9b&categoryUrl=marketing-and-conversion-advertising-ads&pricingType=All`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        console.log(result);

        totalPages = result.totalPages;
        console.log(totalPages);
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [data]);

  // Get data for the current page
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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

  // Render error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mx-auto px-4">
      <h1 className="text-3xl text-center font-normal mb-4 pt-5">
        App Listings
      </h1>

      {/* Card List */}
      <div className="grid gap-4">
        {currentData.map((app, index) => (
          <AppCard key={app._id} app={app} index={index} />
        ))}
      </div>

      <div className="border-b mt-10"></div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
