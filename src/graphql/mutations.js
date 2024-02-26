import { gql } from '@apollo/client';

export const register = gql`
  mutation Register($email: String!, $password: String!) {
    register(input: { email: $email, password: $password {
      token
    }
  }
`;

export const login = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
    }
  }
`;

export const createPoll = gql`
  mutation CreatePoll($question: String!, $options: [String]!) {
    createPoll(input: { question: $question, options: $options }) {
      id
      question
      options
      answers
    }
  }
`;

export const vote = gql`
  mutation Vote($pollId: ID!, $optionIndex: Int!) {
    vote(input: { pollId: $pollId, optionIndex: $optionIndex }) {
      id
      question
      options
      answers
    }
  }
`;