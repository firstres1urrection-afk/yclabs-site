# YCLabs Site

YCLabs 운영사/브랜드 공식 사이트입니다. Bangkok Stay Optimizer 앱 repo와 분리된 별도 Next.js 프로젝트이며, `yclabs.co.kr`에 연결할 Vercel 배포용 사이트입니다.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel 배포 기준 정적 페이지 중심 구성

## Pages

- `/` Home
- `/about` About
- `/services` Services
- `/contact` Contact
- `/partnership` Partnership
- `/privacy` Privacy
- `/terms` Terms

## Official Channels

- 일반 문의: `support@yclabs.co.kr`
- 제휴 문의: `partners@yclabs.co.kr`
- 서비스: `https://app.yclabs.co.kr`
- 버그 제보 / 기능 요청 보조 채널: GitHub Issues

## Local Development

```bash
npm install
npm run dev
```

## Production Check

```bash
npm run build
```

Node.js `20.9.0` 이상이 필요합니다.

## Vercel Import Summary

이 repo는 YCLabs 운영사 공식 사이트이며, Vercel에서 `yclabs.co.kr` apex 도메인에 연결할 대상입니다. Bangkok Stay Optimizer 앱과 `app.yclabs.co.kr` 배포는 별도 프로젝트로 유지합니다.

## Vercel Deployment Checklist

1. GitHub에 `yclabs-site` repo를 만들고 이 프로젝트를 push합니다.
2. Vercel에서 New Project를 선택하고 `yclabs-site` repo를 import합니다.
3. Framework Preset은 Next.js, Build Command는 `npm run build` 기본값을 사용합니다.
4. 환경변수 없이 배포할 수 있습니다.
5. Vercel Project Settings > Domains에서 `yclabs.co.kr`를 추가합니다.
6. apex 도메인은 Vercel 안내에 따라 `A 76.76.21.21`을 확인합니다.
7. `www.yclabs.co.kr`도 사용할 경우 Vercel 안내에 따라 `CNAME cname.vercel-dns-0.com` 또는 프로젝트별로 표시되는 CNAME 값을 설정합니다.
8. `app.yclabs.co.kr`는 Bangkok Stay Optimizer 앱 프로젝트에 연결된 상태를 유지합니다.
9. DNS 변경 후 Vercel의 domain verification과 SSL 발급 상태를 확인합니다.

DNS 값은 이 repo에서 직접 변경하지 않습니다. Vercel domain 연결 화면에서 표시되는 값을 최종 기준으로 확인하세요.
