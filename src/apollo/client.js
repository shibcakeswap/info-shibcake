import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { SupportedNetwork } from "../constants";

[SupportedNetwork.BSC]: new ApolloClient({
    link: new HttpLink({
      uri: "https://thegraph.com/studio/subgraph/scssubgraph",
    }),
    cache: new InMemoryCache(),
    shouldBatch: true,
  }),
  
// export const client = new ApolloClient({
//  link: new HttpLink({
//    uri: 'https://thegraph.com/studio/subgraph/scssubgraph',
//  }),
//  cache: new InMemoryCache(),
//  shouldBatch: true,
// })

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.bscgraph.org/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://thegraph.com/studio/subgraph/shibcakeswapblocksv2',
  }),
  cache: new InMemoryCache(),
})
