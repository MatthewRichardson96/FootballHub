// const client = ...
import {client} from './apollo-client';
import { gql } from '@apollo/client';

client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));