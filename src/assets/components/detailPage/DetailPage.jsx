import Button from "../button/Button";

const DetailPage = () => {
  return (
    <>
      <div className="flex items-center justify-center mx-auto gap-7 content max-w-screen-2xl">
        <div className="flex items-center justify-center gap-6 img basis-1/2 max-h-[400px] overflow-hidden">
          <div
            className="img1 basis-3/5 h-[400px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://coffee-style-trungquandev.web.app/img/magazine-image-01.jpeg')`,
            }}
          ></div>
          <div className="grid w-full grid-cols-1 gap-6 img2 basis-2/5">
            <div
              className="img1 basis-3/5 h-[200px] bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('https://coffee-style-trungquandev.web.app/img/magazine-image-02.jpeg')`,
              }}
            ></div>
            <div
              className="img1 basis-3/5 h-[200px] bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('https://coffee-style-trungquandev.web.app/img/magazine-image-03.jpeg')`,
              }}
            ></div>
          </div>
        </div>

        <div className="pr-44 pb-18 text-context basis-1/2">
          <p className="mb-10 text-xs font-medium text-left text-gray-500 ">
            PREMIUM OFFER
          </p>
          <h1 className="pr-10 mb-10 text-4xl leading-10 text-left ">
            Get our Coffee Magazine
          </h1>
          <h1 className="leading-7 text-left text-gray-500 mb-9">
            The most versatile furniture system ever created. Designed to fit
            your life.
          </h1>
          <div className="flex justify-start">
            <Button bgText="bg-black text-white">START SHOPPING</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
