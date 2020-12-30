import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  // 미리 만들어둔 api 사용
  // https://github.com/jaeuk2274/movie-graphql.git
  uri: "http://localhost:4000/",
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.writeData({
          id: `Movie:${id}`,
          data: {
            isLiked: !isLiked
          }
        });
      }
    }
  }
});

export default client;