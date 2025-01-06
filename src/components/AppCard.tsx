"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import BadgeRating from "./BadgeRating";
import { Check, ThumbsUp, ThumbsDown, X, Info } from "lucide-react";

export default function AppCard() {
  const [hover, setHover] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="absolute grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10 ml-12 mr-20"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="absolute -top-3.5 left-6">
        <Badge
          variant="outline"
          className="bg-red-400 text-white rounded border"
        >
          #1 Highly Recommended
        </Badge>
      </div>

      {/* Main Card */}
      <div
        className={`col-span-2 grid grid-cols-1 md:grid-cols-3 transition-all duration-200 rounded-xl border
        ${hover ? "border-red-500 shadow-2xl" : ""}`}
      >
        {/* Left Section */}
        <div className="rounded-l-xl lg:col-span-2 flex flex-col gap-6 p-6 bg-white border-t  border-l border-b ">
          {/* Header Section */}
          <div className="flex items-start gap-2">
            {/* App Icon */}
            <div className="items-top flex flex-col space-x-2">
              <img
                src="https://cdn.shopify.com/app-store/listing_images/08346a36a0a313120feec14003bedbc3/icon/CI35i4-zvvQCEAE=.png"
                alt="App Icon"
                className="w-20 h-20 rounded-xl border"
              />

              <div className="flex flex-row py-2 text-center items-center">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none ml-1">
                  <label
                    htmlFor="terms1"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Compare
                  </label>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  Back in Stock: Restock Alerts
                </h2>
              </div>
              <p className="text-sm text-muted-foreground text-gray-400 font-semibold">
                Alert: Item back in stock, push for replenishment via email &
                SMS
              </p>
              <p className="text-sm font-semibold">
                <span className="font-medium">Pricing Plans:</span>{" "}
                <span className="text-blue-500">
                  Free, $19/month, $49/month, $69/month
                </span>
              </p>
              <p className="text-sm font-semibold">
                <span className="font-medium">Free Trial:</span>{" "}
                <span className="text-green-500">14 days</span>
              </p>
            </div>
          </div>

          <div className="border-b"></div>

          {/* Pros & Cons */}
          <div className="grid grid-row gap-6">
            {/* Pros */}
            <div>
              <h3 className="flex items-center gap-2 text-md font-semibold">
                <ThumbsUp className="w-4 h-4" /> Pros
              </h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 w-5 h-5" />
                  Alerts via automated push notifications, email, or SMS when a
                  product is restocked.
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 w-5 h-5" />
                  Personalize emails and themes, or create your own button using
                  the JavaScript API.
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 w-5 h-5" />
                  Use email marketing tools to customize interactions with your
                  customers.
                </li>
              </ul>
            </div>
            {/* Cons */}
            <div>
              <h3 className="flex items-center gap-2 text-md font-semibold">
                <ThumbsDown className="w-4 h-4" /> Cons
              </h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <X className="text-red-500 w-5 h-5" />
                  Keep track of conversions, high-demand items that are out of
                  stock, and latest alerts.
                </li>
                <li className="flex items-center gap-2">
                  <X className="text-red-500 w-5 h-5" />
                  Supports all Shopify store languages to broaden your market.
                </li>
              </ul>
            </div>
          </div>

          {/* Review Section */}
          <div className="p-4 border border-dashed rounded-lg">
            <div className="grid grid-flow-col items-start">
              {/* Image */}
              <div className="">
                <img
                  src="images/temp-profile-picture.jpg"
                  alt="icon"
                  className="w-12 h-12 mr-3 rounded-full justify-center items-center" // Adjust width, height, and spacing
                />
              </div>
              {/* Content Section */}
              <div className="">
                {/* Paragraph with Expand/Collapse Button */}
                <p
                  className={`${
                    isExpanded ? "line-clamp-none" : "line-clamp-2"
                  } text-muted-foreground text-sm`}
                >
                  &quot;consectetur eu qui ipsum velit non labore consequat
                  proident in adipisicing consectetur pariatur dolor proident in
                  adipisicing consectetur aliqua pariatur dolor proident in
                  adipisicing consectetur aliqua pariatur dolor proident in
                  adipisicing consectetur dolor occaecat Lorem&quot;
                </p>
                <Button
                  variant="link"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="h-5 p-0 text-blue-500 mt-1"
                >
                  {isExpanded ? "less" : "more"}
                </Button>
                {/* Footer with Rating and Location */}
                <div className="flex items-center text-sm mt-2 ">
                  <span>
                    5 ⭐ <span className="font-semibold">Elevated S</span>,
                    United States
                  </span>
                  <span className="text-gray-500 pl-1">15 Jul 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="flex flex-col pt-2 border hover:border-d-red-500 rounded-r-xl"
          style={{
            backgroundImage:
              "url(https://online.citi.com/JRS/banners/hero_background/Citi-futuristic-angles-bg-compressed.jpg)",
          }}
        >
          {/* Store Owner's Tip */}
          <div className="p-4 bg-blue-50 border border-blue-300 rounded-xl ml-5 mr-5 mb-3 mt-3">
            <div className="flex items-center text-sm font-semibold relative">
              <img
                src="https://www.greatschools.org/assets/school_profiles/brown-owl-febd0a2f350bc84d4080cf9bdbe231373b8608e9c7cc45aff419f3dec0520470.svg"
                alt="owl"
                className="w-8 h-9 absolute -top-7" // Set width and height for the image
              />
              <span className="ml-10 text-sm font-bold absolute -top-3">
                Store Owner's Tip
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2 font-normal pt-1">
              Up-to-date tech: Works with the latest versions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="border bg-white p-4 rounded flex flex-col ml-5">
              <h3 className="text-xl font-bold tracking-tight">309</h3>
              <div className="flex items-center mt-1">
                <p className="text-xs text-muted-foreground text-gray-500">
                  SD Points
                </p>
                <Info className="text-gray-500 w-3 h-3 ml-1" />
              </div>
            </div>
            <div className="border bg-white p-4 rounded flex flex-col mr-5">
              <h3 className="text-xl font-bold tracking-tight">12%</h3>
              <div className="flex items-center mt-1">
                <p className="text-xs text-muted-foreground text-gray-500">
                  Market Share
                </p>
                <Info className="text-gray-500 w-3 h-3 ml-1" />
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="p-4  border-gray-300 rounded-xl ml-5 mr-5 mt-2">
            <h4 className="text-md font-bold">Summary</h4>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-500">
                <p>Launch Date</p>
                <p className="text-gray-700 font-semibold">18 May 2011</p>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <p>Developer</p>
                <p className="text-blue-500">Back in Stock</p>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <p>Ratings</p>
                <p className="text-gray-400">
                  <BadgeRating rating={4.8} totalReviews={886} />
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <Button className="h-20 bg-black rounded-lg font-bold text-white text-2xl hover:bg-gray-800 mt-auto ml-4 mr-4 mb-5 flex flex-col items-center">
            Install Now
            <p className="text-xs text-muted-foreground text-center text-slate-200">
              Rated 4.8 by 861 store owners
            </p>
          </Button>
        </div>
      </div>

      {hover && (
        <div
          className=" border-red-500 border rounded-t-xl rounded-b-xl shadow-lg w-[300px] h-[100px]transition-transform duration-300 bg-white h-[500px]"
          onMouseEnter={() => setHover(true)}
        >
          <div className="w-full flex flex-col bg-contain bg-center rounded-t-xl p-0 h-[240px] relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611244419377-b0a760c19719?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="temp bg"
              className="w-full"
            />
            <div className="absolute inset-0 px-2">
              <div className="h-full flex">
                <div
                  className="leading-none p-4 rounded-2xl mt-auto mb-2 text-2xl font-semibold tracking-tight text-white border w-full bg-opacity-80 backdrop-filter backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(193, 20, 20, 0.8)",
                    borderColor: "rgb(229, 29, 29)",
                  }}
                >
                  <p>Install in</p>
                  <p>Your Store Now</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-6 pt-4 space-y-4 rounded-b-xl">
            <div className="max-w-[275px] w-full space-y-2">
              <Input type="text" placeholder="Full Name" className="rounded" />
              <Input
                type="email"
                placeholder="Your Email"
                className="rounded"
              />
              <Input
                type="url"
                placeholder="Your Shopify Store URL"
                className="rounded"
              />
            </div>

            <div className="max-w-[275px] w-full flex flex-col items-center gap-2 ">
              <Button className="w-full bg-red-500 hover:bg-red-400 font-semibold text-base">
                Schedule Now
              </Button>
              <div className="bg-blue-100 rounded-md w-max px-2.5">
                <span className="text-sm text-blue-900 font-semibold">
                  72 customers chose this
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
