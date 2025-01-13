import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import BadgeRating from "./BadgeRating";
import { Check, ThumbsUp, ThumbsDown, X, Info } from "lucide-react";
import dayjs from "dayjs";
import Link from "next/link";
import ExpandingReview from "./ExpandingReview";

export default function AppCard({ app, index, page, limit }) {
  page === 1 ? index : (index = (page - 1) * limit + index);

  const [hover, setHover] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="relative flex flex-col customResolution:flex-row min-w-[210px] max-w-[82rem] m-4 sm:m-6 text-neutral-950"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="customSmallResolution:absolute relative customSmallResolution:-top-3 top-3.5 left-7 customSmallResolution:left-6 mr-10">
        {index <= 2 ? (
          <Badge
            variant="outline"
            className="text-sm bg-customRed text-white rounded-md border px-3 py-0.5"
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
        className={`flex flex-col customResolution:flex-row transition-all duration-200 lg:rounded-xl border rounded-t-xl rounded-b-xl mr-0 customResolution:mr-4
        ${hover ? "border-red-500 shadow-2xl" : ""}`}
      >
        {/* Left Section */}
        <div className="flex flex-col w-full customResolution:w-[77%] rounded-t-xl rounded-tr-none customResolution:rounded-l-xl lg:col-span-2 gap-4 p-6">
          {/* Header Section */}
          <div className="flex flex-col customResolution:flex-row items-start gap-2">
            {/* App Icon */}
            <div className="flex flex-col">
              <img
                src={app.iconUrl}
                alt="App Icon"
                className="w-20 h-20 rounded-xl border"
              />

              <div className="flex pt-2 pr-2 left-0 text-start items-center">
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
            <div className="flex-1 space-y-0.5 pt-3 customResolution:p-0">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{app.name}</h2>
              </div>
              <p className="text-sm text-muted-foreground -mt-1">
                {app.taglineGpt}
              </p>
              <p className="text-sm font-semibold">
                <span className="font-semibold">Pricing Plans:</span>{" "}
                <span className="text-blue-500">
                  Free, $19/month, $49/month, $69/month
                </span>
              </p>
              <p className="text-sm font-semibold">
                <span className="font-semibold">Free Trial:</span>{" "}
                <span className="text-green-500">14 days</span>
              </p>
            </div>
          </div>

          <div className="border-b"></div>

          {/* Pros & Cons */}
          <div className="grid grid-row gap-6 mb-2">
            {/* Pros */}
            <div>
              <h3 className="flex items-center gap-2 text-md font-semibold mb-2">
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
              <h3 className="flex items-center gap-2 text-md font-semibold mb-2">
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
          <ExpandingReview />
          {/* <div className="p-4 bg-white border border-dashed rounded-lg">
            <div className="grid grid-col-1 customSmallResolution:grid-flow-col items-start">
              Image
              <div className="">
                <img
                  src="images/temp-profile-picture.jpg"
                  alt="icon"
                  className="w-12 h-12 mr-3 rounded-full justify-center items-center" // Adjust width, height, and spacing
                />
              </div>
              Content Section
              <div className="">
                Paragraph with Expand/Collapse Button
                <p
                  className={`${
                    isExpanded ? "line-clamp-none" : "line-clamp-2"
                  } text-muted-foreground text-sm`}
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
                Footer with Rating and Location
                <div className="flex items-center text-sm mt-2">
                  <span>
                    5⭐ <span className="font-semibold"> Elevated S</span>,
                    United States
                  </span>
                  <span className="text-muted-foreground pl-1">
                    15 Jul 2022
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Right Section */}
        <div
          className="flex flex-col pt-3 w-full customResolution:w-[41%] rounded-b-xl customResolution:rounded-l-none lg:border-l lg:border-t-0 hover:border-d-red-500 border-t customResolution:rounded-r-xl"
          style={{
            backgroundImage:
              "url(https://online.citi.com/JRS/banners/hero_background/Citi-futuristic-angles-bg-compressed.jpg)",
          }}
        >
          {/* Store Owner's Tip */}
          <div className="p-4 grid customSmallResolution:grid-cols-1 bg-blue-50 border border-blue-300 rounded-md ml-5 mr-5 mb-4 mt-3">
            <div className="flex items-center text-sm font-semibold relative mb-2">
              <img
                src="https://www.greatschools.org/assets/school_profiles/brown-owl-febd0a2f350bc84d4080cf9bdbe231373b8608e9c7cc45aff419f3dec0520470.svg"
                alt="owl"
                height={32}
                width={32}
                className="absolute -top-6" // Set width and height for the image
              />
              <h3 className="mt-1 ml-10 text-sm font-bold relative customSmallResolution:absolute -top-3">
                Store Owner&apos;s Tip
              </h3>
            </div>
            <div className="text-sm text-neutral-600 mt-2 font-normal">
              Up-to-date tech: Works with the latest versions.
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border bg-white p-4 rounded-md flex flex-col ml-5">
              <h3 className="text-xl font-bold tracking-tight">
                {app.computedParams?.sd_points
                  ? Math.round(app.computedParams.sd_points)
                  : 0}
              </h3>
              <div className="flex items-center">
                <p className="text-xs text-muted-foreground text-gray-500">
                  SD Points
                </p>
                <Info className="hidden customSmallResolution:block text-gray-500 w-3 h-3 ml-1" />
              </div>
            </div>
            <div className="border bg-white p-4 rounded-md flex flex-col mr-5">
              <h3 className="text-xl font-bold tracking-tight">12%</h3>
              <div className="flex items-center">
                <p className="text-xs text-muted-foreground text-gray-500">
                  Market Share
                </p>
                <Info className="hidden customSmallResolution:block text-gray-500 w-3 h-3 ml-1" />
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="ml-5 mr-5 mt-2 pt-4">
            <h4 className="font-semibold text-sm">Summary</h4>
            <div className="mt-1.5 xl:mb-6">
              <div className="flex justify-between text-sm text-gray-500">
                <p>Launch Date</p>
                <p className="text-neutral-950 font-normal">
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
          <Button className="h-20 bg-black rounded-lg text-white font-semibold text-xl hover:bg-neutral-800 mt-6 customResolution:mt-auto  ml-5 mr-5 mb-6 flex flex-col gap-0 items-center">
            <span>Install Now</span>
            <span className="text-xs font-normal">
              Rated {app.rating} by {app.totalReview} store owners
            </span>
          </Button>
        </div>
      </div>

      <div
        className={`${
          hover ? "visible" : "invisible"
        } hidden customResolution:block border-red-500 border rounded-xl shadow-lg max-w-[300px] transition-transform duration-300 bg-white h-max`}
        onMouseEnter={() => setHover(true)}
      >
        <div className="w-full flex flex-col bg-contain bg-center rounded-t-xl p-0 h-[270px] relative overflow-hidden">
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
            <Input type="email" placeholder="Your Email" className="rounded" />
            <Input
              type="url"
              placeholder="Your Shopify Store URL"
              className="rounded"
            />
          </div>

          <div className="max-w-[275px] w-full flex flex-col items-center gap-2 ">
            <Button className="w-full bg-customRed hover:bg-customRed/80 font-semibold text-base">
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
    </div>
  );
}
