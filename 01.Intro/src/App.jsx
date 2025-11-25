import React from 'react'
import Card from './components/Card'

const App = () => {

    const products = [
        {
            _id: "68e3ac59fafd4c040e6a3400",
            title: "Children's Story Book Set",
            description: "Set of 5 illustrated storybooks suitable for children aged 4-8.",
            category: "books",
            price: 24.99,
            currency: "$",
            stock: 200,
            images: [
                "https://m.media-amazon.com/images/I/81X+2yNe9WL._UF1000,1000_QL80_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/I/91HVfyTvduL._AC_UL600_SR600,600_.jpg"
            ],
            createdAt: "2025-10-06T00:00:00.000Z",
            updatedAt: "2025-10-06T00:00:00.000Z"
        },
        {
            _id: "68e3ac59fafd4c040e6a3401",
            title: "Yoga Mat",
            description: "Non-slip yoga mat with comfortable cushioning, ideal for home or gym use.",
            category: "sports",
            price: 19.99,
            currency: "$",
            stock: 75,
            images: [
                "https://jadeyoga.com/cdn/shop/products/Jade-Yoga-LevelOne-Mat-Classic-Purple-Flat_1200x1200.jpg?v=1631819938",
                "https://kataandasana.com/cdn/shop/files/PROlite-YOGA-MAT-PURPLE-LOTUS-01.jpg?v=1745323867"
            ],
            createdAt: "2025-10-06T00:00:00.000Z",
            updatedAt: "2025-10-06T00:00:00.000Z"
        },
        {
            _id: "68e3ac59fafd4c040e6a3404",
            title: "LED Desk Lamp",
            description: "Adjustable LED desk lamp with multiple brightness levels and energy saving mode.",
            category: "electronics",
            price: 34.99,
            currency: "$",
            stock: 60,
            images: [
                "https://www.lepower-tec.com/cdn/shop/files/lepower-tec-desk-lamp-for-office-black.jpg?v=1722496317&width=1600",
                "https://m.media-amazon.com/images/I/81kHHhPnS-L._UF894,1000_QL80_.jpg"
            ],
            createdAt: "2025-10-06T00:00:00.000Z",
            updatedAt: "2025-10-06T00:00:00.000Z"
        },
        {
            _id: "68e3ac59fafd4c040e6a33fe",
            title: "Men's Casual Shirt",
            description: "Comfortable cotton shirt perfect for everyday wear, available in multiple colors.",
            category: "clothing",
            price: 29.99,
            currency: "$",
            stock: 120,
            images: [
                "https://i.pinimg.com/474x/a2/4f/e4/a24fe4e11182caaf3eef65df4ebfb90e.jpg",
                "https://img.kwcdn.com/product/fancy/61fec0c5-adcb-472d-860d-8319aaaae27b.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"
            ],
            createdAt: "2025-10-06T00:00:00.000Z",
            updatedAt: "2025-10-06T00:00:00.000Z"
        },
        {
            _id: "68e3ac59fafd4c040e6a3402",
            title: "Organic Green Tea",
            description: "Premium organic green tea leaves, rich in antioxidants and flavor.",
            category: "groceries",
            price: 9.99,
            currency: "$",
            stock: 150,
            images: [
                "https://m.media-amazon.com/images/I/51KvG-bDAdL.jpg",
                "https://organicindia.com/cdn/shop/files/classic-pack-of-2.jpg?v=1702528164"
            ],
            createdAt: "2025-10-06T00:00:00.000Z",
            updatedAt: "2025-10-06T00:00:00.000Z"
        },
        {
            _id: "68e3ac59fafd4c040e6a33ff",
            title: "Modern Wooden Chair",
            description: "Elegant and sturdy wooden chair suitable for living rooms or offices.",
            category: "furniture",
            price: 89.99,
            currency: "$",
            stock: 35,
            images: [
                "https://homeglamour.in/cdn/shop/files/DorisChhair_3.jpg?v=1751739419",
                "https://5.imimg.com/data5/SELLER/Default/2024/4/410714316/QL/CF/AV/144555086/wooden-chair-set-500x500.jpg"
            ],
            createdAt: "2025-10-06T00:00:00.000Z",
            updatedAt: "2025-10-06T00:00:00.000Z"
        },
        {
            _id: "68e3ac59fafd4c040e6a33fd",
            title: "Wireless Bluetooth Headphones",
            description: "High-quality over-ear headphones with noise cancellation and 30-hour battery life.",
            category: "electronics",
            price: 129.99,
            currency: "$",
            stock: 50,
            images: [
                "https://media.very.co.uk/i/very/VH4IV_SQ1_0000000004_BLACK_SLf?$pdp_300x400_x2$&fmt=jpg",
                "https://static.wixstatic.com/media/5d5913_8461752f1c8b400fb0fe57759c6da4d6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
            ],
            createdAt: "2025-10-06T00:00:00.000Z",
            updatedAt: "2025-10-06T00:00:00.000Z"
        },
        {
            _id: "68e3ac59fafd4c040e6a3403",
            title: "Men's Running Shoes",
            description: "Lightweight and comfortable running shoes suitable for all terrains.",
            category: "sports",
            price: 59.99,
            currency: "$",
            stock: 80,
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPtStKHieyrgEGKPAQw6NvAOPDu5hyoZ5jw&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjxcl-5YBtrB4O0EQVw0lnCfOIN4NddTpspst9I2Mp2G3m4gasuW5sy3SbX_S84MDxvp0&usqp=CAU"
            ],
            createdAt: "2025-10-06T00:00:00.000Z",
            updatedAt: "2025-10-06T00:00:00.000Z"
        },
        {
            _id: "6919bda285ee4598b010a139",
            title: "Car Phone Mount",
            description: "Universal magnetic phone mount for dashboards and windshields.",
            category: "automotive",
            price: 14.99,
            currency: "$",
            stock: 160,
            images: [
                "https://www.elago.com/cdn/shop/files/car_mount_for_phone_best_magsafe_phone_mount_for_car.jpg?v=1739171658",
                "https://www.elago.com/cdn/shop/products/MOUNT-MAGSAFE-DGY_US.jpg?v=1713464130&width=3000"
            ]
        },
        {
            _id: "6919bda285ee4598b010a131",
            title: "Smart Home Security Camera",
            description: "1080p indoor security camera with motion detection and night vision.",
            category: "electronics",
            price: 49.99,
            currency: "$",
            stock: 70,
            images: [
                "https://cdn.evance.me/portal/web/739/content/images/Link2Home/1024mw/L2H-ODRCAMPT2-SMARTCAMERA-A.jpg",
                "https://cdn.evance.me/portal/web/739/content/images/Link2Home/1024mw/L2H-ODRCAMPT2-SMARTCAMERA-D.jpg"
            ]
        },
        {
            _id: "6919bda285ee4598b010a13b",
            title: "Bluetooth Portable Speaker",
            description: "Compact speaker with deep bass and 10-hour battery life.",
            category: "electronics",
            price: 39.99,
            currency: "$",
            stock: 75,
            images: [
                "https://assets.kmart.com.au/transform/ed67cb6d-73fd-4b10-a9cb-7db54b6bc7dd/42976592-1?io=transform:extend,width:1100,height:1100&quality=90"
            ]
        },
        {
            _id: "6919bda285ee4598b010a138",
            title: "Adjustable Dumbbell Set",
            description: "Pair of adjustable dumbbells ideal for home workouts.",
            category: "sports",
            price: 59.99,
            currency: "$",
            stock: 55,
            images: [
                "https://i5.walmartimages.com/seo/Adjustable-Dumbbell-22lb-44lb-52lb-Single-Dumbbell-Set-with-Tray-for-Workout-Strength-Training-Fitness_7cd1a134-f32e-418d-aba1-ddd5a6dd0695.a96d82646e3418ddc79e5cac904133c8.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
            ]
        },
        {
            _id: "6919bda285ee4598b010a132",
            title: "Women's Winter Jacket",
            description: "Warm and lightweight insulated jacket suitable for cold weather.",
            category: "clothing",
            price: 89.99,
            currency: "$",
            stock: 90,
            images: [
                "https://cdni.llbean.net/is/image/wim/523049_0_70",
                "https://cdni.llbean.net/is/image/wim/523049_0_72",
                "https://cdni.llbean.net/is/image/wim/523049_0_73"
            ]
        },
        {
            _id: "6919bda285ee4598b010a13c",
            title: "Men's Winter Jacket",
            description: "Lightweight winter jacket",
            category: "clothing",
            price: 99.99,
            currency: "$",
            stock: 100,
            images: [
                "https://hypostore.com/media/catalog/product/cache/231ccaba27ed7e117e92f600b7ac6d98/3/2/3252225-l_26.png",
                "https://hypostore.com/media/catalog/product/cache/231ccaba27ed7e117e92f600b7ac6d98/3/2/3252225-l_25.png"
            ]
        },
        {
            _id: "6919bda285ee4598b010a133",
            title: "Adventure Novel",
            description: "Best-selling novel with an immersive world and rich characters.",
            category: "books",
            price: 14.99,
            currency: "$",
            stock: 130,
            images: [
                "https://m.media-amazon.com/images/I/71ua+4DewoL._AC_UF894,1000_QL80_.jpg"
            ]
        },
        {
            _id: "6919bda285ee4598b010a13a",
            title: "Laundry Storage Basket",
            description: "Foldable and durable fabric laundry basket with handles.",
            category: "other",
            price: 17.99,
            currency: "$",
            stock: 95,
            images: [
                "https://www.thebasketcompany.com/images/round-natural-wicker-laundry-basket-p929-3612_image.jpg"
            ]
        },
        {
            _id: "6919bda285ee4598b010a134",
            title: "Wooden Coffee Table",
            description: "Minimalist wooden coffee table perfect for modern living rooms.",
            category: "furniture",
            price: 129.99,
            currency: "$",
            stock: 20,
            images: [
                "https://www.westelm.co.uk/site/WE/Product%20Images/calla-coffee-table-h12199-202428-0010-calla-coffee-table-48-z.jpg?resizeid=64&resizeh=1200&resizew=1200",
                "https://www.westelm.co.uk/site/WE/Product%20Images/calla-coffee-table-h12199-202428-0031-calla-coffee-table-48-z.jpg?resizeid=64&resizeh=1200&resizew=1200",
                "https://www.westelm.co.uk/site/WE/Product%20Images/calla-coffee-table-h12199-202428-0020-calla-coffee-table-48-z.jpg?resizeid=64&resizeh=1200&resizew=1200"
            ]
        },
        {
            _id: "6919bda285ee4598b010a135",
            title: "Kids Building Blocks Set",
            description: "Creativity-boosting building block set with 150 colorful pieces.",
            category: "toys",
            price: 22.99,
            currency: "$",
            stock: 140,
            images: [
                "https://m.media-amazon.com/images/I/81WlvhzCyML._AC_SL1500_.jpg"
            ]
        },
        {
            _id: "6919bda285ee4598b010a136",
            title: "Premium Dark Chocolate",
            description: "Rich 85% cocoa dark chocolate made with natural ingredients.",
            category: "groceries",
            price: 4.99,
            currency: "$",
            stock: 200,
            images: [
                "https://fowlerschocolates.com/cdn/shop/files/PremiumDarkBar_800px_100_quality_8a376c26-6824-4c40-88a0-bc3775bf26ac.jpg?v=1756127916"
            ]
        },
        {
            _id: "6919bda285ee4598b010a137",
            title: "Aloe Vera Moisturizer",
            description: "Hydrating face and body moisturizer suitable for all skin types.",
            category: "beauty",
            price: 12.99,
            currency: "$",
            stock: 110,
            images: [
                "https://himalayawellness.in/cdn/shop/products/MOISTURIZIN-ALOE-VERA-FACE-GEL-100ML.jpg?v=1631178946"
            ]
        }
    ]

    return (
        <div className='w-full h-screen grid grid-cols-4 gap-5'>
            {products.map(product => <Card product={product}/>)}
        </div>
    )
}

export default App