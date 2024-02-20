//electronics

import AsusImage from "../CategoryPage/images/product-images/vkhlvwgqqpvrnhwu_setting_xxx_0_90_end_2000.png"
import iphone15Image from "../CategoryPage/images/product-images/OIP.jpeg"

//clothing
import MenLooseShirtImage from "../CategoryPage/images/product-images/kisspng-capri-pants-clothing-jacket-chino-cloth-women-and-trousers-5b1d62103d5f58.3886815715286523042514.png"
import WomenTrouserImage from "../CategoryPage/images/product-images/jeans-clothing-trousers-sleeve-denim-women-s-jeans-png-image.png"

//accesories
import FastrackImage from "../CategoryPage/images/product-images/cd94b12e1d57af79b580d73c17aab33f.png"
import TitanImage from "../CategoryPage/images/product-images/png-transparent-titan-company-india-automatic-watch-strap-china-red-watch-accessory-india-world.png"
import nikeShoesImage from "../CategoryPage/images/product-images/nike-free-nike-air-max-sneakers-shoe-red-shoes.png"

// cooking
import PanasonicRiceCookerImage from "../CategoryPage/images/product-images/png-transparent-rice-cookers-national-panasonic-rice-purple-cooking-rice-cooker.png"
import microwaveImage from "../CategoryPage/images/product-images/pngimg.com - microwave_PNG15719.png"

//gaming
import ps5Image from "../CategoryPage/images/product-images/pngtree-gamebox-5-desigh-with-controller-png-image_2256159 (1).png"
import ps4ProImage from "../CategoryPage/images/product-images/sony-playstation-4-pro-video-game-consoles-ps4-pro.png"
import xboxOneSImage from "../CategoryPage/images/product-images/xbox-one-s-xbox-one-s-1tb-11569058892onl0g8anod-removebg-preview.png"

