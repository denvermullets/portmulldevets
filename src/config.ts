const API_URL = (import.meta.env.VITE_ANALYTICS_API as string) || "";

if (!API_URL) {
  console.error("Missing API environment variable");
}

const config = {
  API_URL,
};

export default config;
