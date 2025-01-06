import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { Box, Grid, Grid2, LinearProgress, Rating } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import { womenDress } from '../../Assets/Womens/WomensDress'
import HomeSectionCard from '../../Home/HomeSectionCard/HomeSectionCard'
import ProductsCard from '../ProductsCard/ProductsCard'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { findProductsById } from '../../../State/Products/Action'
import { store } from '../../../State/Store'
import { addItemToCart } from '../../../State/Cart/Action'
import Swal from 'sweetalert2'

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        // { name: 'XXS', inStock: true },
        // { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        // { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {



    const [selectedImage, setSelectedImage] = useState("") // State to track main image
    const navigate = useNavigate()
    const params = useParams()
    const disPatch = useDispatch();
    const { singleProduct } = useSelector(store => store.AllProducts)
    const [selectedSize, setSelectedSize] = useState(null);


    useEffect(() => {
        const productId = params.productId;
        disPatch(findProductsById({ productId })); // Fetch product details
    }, [params.productId]);

    // Ensure there is a default image selected on load
    useEffect(() => {
        if (singleProduct?.imageUrl) {
            setSelectedImage(singleProduct?.imageUrl); // Default to first product image
        }
    }, [singleProduct]);

    const handleAddToCart = (event) => {
        if (!selectedSize) {
            event.preventDefault()
            Swal.fire("Select a Size!");
            return;
        }
        event.preventDefault()
        const data = { productId: params.productId, size: selectedSize.name };
        disPatch(addItemToCart(data));
        Swal.fire({
            title: `${singleProduct?.title} Successfully Added To the Cart!`,
            icon: "success",
            draggable: true
          });
        navigate('/cart');
    };


    return (
        // <div>

        // </div>
        <div className="bg-white mt-32">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a
                                        href={breadcrumb.href}
                                        className="mr-2 text-sm font-medium text-gray-900"
                                    >
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a
                                href={product.href}
                                aria-current="page"
                                className="font-medium text-gray-500 hover:text-gray-600"
                            >
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                <section className="grid grid-cols-1 gap-y-10 px-4 pt-10 sm:grid-cols-2 sm:gap-x-8 lg:gap-x-16">
                    {/* Image gallery */}
                    <div className="flex flex-col items-center">
                        {/* Main Image */}
                        <div className="overflow-hidden rounded-lg w-full max-w-[30rem] max-h-[35rem]">
                            <img
                                alt="Selected product"
                                src={selectedImage} // Display the selected image as large image
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className="flex flex-wrap justify-center space-x-4 mt-4">
                            {product?.images?.map((image) => (
                                <div
                                    key={image.src}
                                    className={classNames(
                                        'cursor-pointer p-1 border-2 rounded-md',
                                        selectedImage === image.src
                                            ? 'border-indigo-600'
                                            : 'border-gray-200'
                                    )}
                                    onClick={() => setSelectedImage(image.src)} // Change main image on click
                                >
                                    <img
                                        alt={image.alt}
                                        src={image.src}
                                        className="w-16 h-16 object-cover rounded-md"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Product info */}
                    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="">
                            <h1 className="text-lg font-semibold text-gray-400 sm:text-xl">
                                {singleProduct?.title} ({singleProduct?.color})
                            </h1>
                            <h2 className="text-lg text-gray-900 opacity-60 pt-1 sm:text-xl">
                                {singleProduct?.brand}
                            </h2>
                        </div>

                        {/* Pricing and reviews */}
                        <div className="mt-4">
                            <div className="flex items-center space-x-4 text-lg text-gray-900">

                                <>
                                    <p className="font-semibold">{singleProduct?.sellPrice}/-</p>
                                    <p className="opacity-50 line-through">{singleProduct?.discountedPrice}/= </p>
                                    <p className="text-green-600 font-semibold">{singleProduct?.discountedPersent}% off</p>
                                </>


                            </div>

                            <div className="mt-6 flex items-center space-x-4">
                                <Rating name="read-only" value={2} readOnly />
                                <p className="opacity-50 text-sm">5000 Ratings</p>
                                <p className="ml-3 font-bold text-indigo-600 text-sm hover:text-indigo-500">
                                    5000 Reviews
                                </p>
                            </div>
                        </div>

                        {/* Options */}
                        <form className="mt-10">
                            {/* Sizes */}
                            <div className="mt-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                </div>

                                <fieldset aria-label="Choose a size" className="mt-4">
                                    <RadioGroup
                                        value={selectedSize} // Bind the state
                                        onChange={(size) => setSelectedSize(size)} // Update state when the selection changes
                                        className="grid grid-cols-4 gap-2 sm:grid-cols-8 lg:grid-cols-4"
                                    >
                                        {singleProduct?.sizes?.map((size) => (
                                            <Radio
                                                key={size.name}
                                                value={size} // Pass the entire size object
                                                disabled={!size.sizeQuantity} // Disable if size is unavailable
                                                className={classNames(
                                                    size.sizeQuantity
                                                        ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                                        : "cursor-not-allowed bg-gray-50 text-gray-200",
                                                    "group relative flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                )}
                                            >
                                                <span className="text-black">{size.name}</span>
                                                {size.sizeQuantity ? (
                                                    <span
                                                        aria-hidden="true"
                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-focus:border-indigo-500 group-checked:border-indigo-500"
                                                    />
                                                ) : (
                                                    <span
                                                        aria-hidden="true"
                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                    />
                                                )}
                                            </Radio>
                                        ))}
                                    </RadioGroup>

                                </fieldset>
                            </div>

                            <button onClick={handleAddToCart}
                                type="submit"
                                className="mt-6 flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white text-base font-medium hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Add to Cart
                            </button>
                        </form>

                        {/* Description and details */}
                        <div className="py-6">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                            <ul className="list-disc pl-4 mt-2 space-y-1">
                                {product.highlights.map((highlight) => (
                                    <li key={highlight} className="text-gray-600">
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-sm font-medium text-gray-900 mt-6">Details</h3>
                            <p className="text-sm text-gray-600 mt-2">{singleProduct?.description}</p>
                        </div>
                    </div>
                </section>

                {/* ------ratings & reviews------ */}


                <section className="mt-32 md:p-6">
                    <h1 className="font-semibold text-lg pb-4">Recent Reviews & Ratings</h1>
                    <div className="border p-5">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            {/* Reviews Column */}
                            <div className="lg:col-span-7 space-y-5">
                                {[1, 1, 1].map((item, index) => (
                                    <ProductReviewCard key={index}></ProductReviewCard>
                                ))}
                            </div>

                            {/* Ratings Column */}
                            <div className="lg:col-span-5">
                                <h1 className="text-xl font-semibold pb-2">Products Ratings</h1>
                                <div className="flex items-center gap-4">
                                    <Rating name="read-only" value={4.6} precision={0.5}></Rating>
                                    <p className="opacity-60">4544565 Ratings</p>
                                </div>

                                <div className="mt-5 space-y-3">
                                    {[
                                        { label: "Excellent", value: 50, color: "success" },
                                        { label: "Very Good", value: 30, color: "success" },
                                        { label: "Good", value: 20, color: "primary" },
                                        { label: "Average", value: 40, color: "warning" },
                                        { label: "Poor", value: 10, color: "error" },
                                    ].map((rating, index) => (
                                        <div key={index} className="flex items-center gap-4">
                                            <p className="w-24 text-sm font-medium">{rating.label}</p>
                                            <div className="flex-1">
                                                <LinearProgress
                                                    sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                                    variant="determinate"
                                                    value={rating.value}
                                                    color={rating.color}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* -----similiar products------ */}
                <section className='pt-20'>
                    <h2 className='py-5 font-bold text-xl'> Similiar Products</h2>
                    <div className='flex flex-wrap justify-center space-y-5'>
                        {
                            womenDress.map((item) => <ProductsCard Products={item}></ProductsCard>)
                        }
                    </div>
                </section>

            </div>
        </div>
    )
}
