import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import BadgeRating from "./BadgeRating";
import { Check, ThumbsUp, ThumbsDown, X, Info } from "lucide-react";
import dayjs from "dayjs";
import Link from "next/link";

export default function AppCard({ app, index, page, limit }) {
  page === 1 ? index : (index = (page - 1) * limit + index);

  const [hover, setHover] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="relative grid grid-cols-1 col-span-1 md:grid-cols-3 gap-x-4 mt-10 pl-12 ml-40 mr-20"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="absolute -top-3.5 left-6 pl-12">
        {index <= 2 ? (
          <Badge
            variant="outline"
            className="text-sm bg-red-500 text-white rounded-md border px-2.5 py-0.5"
          >
            #{index + 1} Highly Recommended
          </Badge>
        ) : (
          <Badge className="text-sm bg-red-100 text-red-500 rounded-md border border-red-600">
            Ranked #{index + 1}
          </Badge>
        )}
      </div>

      {/* Main Card */}
      <div
        className={`col-span-2 grid grid-cols-1 2xl:grid-cols-3 transition-all duration-200 2xl:rounded-xl border rounded-t-xl rounded-b-xl
        ${hover ? "border-red-500 shadow-2xl" : ""}`}
      >
        {/* Left Section */}
        <div className="rounded-t-xl 2xl:rounded-l-xl lg:col-span-2 flex flex-col gap-6 p-6 bg-white pl-8">
          {/* Header Section */}
          <div className="flex items-start gap-2">
            {/* App Icon */}
            <div className="items-center flex flex-col space-x-2">
              <img
                src={app.iconUrl}
                alt="App Icon"
                className="w-20 h-20 rounded-xl border"
              />

              <div className="flex py-2 pr-2 left-0 text-start items-center">
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
                <h2 className="text-xl font-semibold">{app.name}</h2>
              </div>
              <p className="text-sm text-muted-foreground -mt-1">
                {app.taglineGpt}
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
              <div className="space-y-2">
                {app.features
                  .slice(0, app.features.length / 2 + 1)
                  .map((feature, idx) => (
                    <p className="flex items-center gap-2" key={idx}>
                      <Check className="h-5 w-5 shrink-0 text-green-500" />
                      {feature.featureGpt || feature.featureSource}
                    </p>
                  ))}
              </div>
            </div>
            {/* Cons */}
            <div>
              <h3 className="flex items-center gap-2 text-md font-semibold">
                <ThumbsDown className="w-4 h-4" /> Cons
              </h3>
              <div className="space-y-2">
                {app.features
                  .slice(app.features.length / 2 + 1)
                  .map((feature, idx) => (
                    <p className="flex items-center gap-2" key={idx}>
                      <X className="h-5 w-5 shrink-0 text-red-500" />
                      {feature.featureGpt || feature.featureSource}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          {/* Review Section */}
          <div className="p-4 bg-white border border-dashed rounded-lg">
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
                  } text-muted-foreground text-sm text-gray-500`}
                >
                  &quot;consectetur eu qui ipsum velit non labore consequat
                  incididunt eiusmod esse excepteur esse deserunt esse minim
                  proident in adipisicing consectetur aliqua pariatur dolor
                  occaecat Lorem&quot;
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
                    5⭐ <span className="font-semibold"> Elevated S</span>,
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
          className="flex flex-col pt-2 rounded-b-xl 2xl:border-l 2xl:border-t-0 hover:border-d-red-500 border-t 2xl:rounded-r-xl"
          style={{
            backgroundImage:
              "url(https://online.citi.com/JRS/banners/hero_background/Citi-futuristic-angles-bg-compressed.jpg)",
          }}
        >
          {/* Store Owner's Tip */}
          <div className="p-4 bg-blue-50 border border-blue-300 rounded-lg ml-5 mr-5 mb-4 mt-3">
            <div className="flex items-center text-sm font-semibold relative">
              <img
                src="https://www.greatschools.org/assets/school_profiles/brown-owl-febd0a2f350bc84d4080cf9bdbe231373b8608e9c7cc45aff419f3dec0520470.svg"
                alt="owl"
                height={32}
                width={32}
                className="absolute -top-7" // Set width and height for the image
              />
              <h3 className="mt-0.5 ml-10 text-sm font-bold absolute -top-3">
                Store Owner&apos;s Tip
              </h3>
            </div>
            <p className="text-sm text-neutral-600 mt-3 font-normal pt-0.5">
              Up-to-date tech: Works with the latest versions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border bg-white p-4 rounded-lg flex flex-col ml-5">
              <h3 className="text-xl font-bold tracking-tight">
                {app.computedParams?.sd_points
                  ? Math.round(app.computedParams.sd_points)
                  : 0}
              </h3>
              <div className="flex items-center mt-1">
                <p className="text-xs text-muted-foreground text-gray-500">
                  SD Points
                </p>
                <Info className="text-gray-500 w-3 h-3 ml-1" />
              </div>
            </div>
            <div className="border bg-white p-4 rounded-lg flex flex-col mr-5">
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
          <div className="ml-5 mr-5 mt-2 pt-4">
            <h4 className="font-semibold">Summary</h4>
            <div className="mt-1.5 xl:mb-6">
              <div className="flex justify-between text-sm text-gray-500">
                <p>Launch Date</p>
                <p className="text-gray-700 font-semibold">
                  {dayjs(app.launchDate).format("DD MMM YYYY")}
                </p>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <p className="text-muted-foreground">Developer</p>
                <Link
                  href={app.developer.partnerUrl}
                  target="_blank"
                  className="text-blue-500 hover:underline underline-offset-2 truncate"
                >
                  {app.developer.developerName}
                </Link>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <p>Ratings</p>
                <p className="text-gray-400">
                  <BadgeRating
                    rating={app.rating}
                    totalReviews={app.totalReview}
                  />
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <Button className="h-20 bg-black rounded-lg font-bold text-white text-2xl hover:bg-neutral-700 mt-4 xl:mt-auto  ml-5 mr-5 mb-6 flex flex-col gap-0 items-center">
            <span>Install Now</span>
            <span className="text-xs font-normal">
              Rated {app.rating} by {app.totalReview} store owners
            </span>
          </Button>
        </div>
      </div>

      {hover && (
        <div
          className=" border-red-500 border rounded-xl shadow-lg w-[300px] h-[100px]transition-transform duration-300 bg-white h-[500px]"
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
