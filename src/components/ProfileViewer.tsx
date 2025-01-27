import { useState, useEffect } from "react";
import { NDKUserProfile } from "@nostr-dev-kit/ndk";
import ndk from "../lib/ndk";

interface ProfileViewerProps {
  npub: string;
}

export default function ProfileViewer({ npub }: ProfileViewerProps) {
  const [profileData, setProfileData] = useState<null | NDKUserProfile>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        setLoading(true);
        await ndk.connect();
        const user = await ndk.getUser({ npub });
        setProfileData(await user.fetchProfile());
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    }

    if (npub) {
      fetchProfile();
    }
  }, [npub]);

  if (loading) return <div>Loading profile...</div>;

  return (
    <div>
      {profileData ? (
        <div>
          <h2>Profile Data:</h2>
          <pre>{JSON.stringify(profileData, null, 2)}</pre>
        </div>
      ) : (
        <div>No profile data available</div>
      )}
    </div>
  );
}
