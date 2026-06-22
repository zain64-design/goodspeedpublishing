export function getGeoData(request: Request) {
    return {
        ip: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '',
        city: decodeURIComponent(request.headers.get('x-vercel-ip-city') || ''),
        country: request.headers.get('x-vercel-ip-country') || '',
        zip_code: request.headers.get('x-vercel-ip-postal-code') || '',
    }
}