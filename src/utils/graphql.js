import { request } from 'graphql-request';
import nhost from '../utils/nhost';
import { GET_POLLS } from '../graphql/queries';

const graphqlClient = request(`${nhost.backendUrl}/v1/graphql`);

export const getPolls = async () => {
  const { polls } = await graphqlClient.request(GET_POLLS);
  return polls;
};