import clientPromise from "@/lib/mongodb"
export async function POST(request) {

    const body = await request.json()
    const client = await clientPromise
    const db = client.db("url-shortener")
    const collection = db.collection("url")

    const doc = await collection.findOne({ shortUrl: body.shortUrl })
    if (doc) {
        return Response.json({ success: false, error: true, message: 'Short URL already exists' })
    }

    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl
    })

    return Response.json({ success: true, error: false, message: 'URL shortened successfully' })
}