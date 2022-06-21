import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4nki92p079b01xmaqrccnk9/master",
  cache: new InMemoryCache(),
});
