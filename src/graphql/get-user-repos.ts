import { gql } from "@apollo/client";

export const GET_USER_REPOS = gql`
  query GetUserRepos($username: String!, $first: Int!) {
    user(login: $username) {
      repositories(first: $first) {
        nodes {
          name
          description
          stargazerCount
          forkCount
          updatedAt
          primaryLanguage {
            name
          }
          url
        }
      }
    }
  }
`;


