import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/"
  // 미리 만들어둔 api 사용
  // https://github.com/jaeuk2274/movie-graphql.git
});

export default client;