// export async function POST(request: Request) {
//     try {
//         const body = await request.formData()
//         let ip = '', city = '', country = '', zip_code = ''
//         try {
//             const ipRes = await fetch('https://api.ipapi.is/', {
//                 headers: {
//                     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//                     'Accept': 'application/json',
//                     'Referer': 'https://ipapi.is/',
//                     'Origin': 'https://ipapi.is'
//                 }
//             })
//             if (ipRes.ok) {
//                 const ipData = await ipRes.json()
//                 ip = ipData.ip || ''
//                 city = ipData.location?.city || ''
//                 country = ipData.location?.country || ''
//                 zip_code = ipData.location?.zip || ''
//             }
//         } catch {
            
//             console.log('IP fetch failed — continuing without IP data')
//         }

//         const params = new URLSearchParams()
//         // Form fields
//         params.append('name', body.get('name') as string)
//         params.append('phone', body.get('phone') as string)
//         params.append('email', body.get('email') as string)
//         params.append('message', body.get('message') as string)
//         // Hidden fields
//         params.append('ip', ip)
//         params.append('city', city)
//         params.append('country', country)
//         params.append('zip_code', zip_code)
//         params.append('brand_name', 'goodspeedpublishing.com')
//         params.append('lead_area', 'https://goodspeedpublishing.vercel.app/')

//         const res = await fetch(
//             `https://leads.infinityprojectmanager.com/brand/goodspeedpublishing/lead?${params.toString()}`,
//             { method: 'GET', redirect: 'manual' }
//         )

//         if (res.status >= 200 && res.status < 400) {
//             return Response.json({ success: true })
//         }

//         return Response.json({ success: false }, { status: res.status })

//     } catch (err) {
//         console.log('catch error:', err)
//         return Response.json({ success: false }, { status: 500 })
//     }
// }

import { getGeoData } from "@/app/_libs/getGeoData"
export async function POST(request: Request) {
    try {
        const formData = await request.formData()

        const name = (formData.get('name') as string | null)?.trim()
        const phone = (formData.get('phone') as string | null)?.trim()
        const email = (formData.get('email') as string | null)?.trim()
        const message = (formData.get('message') as string | null)?.trim()

        if (!name || !phone || !email || !message) {
            return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 })
        }

        const { ip, city, country, zip_code } = getGeoData(request)

        const params = new URLSearchParams({
            name,
            phone,
            email,
            message,
            ip,
            city,
            country,
            zip_code,
            brand_name: 'goodspeedpublishing.com',
            lead_area: 'https://goodspeedpublishing.com/',
        })

        // Timeout safety — leads server hang ho to function bhi atka na rahe
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 8000)

        const res = await fetch(
            `https://leads.infinityprojectmanager.com/brand/goodspeedpublishing/lead?${params.toString()}`,
            { method: 'GET', redirect: 'manual', signal: controller.signal }
        )

        clearTimeout(timeoutId)

        if (res.status >= 200 && res.status < 400) {
            return Response.json({ success: true })
        }

        return Response.json({ success: false }, { status: res.status })

    } catch (err) {
        console.error('Lead submission error:', err)
        return Response.json({ success: false }, { status: 500 })
    }
}