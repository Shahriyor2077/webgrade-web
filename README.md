# Webgrade Next.js

Webgrade portfolio sayti - Next.js 15, React 19, Tailwind CSS 4 bilan qurilgan.

## O'rnatish

```bash
npm install
```

## Ishga tushirish

```bash
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Struktura

```
src/
├── app/
│   ├── layout.tsx       # Root layout (metadata, scripts)
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services section
│   ├── Portfolio.tsx    # Portfolio carousel
│   ├── Company.tsx      # About section
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer
│   └── Toast.tsx        # Toast notifications
└── lib/
    └── data.ts          # Static data (translations)
```

## Optimizatsiyalar

- ✅ Next.js Image optimization
- ✅ Server Components
- ✅ Lazy loading
- ✅ Code splitting
- ✅ Tailwind CSS purging
- ✅ WebP images
- ✅ Metadata SEO

## Environment Variables

`.env.local` faylini yarating:

```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id
NEXT_PUBLIC_SHEETS_URL=your_sheets_url
```

## Deploy

Vercel'ga deploy qilish:

```bash
vercel
```
