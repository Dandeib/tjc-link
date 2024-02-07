import mongoConnect from '@/utils/mongoConnect'
import { NextRequest, NextResponse } from 'next/server'
import AllowedLinks from '@/schema/link-Schema'
import { log } from 'console'

export const GET = async (req: NextRequest, res: NextResponse) => {

    await mongoConnect()

    const document = await AllowedLinks.findById('65b91966bcbfb74b07153875')

    return NextResponse.json({ links: document?.links })
}

export const POST = async (req: NextRequest, res: NextResponse) => {

    const data = await req.json()
    
    const document = await AllowedLinks.findByIdAndUpdate('65b91966bcbfb74b07153875')
    document?.links.push(data['text'])
    document?.save()

    log(data['text'])

    return NextResponse.json({ status: 200})
}   