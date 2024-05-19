const API_URL = (import.meta.env.VITE_ANALYTICS_API as string) || "";
const IPINFO_TOKEN = (import.meta.env.VITE_IPINFO_TOKEN as string) || "";

if (!API_URL || !IPINFO_TOKEN) {
  console.error("Missing API environment variable");
}

const config = {
  API_URL,
  IPINFO_TOKEN,
};

export default config;
