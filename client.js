import { DDPLink } from './lib/client/apollo-link-ddp';

export * from './lib/client/apollo-link-ddp';
export * from './lib/client/ddp-network-interface';
export * from './lib/common/isSubscription';

// It is common for Apollo Links to export the link itself as the default
export default DDPLink;