const CategoryPageData = [
    {
        id: 1,
        brand: "Apple",
        product: "Apple Iphone 15",
        imageUrl: iphone15Image,
        category: "electronics",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, lectus dapibus varius maximus, nisi velit fermentum nisl, sed porttitor nisi orci eget lectus. Aenean et ex sit amet neque condimentum pellentesque. Fusce mattis venenatis nunc, vitae interdum neque placerat ac. Maecenas faucibus nisl libero, at vestibulum elit porttitor vitae. Nulla a aliquam lectus. ",
        price: 60000,
        rating: 5,
        stock: 94,
        currentQuantity: 1,
        countryOrigin: "USA"
    },
    {
        id: 2,
        brand: "WUXI",
        product: "Men Loose Shirt",
        imageUrl: MenLooseShirtImage,
        category: "clothing",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, lectus dapibus varius maximus, nisi velit fermentum nisl, sed porttitor nisi orci eget lectus. Aenean et ex sit amet neque condimentum pellentesque. Fusce mattis venenatis nunc, vitae interdum neque placerat ac. Maecenas faucibus nisl libero, at vestibulum elit porttitor vitae. Nulla a aliquam lectus. ",
        price: 3500,
        rating: 3,
        stock: 94,
        currentQuantity: 1,
        countryOrigin: "China"
    },
    {
        id: 3,
        brand: "Juniper",
        product: "Women Trouser",
        imageUrl: WomenTrouserImage,
        category: "clothing",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, lectus dapibus varius maximus, nisi velit fermentum nisl, sed porttitor nisi orci eget lectus. Aenean et ex sit amet neque condimentum pellentesque. Fusce mattis venenatis nunc, vitae interdum neque placerat ac. Maecenas faucibus nisl libero, at vestibulum elit porttitor vitae. Nulla a aliquam lectus. ",
        price: 4000,
        rating: 4,
        stock: 94,
        currentQuantity: 1,
        countryOrigin: "China"

    },
    {
        id: 4,
        brand: "Asus",
        product: "Asus tuf laptop A15",
        imageUrl: AsusImage,
        category: "electronics",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, lectus dapibus varius maximus, nisi velit fermentum nisl, sed porttitor nisi orci eget lectus. Aenean et ex sit amet neque condimentum pellentesque. Fusce mattis venenatis nunc, vitae interdum neque placerat ac. Maecenas faucibus nisl libero, at vestibulum elit porttitor vitae. Nulla a aliquam lectus. ",
        price: 82000,
        rating: 4,
        stock: 94,
        currentQuantity: 1,
        countryOrigin: "USA"
    },
    {
        id: 5,
        brand: "Panasonic",
        product: "Rice cooker",
        imageUrl: PanasonicRiceCookerImage,
        category: "cooking",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, lectus dapibus varius maximus, nisi velit fermentum nisl, sed porttitor nisi orci eget lectus. Aenean et ex sit amet neque condimentum pellentesque. Fusce mattis venenatis nunc, vitae interdum neque placerat ac. Maecenas faucibus nisl libero, at vestibulum elit porttitor vitae. Nulla a aliquam lectus. ",
        price: 6000,
        rating: 2,
        stock: 94,
        currentQuantity: 1,
        countryOrigin: "Japan"
    },
    {
        id: 5,
        brand: "Samsung",
        product: "Microwave",
        imageUrl: microwaveImage,
        category: "cooking",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, lectus dapibus varius maximus, nisi velit fermentum nisl, sed porttitor nisi orci eget lectus. Aenean et ex sit amet neque condimentum pellentesque. Fusce mattis venenatis nunc, vitae interdum neque placerat ac. Maecenas faucibus nisl libero, at vestibulum elit porttitor vitae. Nulla a aliquam lectus. ",
        price: 12000,
        rating: 2,
        stock: 94,
        currentQuantity: 1,
        countryOrigin: "South Korea"
    },
    {
        id: 6,
        brand: "Fastrack",
        product: "Watch",
        imageUrl: FastrackImage,
        category: "accessories",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, lectus dapibus varius maximus, nisi velit fermentum nisl, sed porttitor nisi orci eget lectus. Aenean et ex sit amet neque condimentum pellentesque. Fusce mattis venenatis nunc, vitae interdum neque placerat ac. Maecenas faucibus nisl libero, at vestibulum elit porttitor vitae. Nulla a aliquam lectus. ",
        price: 3200,
        rating: 3,
        stock: 94,
        currentQuantity: 1,
        countryOrigin: "USA"
    },
    {
        id: 7,
        brand: "Nike",
        product: "Nike Red Shoes",
        imageUrl: nikeShoesImage,
        category: "accessories",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, lectus dapibus varius maximus, nisi velit fermentum nisl, sed porttitor nisi orci eget lectus. Aenean et ex sit amet neque condimentum pellentesque. Fusce mattis venenatis nunc, vitae interdum neque placerat ac. Maecenas faucibus nisl libero, at vestibulum elit porttitor vitae. Nulla a aliquam lectus. ",
        price: 6500,
        rating: 4,
        stock: 94,
        currentQuantity: 1,
        countryOrigin: "USA"
    },
    {
        id: 8,
        brand: "Titan",
        product: "Titan Watch",
        imageUrl: TitanImage,
        category: "accessories",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, lectus dapibus varius maximus, nisi velit fermentum nisl, sed porttitor nisi orci eget lectus. Aenean et ex sit amet neque condimentum pellentesque. Fusce mattis venenatis nunc, vitae interdum neque placerat ac. Maecenas faucibus nisl libero, at vestibulum elit porttitor vitae. Nulla a aliquam lectus. ",
        price: 20000,
        rating: 5,
        stock: 94,
        currentQuantity: 1,
        countryOrigin: "USA"

    },
    {
        id: 9,
        brand: "Sony",
        product: "PS5",
        imageUrl: ps5Image,
        category: "gaming",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, lectus dapibus varius maximus, nisi velit fermentum nisl, sed porttitor nisi orci eget lectus. Aenean et ex sit amet neque condimentum pellentesque. Fusce mattis venenatis nunc, vitae interdum neque placerat ac. Maecenas faucibus nisl libero, at vestibulum elit porttitor vitae. Nulla a aliquam lectus. ",
        price: 50000,
        rating: 5,
        stock: 94,
        currentQuantity: 1,
        countryOrigin: "Japan"

    },
    {
        id: 10,
        brand: "Sony",
        product: "PS4 Pro",
        imageUrl: ps4ProImage,
        category: "gaming",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, lectus dapibus varius maximus, nisi velit fermentum nisl, sed porttitor nisi orci eget lectus. Aenean et ex sit amet neque condimentum pellentesque. Fusce mattis venenatis nunc, vitae interdum neque placerat ac. Maecenas faucibus nisl libero, at vestibulum elit porttitor vitae. Nulla a aliquam lectus. ",
        price: 28000,
        rating: 5,
        stock: 94,
        currentQuantity: 1,
        countryOrigin: "Japan"

    },
    {
        id: 11,
        brand: "Microsoft",
        product: "Xbox One S",
        imageUrl: xboxOneSImage,
        category: "gaming",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, lectus dapibus varius maximus, nisi velit fermentum nisl, sed porttitor nisi orci eget lectus. Aenean et ex sit amet neque condimentum pellentesque. Fusce mattis venenatis nunc, vitae interdum neque placerat ac. Maecenas faucibus nisl libero, at vestibulum elit porttitor vitae. Nulla a aliquam lectus. ",
        price: 35000,
        rating: 4,
        stock: 94,
        currentQuantity: 1,
        countryOrigin: "USA"
    },

]
export default CategoryPageData;
