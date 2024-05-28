import Button from "./assets/components/button/Button";
import DetailPage from "./assets/components/detailPage/DetailPage";
import Line from "./assets/components/line/Line";
import ListNewsStory from "./assets/components/news/ListNewsStory";
import ListProduct from "./assets/components/product/ListProduct";

const App = () => {
  return (
    <div className="wrapper mx-auto px-8 h-[5000px]">
      <header className="w-full p-6 mx-auto max-w-screen-2xl">
        <nav className="flex flex-row items-center justify-between">
          <div className="relative text-xl font-semibold text-center cursor-pointer logo basis-1/6">
            CoffeeStyle.
          </div>
          <div className="flex items-center justify-between gap-6 text-sm font-medium uppercase menu basis-3/6">
            <span>HOME</span>
            <span>PRODUCTS</span>
            <span>BLOG</span>
            <span>ABOUT</span>
            <span>CONTACT</span>
            <span>STYLEGUIDE</span>
            <span>HUYTRAN</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-center cart basis-1/6">
            <i className="fa-solid fa-bag-shopping"></i>
            <span>Cart</span>
            <span className="w-6 text-center bg-orange-200 rounded-full ">
              7
            </span>
          </div>
        </nav>
      </header>
      <main className="w-full p-6 mx-auto max-w-screen-2xl">
        <div className="relative h-[550px] w-full flex justify-center items-center">
          <div className="overlay absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.2)"></div>
          <div
            className="object-cover w-full h-full bg-bottom bg-no-repeat bg-cover slide"
            style={{
              backgroundImage: `url('https://coffee-style-trungquandev.web.app/img/slider-bg.jpeg')`,
            }}
          ></div>
          <div className="absolute grid gap-6 text-center text-white top-14">
            <h6 className="text-xl">BEST PLACE TO BUY COFFEE</h6>
            <h1 className="text-5xl font-bold">Coffee Mugs</h1>
            <h6 className="text-xl">
              The most versatile furniture system ever created. Designed to fit
              your life, made to move and grow.
            </h6>
            <div className="flex items-center justify-center ">
              <Button>Explore Our Products</Button>
            </div>
          </div>
        </div>
        <Line>OUR COFFEE STORY</Line>
        <div className="flex items-center justify-center gap-8 content max-w-screen-2xl">
          <div className="video basis-1/2">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover min-h-[350px]"
            >
              <source
                src="https://coffee-style-trungquandev.web.app/video/coffee-video.mp4"
                frameBorder="0"
              ></source>
            </video>
          </div>
          <div className="pr-10 text-context basis-1/2">
            <h1 className="pr-10 mb-3 text-4xl leading-10 text-left">
              What is your most special coffee?
            </h1>
            <h1 className="mb-4 leading-7 text-left text-gray-500">
              The French Press is a brewing method that comes closest to
              cupping. Cupping is the prescribed method by which coffee should
              be judged. Nothing separates the water from the coffee. To
              properly discover the flavours, it is best to drink the coffee
              this way. Everyone has their favourite brewing method.
            </h1>
            <span
              className="text-[#A25F4B] font-semibold  border-b-4 border-b-[#A25F4B] 
            hover:text-[#744838] hover:border-b-[#744838] hover:cursor-pointer select-none"
            >
              Read the full Story
            </span>
          </div>
        </div>
        <Line>FEATURED MUGS</Line>
        <div className="FEATURED-MUGS h-[540px] w-full flex justify-center items-center gap-8">
          <div className="basis-1/2 w-full h-full bg-no-repeat bg-cover object-cover  bg-[url('https://coffee-style-trungquandev.web.app/img/featured-mug-01.jpg')]"></div>

          <div className="basis-1/2 h-full bg-no-repeat bg-cover object-cover bg-[url('https://coffee-style-trungquandev.web.app/img/featured-mug-02.jpg')]"></div>
        </div>
        <Line>MORE PRODUCTS</Line>
        <ListProduct></ListProduct>
        <Line>BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE</Line>
        <DetailPage></DetailPage>
        <div className="mt-20">
          <img
            src="https://coffee-style-trungquandev.web.app/img/bg-parallax-01.jpeg"
            alt=""
          />
        </div>
        <Line>BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE</Line>
        <ListNewsStory></ListNewsStory>

        <div className="w-full h-[350px] bg-[#1d1f2e] flex flex-col   justify-start items-center">
          <Line margin="my-[50px]">SIGN UP AND GET FREE COFFEE BAGS</Line>
          <h1 className="mb-5 text-3xl text-white"> Coffee Updates</h1>
          <div className="flex items-center gap-5">
            <input
              type="text"
              placeholder="huytran.itvn@gmail.com"
              className=" px-5 py-7 bg-[#1d1f2e] font-semibold border-[1px] border-[#374151] w-[400px] h-[50px]"
            />
            <Button full="max-w-[200px]">SUBSCRIBE</Button>
          </div>
        </div>
      </main>

      <footer className="p-10 pb-32 text-sm w-[85%] mx-auto">
        <div className="flex items-start justify-center gap-10">
          <div className="flex flex-col gap-3 basis-1/4 Introduc">
            <h1 className="mb-5 text-2xl font-bold ">CoffeeStyle.</h1>
            <span>Delivering the best coffee life since 1996.</span>
            <span>From coffee geeks to the real ones.</span>
          </div>

          <div className="flex flex-col gap-3 Menu basis-1/4">
            <h1 className="mb-5 text-2xl font-bold ">MENU</h1>
            <span>Home</span>
            <span>Our Products</span>
            <span>About</span>
            <span>Contact</span>
            <span>Styleguide</span>
            <span>Trungquandev</span>
          </div>
          <div className="flex flex-col gap-3 Follow Introduce basis-1/4">
            <h1 className="mb-5 text-2xl font-bold ">FOLLLOW US</h1>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>Twitter</span>
          </div>
          <div className="flex flex-col gap-3 contact basis-1/4">
            <h1 className="mb-5 text-2xl font-bold ">CONTACT US</h1>
            <span>We are Always Happy to Help</span>
            <span>huytran.itvn@gmail.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
