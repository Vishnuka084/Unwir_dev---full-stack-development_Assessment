import connectMongoDB from "@/libs/mongodb";
import Product from"@/models/ProductModel";


export async function POST(required) {
    const { name, image, price, category } = await requestAnimationFrame.json();
    await connectMongoDB();
}