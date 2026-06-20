// export async function POST(request: Request) {
//     try {
//         const body = await request.formData()

//         const params = new URLSearchParams()
//         params.append('name', body.get('name') as string)
//         params.append('phone', body.get('phone') as string)
//         params.append('email', body.get('email') as string)
//         params.append('message', body.get('message') as string)

//         const res = await fetch('https://leads.infinityprojectmanager.com/brand/goodspeedpublishing/lead', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: params.toString(),
//         })

//         if (!res.ok) {
//             return Response.json({ success: false }, { status: res.status })
//         }

//         return Response.json({ success: true })

//     } catch {
//         return Response.json({ success: false }, { status: 500 })
//     }
// }

export async function POST(request: Request) {
    try {
        const body = await request.formData()

        const params = new URLSearchParams()
        params.append('name', body.get('name') as string)
        params.append('phone', body.get('phone') as string)
        params.append('email', body.get('email') as string)
        params.append('message', body.get('message') as string)

        const res = await fetch(
            `https://leads.infinityprojectmanager.com/brand/goodspeedpublishing/lead?${params.toString()}`,
            { method: 'GET' }
        )

        if (!res.ok) {
            return Response.json({ success: false }, { status: res.status })
        }

        return Response.json({ success: true })

    } catch {
        return Response.json({ success: false }, { status: 500 })
    }
}