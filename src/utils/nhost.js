import { createClient } from '@nhost/react';
import nhostConfig from '../nhost.config';

const nhost = createClient({
  backendUrl: nhostConfig.connectionString,
});

export default nhost;