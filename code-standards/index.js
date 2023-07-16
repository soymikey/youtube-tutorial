// naming convention
const str = "Mike";
const int = 10;

//good
const name = "Mike";
const age = 10;
//
function showFriendsList() {}
//good  should/is/can/has
function shouldShowFriendsList() {}
function isShowFriendsList() {}
function hasLicense() {}

function sendEmailToUser() {}

//variable fallback  optional chaining

// const { data } = getApiRequest();
// data.map((s) => s.id);

//
const { data = [] } = getApiRequest();
data.map((s) => s?.id);

//helper function must be pure function

// function plusAbc(a, b, c) {
//   var c = fetch("../api");
//   return a + b + c;
// }

function plusAbc(a, b, c) {
  return a + b + c;
}

//better to use declarative programming

const arr = [1, 2, 3, 4];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  arr[index] = element + 1;
}

const newArr = arr.map((item) => item + 1);
//Avoid nesting ternary operators

// isSubscribed ? (
//   <ArticleRecommendations />
// ) : isRegistered ? (
//   <SubscribeCallToAction />
// ) : (
//   <RegisterCallToAction />
// );

//
// function CallToActionWidget({ subscribed, registered }) {
//   if (subscribed) {
//     return <ArticleRecommendations />;
//   }

//   if (registered) {
//     return <SubscribeCallToAction />;
//   }

//   return <RegisterCallToAction />;
// }

// listing comp should be a separate comp
function Component({ topic, page, articles, onNextPage }) {
  return (
    <div>
      <h1>{topic}</h1>
      {articles.map((article) => (
        <div>
          <h3>{article.title}</h3>
          <p>{article.teaser}</p>
          <img src={article.image} />
        </div>
      ))}
      <div>You are on page {page}</div>
      <button onClick={onNextPage}>Next</button>
    </div>
  );
}

function Component2({ topic, page, articles, onNextPage }) {
  return (
    <div>
      <h1>{topic}</h1>
      <ArticlesList articles={articles} />
      <div>You are on page {page}</div>
      <button onClick={onNextPage}>Next</button>
    </div>
  );
}
//Avoid nesting rendering functions
function Component3() {
  function renderHeader() {
    return <header>...</header>;
  }
  return <div>{renderHeader()}</div>;
}

import Header from "@modules/common/components/Header";

function Component4() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

// comp/function import export orders
import React from "react";
import Header from "@components/header";
import Content from "./Content";

export { Content, Header };
export default Component;
