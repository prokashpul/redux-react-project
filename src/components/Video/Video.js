import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import vlike from "../../assets/like.svg";
import vunlike from "../../assets/unlike.svg";

const Video = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  useEffect(() => {
    fetch(`http://localhost:9000/videos/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => setVideo(data));
  }, [id]);
  const {
    author,
    title,
    date,
    avatar,
    description,
    duration,
    likes,
    link,
    thumbnail,
    unlikes,
    views,
  } = video || {};

  return (
    <>
      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">
              {/* <!-- video player --> */}
              <iframe
                width="100%"
                class="aspect-video"
                src={link}
                title="Some video title"
                frameborder=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              {/* <!-- video description --> */}
              <div>
                <h1 class="text-lg font-semibold tracking-tight text-slate-800">
                  {title}
                </h1>
                <div class="pb-4 flex items-center space-between border-b">
                  <h2 class="text-sm leading-[1.7142857] text-slate-600 w-full">
                    Uploaded on {date}
                  </h2>

                  {/* <!-- like/unlike --> */}
                  <div class="flex gap-10 w-48">
                    <div class="flex gap-1">
                      <div class="shrink-0">
                        <img class="w-5 block" src={vlike} alt="Like" />
                      </div>
                      <div class="text-sm leading-[1.7142857] text-slate-600">
                        {likes}
                      </div>
                    </div>
                    <div class="flex gap-1">
                      <div class="shrink-0">
                        <img class="w-5 block" src={vunlike} alt="Unlike" />
                      </div>
                      <div class="text-sm leading-[1.7142857] text-slate-600">
                        {unlikes}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-4 text-sm text-[#334155] dark:text-slate-400">
                  {description}
                </div>
              </div>
            </div>

            {/* <!-- related videos --> */}
            <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
              {/* <!-- single related video --> */}
              <div class="w-full flex flex-row gap-2 mb-4">
                <div class="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
                  <a href="video.html">
                    <img
                      src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
                      class="object-cover"
                      alt="Some video title"
                    />
                  </a>
                  <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                    12:10
                  </p>
                </div>

                <div class="flex flex-col w-full">
                  <a href="#">
                    <p class="text-slate-900 text-sm font-semibold">
                      Some video title
                    </p>
                  </a>
                  <a
                    class="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    href="#"
                  >
                    Learn with Sumit
                  </a>
                  <p class="text-gray-400 text-xs mt-1">
                    100K views . 23 Oct 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
