import React from "react";
import { useNavigate } from "react-router-dom";
const SingleVideo = ({ video }) => {
  const {
    author,
    title,
    date,
    avatar,
    description,
    id,
    duration,
    link,
    thumbnail,
    unlike,
    views,
  } = video || {};
  const navigate = useNavigate();
  return (
    <>
      <div class="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
        <div class="w-full flex flex-col">
          <div class="relative">
            <img
              onClick={() => navigate(`video/${id}`)}
              src={thumbnail}
              class="w-full h-auto cursor-pointer"
              alt="Some video title"
            />

            <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
              {duration}
            </p>
          </div>

          <div class="flex flex-row mt-2 gap-2">
            <a href="google.com" class="shrink-0">
              <img
                src={avatar}
                class="rounded-full h-6 w-6"
                alt="Learn with Sumit"
              />
            </a>

            <div class="flex flex-col">
              <p
                class="text-slate-900 text-sm font-semibold cursor-pointer"
                onClick={() => navigate(`video/${id}`)}
              >
                {title}
              </p>

              <a
                class="text-gray-400 text-xs mt-2 hover:text-gray-600"
                href="google.com"
              >
                {author}
              </a>
              <p class="text-gray-400 text-xs mt-1">
                {views} .{date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleVideo;
