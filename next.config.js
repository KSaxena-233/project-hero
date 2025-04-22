/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['docs.google.com'],
  },
  env: {
    PATIENTS_SHEET_ID: '18iD4NwMXYaBABIHQKL32uErHDtA8A6Fe3aC_sgsy5GY',
    DSPS_SHEET_ID: '1ksqaPJsUAOjJLOfODlH1xAV-fSY2Ichvusbr3OYmiDM',
    ADMIN_EMAIL: 'samdhav@unc.edu'
  },
  output: 'export'
}

module.exports = nextConfig 