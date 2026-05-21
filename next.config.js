/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
try {
  await import("./src/env.js");
} catch {
  // Allow running without DATABASE_URL (e.g. local dev without DB)
}

/** @type {import("next").NextConfig} */
const config = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                hostname: "placehold.co",
            }
        ],
        dangerouslyAllowSVG: true,
    }
};

export default config;
