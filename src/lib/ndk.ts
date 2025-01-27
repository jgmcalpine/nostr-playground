import NDK from "@nostr-dev-kit/ndk";

const ndk = new NDK({
  explicitRelayUrls: [
    "wss://relay.damus.io",
    "wss://relay.nostr.band",
    // Add other relays as needed
  ],
});

export default ndk;
