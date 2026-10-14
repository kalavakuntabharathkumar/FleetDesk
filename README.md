# FleetDesk
Next.js + TypeScript delivery dashboard starter with responsive dashboard UI, search/status filters, server-rendered initial page, Jest test, Dockerfile and GitHub Actions CI.

## Run
Install Node.js 20+, then `npm install`, `npm run dev`; open http://localhost:3000.
Run tests with `npm test`; production build with `npm run build`; Docker with `docker build -t fleetdesk . && docker run -p 3000:3000 fleetdesk`.

AWS EC2/S3 deployment credentials and upload/SSH steps are intentionally not configured; add secrets and a reviewed deployment workflow before deploying. The sample performance, release-time and bug-reduction metrics are not benchmarked by this starter and should be verified before using them on a resume.
