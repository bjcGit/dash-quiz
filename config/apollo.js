import {ApolloClient, HttpLink, InMemoryCache, createHttpLink} from '@apollo/client'
import { setContext } from 'apollo-link-context';

// const httpLink = createHttpLink({
//     uri: 'http://localhost:4000/',
// });

// const authLink = setContext((_, {headers}) => {

//     const token = localStorage.getItem('token')

//     return {
//         headers: {
//             ...headers,
//             authorization: token ? `Bearer ${token}` : ''
//         }
//     }
// })


// const client = new ApolloClient({
//   // Provide required constructor fields
//     cache: new InMemoryCache(),
//     link: authLink.concat( httpLink )

// });

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:4000/'
    })
})

export default client