export const HomePage = () => {
  return (
    <div className="container">
      <div className="flex max-w-screen-xl mx-auto">
        <div className="w-full">
          <h1 className="text-center text-2xl font-bold mb-8">
            Music Formation
          </h1>
          <div className="relative w-full aspect-[2/3] bg-emerald-600 border-2 border-white rounded-lg p-4 max-w-5xl mx-auto">
            <div className="absolute inset-0 flex flex-col">
              <div className="h-1/4 border-b-2 border-white" />{" "}
              <div className="flex-1 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-2 border-white" />{" "}
              </div>
              <div className="h-1/4 border-t-2 border-white" />{" "}
              <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-white" />
            </div>
            <div className="relative h-full flex flex-col justify-between">
              <div className="flex justify-evenly pt-16">
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-red-500 rounded-full mb-2 flex items-center justify-center text-xl">
                    SW
                  </div>
                  <p className="text-base">Witchy Woman</p>
                </div>
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-red-500 rounded-full mb-2 flex items-center justify-center text-xl">
                    SS
                  </div>
                  <p className="text-base">Shining Star</p>
                </div>
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-red-500 rounded-full mb-2 flex items-center justify-center text-xl">
                    MB
                  </div>
                  <p className="text-base">Mr. Bones</p>
                </div>
              </div>

              <div className="flex justify-evenly">
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full mb-2 flex items-center justify-center text-xl">
                    ML
                  </div>
                  <p className="text-base">Lockyer</p>
                </div>
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full mb-2 flex items-center justify-center text-xl">
                    TE
                  </div>
                  <p className="text-base">Eagles</p>
                </div>
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full mb-2 flex items-center justify-center text-xl">
                    EW
                  </div>
                  <p className="text-base">Earth, Wind</p>
                </div>
              </div>
              <div className="flex justify-evenly mt-auto">
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-yellow-500 rounded-full mb-2 flex items-center justify-center text-xl">
                    LB
                  </div>
                  <p className="text-base">Left Back</p>
                </div>
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-yellow-500 rounded-full mb-2 flex items-center justify-center text-xl">
                    CB
                  </div>
                  <p className="text-base">Center Back</p>
                </div>
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-yellow-500 rounded-full mb-2 flex items-center justify-center text-xl">
                    CB
                  </div>
                  <p className="text-base">Center Back</p>
                </div>
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-yellow-500 rounded-full mb-2 flex items-center justify-center text-xl">
                    RB
                  </div>
                  <p className="text-base">Right Back</p>
                </div>
              </div>

              <div className="flex justify-center pb-24">
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-gray-500 rounded-full mb-2 flex items-center justify-center text-xl">
                    GK
                  </div>
                  <p className="text-base">Goalkeeper</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
