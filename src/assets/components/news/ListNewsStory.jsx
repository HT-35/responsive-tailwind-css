import Product from "../product/Product";

import PropTypes from "prop-types";

const story = [
  {
    id: 1,
    url: "https://coffee-style-trungquandev.web.app/img/lifestyle-story-01.jpeg",
    title:
      "Health Check: why do I get a headache when I haven't had my coffee?",
    content:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    number: "OCTOBER 9, 2018",
  },
  {
    id: 2,
    url: "https://coffee-style-trungquandev.web.app/img/lifestyle-story-02.jpeg",
    title: "How long does a cup of coffee keep you awake?",
    content:
      "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
    number: "OCTOBER 15, 2018",
  },
  {
    id: 3,
    url: "https://coffee-style-trungquandev.web.app/img/lifestyle-story-03.jpeg",
    title:
      "Recent research suggests that heavy coffee drinkers may reap health benefits.",
    content:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    number: "OCTOBER 9, 2022",
  },
];

const ListNewsStory = ({ halfHeight }) => {
  return (
    <div
      className="grid grid-cols-3  mb-10 
    
    md:gap-y-9
    md:gap-6
    md:grid-cols-2

    max-md:gap-6
    max-md:grid-cols-1
    
    "
    >
      {story.map((item) => {
        const { id, url, title, content, number } = item;
        return (
          <Product
            key={id}
            url={url}
            title={title}
            content={content}
            number={number}
            halfHeight={halfHeight}
          ></Product>
        );
      })}
    </div>
  );
};

ListNewsStory.propTypes = {
  halfHeight: PropTypes.number,
};

export default ListNewsStory;
