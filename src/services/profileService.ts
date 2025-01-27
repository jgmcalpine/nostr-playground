import ndk from "../lib/ndk";

export async function fetchProfileData(pubkey: string) {
  await ndk.connect();
  return await ndk.getProfile({ pubkey });
}
