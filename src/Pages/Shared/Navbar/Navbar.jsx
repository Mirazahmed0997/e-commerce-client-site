'use client'

import { Fragment, useEffect, useState } from 'react'
import {
    Button,
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, logout } from '../../../Auth/Action'
import { store } from '../../../State/Store'
import { getCart } from '../../../State/Cart/Action'

const navigation = {
    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'Dresses', href: '#' },
                        { name: 'Pants', href: '#' },
                        { name: 'Denim', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'T-Shirts', href: '#' },
                        { name: 'Jackets', href: '#' },
                        { name: 'Activewear', href: '#' },
                        { name: 'Browse All', href: '#' },
                        { name: 'Others', href: '#' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', href: '#' },
                        { name: 'Wallets', href: '#' },
                        { name: 'Bags', href: '#' },
                        { name: 'Sunglasses', href: '#' },
                        { name: 'Hats', href: '#' },
                        { name: 'Belts', href: '#' },
                        { name: 'Others', href: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                        { name: 'Re-Arranged', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Significant Other', href: '#' },
                    ],
                },
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'Pants', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'T-Shirts', href: '#' },
                        { name: 'Jackets', href: '#' },
                        { name: 'Activewear', href: '#' },
                        { name: 'Browse All', href: '#' },
                        { name: 'Others', href: '#' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', href: '#' },
                        { name: 'Wallets', href: '#' },
                        { name: 'Bags', href: '#' },
                        { name: 'Sunglasses', href: '#' },
                        { name: 'Hats', href: '#' },
                        { name: 'Belts', href: '#' },
                        { name: 'Others', href: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Re-Arranged', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const { auth } = useSelector(store => store)
    const disPatch = useDispatch();
    const jwt = localStorage.getItem('jwt')
    const {cartItems}=useSelector(store=>store.cart)

    console.log(cartItems)

    useEffect(() => {
        if (jwt) {
            disPatch(getUser(jwt))
        }
    }, [jwt, auth.jwt])

    useEffect(() => {

    }, [auth.user])

    const handleLogout = () => {
        disPatch(logout());
        navigate('/signIn')
    }

    useEffect(()=>
        {
            if (auth.user) {
                disPatch(getCart());
            }
        },[auth.user,disPatch])


    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg  ">
            {/* Mobile menu */}
            <Dialog open={open} onClose={setOpen} className="relative z-40  lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                    >
                        <div className="flex px-4 pb-2 pt-5">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>

                        {/* Links */}
                        <TabGroup className="mt-16">
                            <div className="border-b border-gray-200">
                                <TabList className="-mb-px flex space-x-8 px-4">
                                    {navigation.categories.map((category) => (
                                        <Tab
                                            key={category.name}
                                            className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                                        >
                                            {/* {category.name} */}
                                            <Link to='/shop'>Shop</Link>
                                        </Tab>
                                    ))}
                                </TabList>
                            </div>

                            <TabPanels as={Fragment}>
                                {navigation.categories.map((category) => (
                                    <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10 ">
                                        <div className="grid grid-cols-2 gap-x-4">
                                            {category.featured.map((item) => (
                                                <div key={item.name} className="group relative text-sm">
                                                    <img
                                                        alt={item.imageAlt}
                                                        src={item.imageSrc}
                                                        className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                                    />
                                                    <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                        <span aria-hidden="true" className="absolute inset-0 z-10" />
                                                        {item.name}
                                                    </a>
                                                    <p aria-hidden="true" className="mt-1">
                                                        Shop now
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        {category.sections.map((section) => (
                                            <div key={section.name}>
                                                <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                                    {section.name}
                                                </p>
                                                <ul
                                                    role="list"
                                                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                    className="mt-6 flex flex-col space-y-6"
                                                >
                                                    {section.items.map((item) => (
                                                        <li key={item.name} className="flow-root">
                                                            <Link to={`${category.id}/${section.id}/${item.name}`} className="cursor-pointer hover:text-gray-800">

                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </TabGroup>

                        {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            {navigation.pages.map((page) => (
                                <div key={page.name} className="flow-root">
                                    <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                        {page.name}
                                    </a>
                                </div>
                            ))}
                        </div> */}

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">

                            <div className="flow-root">

                                {
                                    auth.user?.firstName ?
                                        <>
                                            <Link to='/account/myOrders' className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                My Orders
                                            </Link>
                                        </>
                                        :
                                        <>

                                        </>
                                }
                                <br></br>
                                {
                                    auth.user?.firstName ?
                                        <>
                                            <Button onClick={handleLogout} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                Sign Out
                                            </Button>
                                        </>
                                        :
                                        <>
                                            <Link to="/signUp" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                Create account
                                            </Link>
                                        </>
                                }



                            </div>

                            <div className="flow-root">
                                {
                                    auth.user?.firstName ?
                                        <>
                                            <Link className="text-xl font-medium font-bold text-gray-700 hover:text-gray-800">

                                            </Link>
                                            <div className="flex flex-col items-center justify-center">
                                                <div className="flex -space-x-4">

                                                    <span className="flex items-center justify-center w-12 h-12 font-semibold border rounded-full bg-indigo-900 text-white text-xl dark:border-gray-300">{auth.user.firstName[0].toUpperCase()}</span>
                                                </div>
                                            </div>
                                        </> :
                                        <>
                                            <Link to="/signIn" className="-m-2 block p-2 font-medium text-gray-900">
                                                Sign in
                                            </Link>
                                        </>
                                }
                            </div>
                        </div>

                    </DialogPanel>
                </div>
            </Dialog>

            <header className="relative bg-white">
                <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    {/* Get free delivery on orders over $100 */}
                    This Site is under construction
                </p>

                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon aria-hidden="true" className="size-6" />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <a className='flex gap-4' href="#">
                                    <span className="sr-only">City Mart</span>
                                    <img
                                        alt=""
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                    <Link to='/'><p className='text-xl font-bold'>China Trade BD</p></Link>
                                </a>
                            </div>

                            {/* Flyout menus */}
                            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">

                                    {navigation.categories.map((category) => (
                                        <Popover key={category.name} className="flex">
                                            <div className="relative flex">
                                                <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                                                    {category.name}
                                                    {/* <Link to='/shop'>Shop</Link> */}
                                                </PopoverButton>
                                            </div>

                                            <PopoverPanel
                                                transition
                                                className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                            >
                                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />

                                                <div className="fixed  bg-white">
                                                    <div className="mx-auto max-w-7xl px-8">
                                                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                {category.featured.map((item) => (
                                                                    <div key={item.name} className="group relative text-base sm:text-sm">
                                                                        <img
                                                                            alt={item.imageAlt}
                                                                            src={item.imageSrc}
                                                                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                                                        />
                                                                        <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                                                                            {item.name}
                                                                        </a>
                                                                        <p aria-hidden="true" className="mt-1">
                                                                            Shop now
                                                                        </p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                                {category.sections.map((section) => (
                                                                    <div key={section.name}>
                                                                        <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                                            {section.name}
                                                                        </p>
                                                                        <ul
                                                                            role="list"
                                                                            aria-labelledby={`${section.name}-heading`}
                                                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                        >
                                                                            {section.items.map((item) => (
                                                                                <li key={item.name} className="flex">
                                                                                    <Link to={`${category.id}/${section.id}/${item.name}`} className="cursor-pointer hover:text-gray-800">

                                                                                        {item.name}
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </PopoverPanel>
                                        </Popover>
                                    ))}

                                    {/* {navigation.pages.map((page) => (
                                        <a
                                            key={page.name}
                                            href={page.href}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >
                                            {page.name}
                                        </a>
                                    ))} */}
                                </div>

                            </PopoverGroup>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {/* Search */}
                                    <div className="flex lg:ml-6">
                                        <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Search</span>
                                            <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                                        </a>
                                    </div>
                                    {/* {
                                        auth.user?.firstName ?
                                            <>
                                                <Link className="text-xl font-medium font-bold text-gray-700 hover:text-gray-800">

                                                </Link>
                                                <div className="flex flex-col items-center justify-center">
                                                    <div className="flex -space-x-4">

                                                        <span className="flex items-center justify-center w-12 h-12 font-semibold border rounded-full bg-indigo-900 text-white text-xl dark:border-gray-300">{auth.user.firstName[0].toUpperCase()}</span>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <Link to="/signIn" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                    Sign In
                                                </Link>
                                            </>
                                    } */}
                                    <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                                    {
                                        auth.user?.firstName ?
                                            <div className='px-6'>
                                                <Link className="text-xl font-medium font-bold text-gray-700 hover:text-gray-800">

                                                </Link>
                                                <div className="flex flex-col items-center justify-center">
                                                    <div className="flex -space-x-4">

                                                        <span className="flex items-center justify-center w-12 h-12 font-semibold border rounded-full bg-indigo-900 text-white text-xl dark:border-gray-300">{auth.user.firstName[0].toUpperCase()}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <>
                                                <Link to="/signIn" className="text-sm px-6 font-medium text-gray-700 hover:text-gray-800">
                                                    Sign In
                                                </Link>
                                            </>
                                    }


                                    {
                                        auth.user?.firstName ?
                                            <>
                                                <Button onClick={handleLogout} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                    Sign Out
                                                </Button>
                                            </>
                                            :
                                            <>
                                                <Link to="/signUp" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                    Create account
                                                </Link>
                                            </>
                                    }
                                    {
                                        auth.user?.firstName ?
                                            <>
                                                <Link to='/account/myOrders' className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                    My Orders
                                                </Link>
                                            </>
                                            :
                                            <>

                                            </>
                                    }
                                </div>

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Link to='/cart' className="group -m-2 flex items-center p-2">
                                        <ShoppingBagIcon
                                            aria-hidden="true"
                                            className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"> {cartItems?.length || 0}</span>
                                        <span className="sr-only">items in cart, view bag</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
