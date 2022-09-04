import React, { useEffect, useState } from "react";

import SingleVideo from "../SingleVideo/SingleVideo";

const VideoGallery = () => {
  const [videos, setVideos] = useState();
  useEffect(() => {
    fetch("http://localhost:9000/videos")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => setVideos(data));
  }, []);

  return (
    <main>
      {/* <!-- Tags --> */}
      <section>
        <div class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          <div class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
            react
          </div>
          {/* <!-- selected --> */}
          <div class="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
            redux
          </div>
        </div>
      </section>

      {/* <!-- Video Grid --> */}
      <section class="pt-12">
        <section class="pt-12">
          <div class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {/* <!-- single video --> */}
            {videos?.map((video) => (
              <SingleVideo video={video} key={video.id}></SingleVideo>
            ))}

            {/* <!-- error section
                    <div class="col-span-12">some error happened</div> --> */}
          </div>
        </section>
      </section>

      {/* <!-- pagination--> */}
      <section class="pt-12">
        <div class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
          <div class="bg-blue-600 text-white px-4 py-1 rounded-full">1</div>
          <div class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">2</div>
          <div class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">3</div>
          <div class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">4</div>
        </div>
      </section>
    </main>
  );
};

export default VideoGallery;
