"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function ExpandingReview() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-xl flex items-center gap-4 p-3 border border-dashed rounded-md">
      <Avatar className="h-12 w-12 hidden md:block">
        <AvatarImage src="/images/temp-profile-picture.jpg" />
        <AvatarFallback>XY</AvatarFallback>
      </Avatar>
      <div className="flex flex-col md:flex-col-reverse gap-2">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Avatar className="h-8 w-8 block md:hidden">
            <AvatarImage src="/images/temp-profile-picture.jpg" />
            <AvatarFallback>XY</AvatarFallback>
          </Avatar>
          <div className="flex flex-col md:flex-row gap-1">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-0.5">
                5{" "}
                <Star className="fill-orange-300 text-orange-300 h-3.5 w-3.5" />
              </span>
              <p>
                <span className="font-semibold">Elevated S</span>, United States
              </p>
            </div>
            <span className="text-muted-foreground">15 Jul 2022</span>
          </div>
        </div>
        <div>
          <p
            className={cn(
              isExpanded ? "line-clamp-none" : "line-clamp-2",
              "text-muted-foreground text-sm"
            )}
          >
            &quot;consectetur eu qui ipsum velit non labore consequat incididunt
            eiusmod esse excepteur esse deserunt esse minim proident in
            adipisicing consectetur aliqua pariatur dolor occaecat Lorem&quot;
          </p>
          <Button
            variant="link"
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-5 p-0 text-blue-500"
          >
            {isExpanded ? "less" : "more"}
          </Button>
        </div>
      </div>
    </div>
  );
}
