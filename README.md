# Project H.E.R.O. – Helping Everyone Reach Out

Project H.E.R.O. is a platform that connects UNC students with individuals who need Direct Support Professionals (DSPs). The platform addresses the critical shortage of support services in North Carolina while promoting sustainable support systems and community integration.

## Features

- User-friendly matching system
- Secure messaging platform
- Privacy-focused design
- Real-time compatibility scoring
- Agency integration support

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Google Sheets API
- Node.js

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Google Sheets API credentials

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_PATIENTS_SHEET_ID=18iD4NwMXYaBABIHQKL32uErHDtA8A6Fe3aC_sgsy5GY
NEXT_PUBLIC_DSPS_SHEET_ID=1ksqaPJsUAOjJLOfODlH1xAV-fSY2Ichvusbr3OYmiDM
NEXT_PUBLIC_ADMIN_EMAIL=samdhav@unc.edu
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/project-hero.git
cd project-hero
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
project-hero/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── find-match/
│   │   └── page.tsx          # Matching system
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/               # Reusable components
├── public/                   # Static assets
├── styles/                   # Additional styles
└── types/                    # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- UNC Chapel Hill
- Project H.E.R.O. Leadership Team
- All contributors and supporters

## Contact

For any questions or concerns, please contact:
- Email: samdhav@unc.edu
- Project Lead: Keshav Saxena 