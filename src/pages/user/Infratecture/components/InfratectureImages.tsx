import React from "react";

const InfratectureImages: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-12 md:grid-rows-12 gap-4 mb-24 lg:mx-24 mx-4 h-auto md:h-screen">
      {/* Image 1 */}
      <div className="md:col-span-3 md:row-span-4 rounded-xl bg-slate-400 overflow-hidden motion-preset-expand">
        <img
          src="https://www.leatherfairind.com/assets/images/tennery.png"
          alt="1"
          className="h-full w-full object-cover hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>

      {/* Image 2 */}
      <div className="md:col-span-5 md:row-span-3 rounded-xl bg-violet-400 overflow-hidden motion-preset-expand">
        <img
          src="https://tirubalaleather.com/wp-content/uploads/2023/01/DSCF8154.jpg"
          alt="Image2"
          className="h-full w-full object-cover  hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>

      {/* Image 3 */}
      <div className="md:col-span-4 md:row-span-6 rounded-xl bg-red-400 overflow-hidden motion-preset-expand">
        <img
          src="https://tirubalaleather.com/wp-content/uploads/2023/01/DSCF8139-3.jpg"
          alt="Image3"
          className="h-full w-full object-cover  hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>

      {/* Image 4 with Gradient Overlay */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://tirubalaleather.com/wp-content/uploads/2023/01/DSCF8139-4.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="md:col-span-5 md:row-span-4 rounded-xl bg-green-400 overflow-hidden motion-preset-expand flex items-center justify-center"
      >
        <div>
          <h1 className="text-red-500 font-bold text-4xl md:text-6xl">LEO</h1>
          <p className="font-semibold text-gray-300 text-sm md:text-base">VINYLS</p>
        </div>
      </div>

      {/* Image 5 */}
      <div className="md:col-span-3 md:row-span-3 rounded-xl bg-pink-400 overflow-hidden motion-preset-expand">
        <img
          src="https://tirubalaleather.com/wp-content/uploads/2022/11/desin-for-website-1.jpg1_-1.jpg"
          alt="Image5"
          className="h-full w-full object-cover  hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>

      {/* Image 6 */}
      <div className="md:col-span-4 md:row-span-6 rounded-xl bg-slate-400 overflow-hidden motion-preset-expand">
        <img
          src="https://in.thedollarbusiness.com/assets/magazines/thumb/32843_Leather-nov-2016-33090.jpg"
          alt="Image6"
          className="h-full w-full object-cover  hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>

      {/* Image 7 */}
      <div className="md:col-span-5 md:row-span-5 rounded-xl bg-slate-400 overflow-hidden motion-preset-expand">
        <img
          src="https://tirubalaleather.com/wp-content/uploads/2023/01/DSCF8139-1.jpg"
          alt="Image7"
          className="h-full w-full object-cover  hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>

      {/* Image 8 */}
      <div className="md:col-span-3 md:row-span-5 rounded-xl bg-slate-400 overflow-hidden motion-preset-expand">
        <img
          src="https://i.ytimg.com/vi/9k0X2myjXc4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDGNbyM1uZ6LgzaMx7PyeNkpIGPSA"
          alt="Image8"
          className="h-full w-full object-cover  hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default InfratectureImages;