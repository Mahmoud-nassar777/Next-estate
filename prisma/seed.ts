import "dotenv/config"
import { PrismaClient } from "../src/generated/prisma/client"
import { PrismaNeon } from "@prisma/adapter-neon"

const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })

// ⚠️ غيّره لو عاوز مستخدم تاني
const OWNER_ID = "dIfdt1XCr9b63gZRp2GDJ5rJXWOeQy8r"

const img = (id: string) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`

const properties = [
    {
        title: "Modern Family Villa",
        description:
            "A spacious modern villa with a private garden, open-plan living area, and a bright kitchen. Located in a quiet and secure neighborhood close to schools and shops.",
        propertyType: "house",
        listingType: "sale",
        price: 185000,
        bedrooms: 5,
        bathrooms: 4,
        parkingSpaces: 3,
        area: 5200,
        location: "Tanta, Gharbia",
        address: "El-Geish Street, Tanta, Gharbia, Egypt",
        image: img("photo-1613490493576-7fde63acd811"),
    },
    {
        title: "Cozy City Apartment",
        description:
            "A well-designed apartment in the heart of the city with natural light, a modern kitchen, and easy access to public transport and restaurants.",
        propertyType: "apartment",
        listingType: "rent",
        price: 450,
        bedrooms: 2,
        bathrooms: 1,
        parkingSpaces: 1,
        area: 1100,
        location: "Tanta, Gharbia",
        address: "El-Bahr Street, Tanta, Gharbia, Egypt",
        image: img("photo-1502672260266-1c1ef2d93688"),
    },
    {
        title: "Luxury Penthouse with Skyline View",
        description:
            "A stunning penthouse on the top floor featuring floor-to-ceiling windows, a large private terrace, and premium finishes throughout.",
        propertyType: "penthouse",
        listingType: "sale",
        price: 320000,
        bedrooms: 4,
        bathrooms: 3,
        parkingSpaces: 2,
        area: 3400,
        location: "Alexandria",
        address: "Corniche Road, Alexandria, Egypt",
        image: img("photo-1512917774080-9991f1c4c750"),
    },
    {
        title: "Charming Townhouse",
        description:
            "A three-floor townhouse with a small front yard, ideal for families who want privacy and community feeling at the same time.",
        propertyType: "townhouse",
        listingType: "sale",
        price: 98000,
        bedrooms: 3,
        bathrooms: 2,
        parkingSpaces: 1,
        area: 2300,
        location: "Mansoura, Dakahlia",
        address: "University District, Mansoura, Egypt",
        image: img("photo-1568605114967-8130f3a36994"),
    },
    {
        title: "Prime Commercial Shop",
        description:
            "A ground-floor commercial unit on a busy main street with excellent foot traffic. Perfect for a cafe, boutique, or pharmacy.",
        propertyType: "commercial",
        listingType: "rent",
        price: 1200,
        bedrooms: 0,
        bathrooms: 1,
        parkingSpaces: 0,
        area: 900,
        location: "Tanta, Gharbia",
        address: "El-Nahhas Street, Tanta, Gharbia, Egypt",
        image: img("photo-1441986300917-64674bd600d8"),
    },
    {
        title: "Modern Office Space",
        description:
            "A fully finished open-plan office with meeting rooms, high-speed internet infrastructure, and 24/7 security.",
        propertyType: "office",
        listingType: "rent",
        price: 2200,
        bedrooms: 0,
        bathrooms: 2,
        parkingSpaces: 5,
        area: 2800,
        location: "Cairo",
        address: "New Cairo, Fifth Settlement, Cairo, Egypt",
        image: img("photo-1497366216548-37526070297c"),
    },
    {
        title: "Large Industrial Warehouse",
        description:
            "A high-ceiling warehouse with loading docks and wide truck access, close to the main highway. Suitable for storage and logistics.",
        propertyType: "warehouse",
        listingType: "sale",
        price: 240000,
        bedrooms: 0,
        bathrooms: 2,
        parkingSpaces: 10,
        area: 12000,
        location: "10th of Ramadan City",
        address: "Industrial Zone B, 10th of Ramadan, Egypt",
        image: img("photo-1586528116311-ad8dd3c8310d"),
    },
    {
        title: "Boutique Hotel in Old Town",
        description:
            "A charming 20-room boutique hotel with a restaurant, rooftop lounge, and loyal returning guests. A great investment opportunity.",
        propertyType: "hotel",
        listingType: "sale",
        price: 890000,
        bedrooms: 20,
        bathrooms: 20,
        parkingSpaces: 8,
        area: 15000,
        location: "Luxor",
        address: "Corniche El-Nile, Luxor, Egypt",
        image: img("photo-1566073771259-6a8506099945"),
    },
    {
        title: "Development Land Plot",
        description:
            "A flat, fully-registered land plot in a fast-growing area with all utilities available nearby. Great for residential development.",
        propertyType: "land",
        listingType: "sale",
        price: 60000,
        bedrooms: 0,
        bathrooms: 0,
        parkingSpaces: 0,
        area: 8000,
        location: "Kafr El-Zayat, Gharbia",
        address: "Ring Road, Kafr El-Zayat, Gharbia, Egypt",
        image: img("photo-1500382017468-9049fed747ef"),
    },
    {
        title: "Sunny Studio Apartment",
        description:
            "A compact and bright studio, fully furnished, perfect for students or young professionals. Bills can be included.",
        propertyType: "apartment",
        listingType: "rent",
        price: 280,
        bedrooms: 1,
        bathrooms: 1,
        parkingSpaces: 0,
        area: 650,
        location: "Tanta, Gharbia",
        address: "Sea Street, Tanta, Gharbia, Egypt",
        image: img("photo-1522708323590-d24dbb6b0267"),
    },
    {
        title: "Beachfront Family House",
        description:
            "A beautiful house just 3 minutes from the beach with a large terrace, outdoor shower, and sea breeze all day long.",
        propertyType: "house",
        listingType: "rent",
        price: 1800,
        bedrooms: 4,
        bathrooms: 3,
        parkingSpaces: 2,
        area: 3600,
        location: "Damietta",
        address: "Ras El-Bar, Damietta, Egypt",
        image: img("photo-1564013799919-ab600027ffc6"),
    },
    {
        title: "Duplex with Private Garden",
        description:
            "A two-level duplex with a private garden, spacious living room, and a modern kitchen. Quiet compound with 24/7 security.",
        propertyType: "apartment",
        listingType: "sale",
        price: 135000,
        bedrooms: 3,
        bathrooms: 3,
        parkingSpaces: 2,
        area: 2600,
        location: "Sheikh Zayed, Giza",
        address: "Beverly Hills Compound, Sheikh Zayed, Giza, Egypt",
        image: img("photo-1600596542815-ffad4c1539a9"),
    },
    {
        title: "Retail Showroom on Main Road",
        description:
            "A large glass-front showroom with high visibility, ideal for electronics, furniture, or car accessories.",
        propertyType: "commercial",
        listingType: "sale",
        price: 175000,
        bedrooms: 0,
        bathrooms: 2,
        parkingSpaces: 4,
        area: 2400,
        location: "Shebin El-Kom, Menoufia",
        address: "Main Highway, Shebin El-Kom, Menoufia, Egypt",
        image: img("photo-1604014237800-1c9102c219da"),
    },
    {
        title: "Garden View Townhouse",
        description:
            "A family-friendly townhouse overlooking a landscaped central garden, with a community pool and playground.",
        propertyType: "townhouse",
        listingType: "rent",
        price: 900,
        bedrooms: 3,
        bathrooms: 3,
        parkingSpaces: 2,
        area: 2100,
        location: "Zagazig, Sharqia",
        address: "Al-Ahrar District, Zagazig, Sharqia, Egypt",
        image: img("photo-1570129477492-45c003edd2be"),
    },
]

async function main() {
    // تأكد إن المستخدم موجود
    const owner = await prisma.user.findUnique({ where: { id: OWNER_ID } })

    if (!owner) {
        throw new Error(`User with id ${OWNER_ID} not found`)
    }

    console.log(`Seeding ${properties.length} properties for ${owner.email}...`)

    const result = await prisma.property.createMany({
        data: properties.map((p) => ({ ...p, ownerId: OWNER_ID })),
    })

    console.log(`✅ Created ${result.count} properties`)
}

main()
    .catch((e) => {
        console.error("❌ Seed failed:", e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })