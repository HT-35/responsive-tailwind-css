import Button from "../button/Button";

const DetailPage = () => {
  return (
    <>
      <div
        className="flex items-center justify-center  gap-6 content 
      
  
   
      max-lg:flex
      max-lg:items-center
      lg:flex
      lg:items-center

      sm:grid
      sm:grid-cols-1
      max-sm:grid
      max-sm:grid-cols-1
      "
      >
        <div
          className="flex items-center h-[400px] justify-center gap-6 img basis-1/2 max-h-[400px] overflow-hidden
        


   
        max-sm:gap-2
        "
        >
          <div
            className="img1 basis-3/5 h-[400px] bg-cover bg-center bg-no-repeat        "
            style={{
              backgroundImage: `url('https://coffee-style-trungquandev.web.app/img/magazine-image-01.jpeg')`,
            }}
          ></div>
          <div className="grid w-full grid-cols-1 gap-6 img2 basis-2/5 max-sm:gap-2">
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

        <div
          className="pr-44 pb-18 text-context basis-1/2
        
         md:basis-1/2
         md:pr-0
         max-md:basis-1/2
         max-md:pr-0

        "
        >
          <p
            className="mb-10 text-xs font-medium text-left text-gray-500   
          md:mb-5
          md:text-left
          max-md:text-center
          max-md:mb-3
          "
          >
            PREMIUM OFFER
          </p>
          <h1
            className="pr-10 mb-10 text-4xl leading-10 text-left  
          md:text-2xl
          md:mb-3
          md:text-left
          md:pr-0

         max-md:text-xl
         max-md:mb-3
         max-md:text-center
         max-md:pr-0
          "
          >
            Get our Coffee Magazine
          </h1>
          <h1
            className="leading-7 text-left text-gray-500 mb-9 
                   md:basis-1/2
         md:pr-0
         md:text-left
         
         max-md:basis-1/2
         max-md:pr-0
         max-md:text-center
         max-md:text-sm
         md:mb-3
        max-md:mb-3
          "
          >
            The most versatile furniture system ever created. Designed to fit
            your life.
          </h1>
          <div className="flex justify-start           md:justify-start max-md:justify-center">
            <Button bgText="bg-black text-white">START SHOPPING</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
