import { Button } from "@/components/ui/button";

type TtotalPrice = {
    totalPrice: () => number;
}
const UserContactInfo = ({ totalPrice }: TtotalPrice) => {
    return (
        <>
            <div className="px-5 py-6 text-left text-gray-900 md:px-8">
                <div className="flow-root">
                    <div className="-my-6 divide-y divide-gray-200">
                        <div className="">
                            <h2 className="text-2xl text-center font-bold">Contact Information</h2>
                            <form action="#" className="mt-6">
                                <div className="space-y-5">
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <label
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="name"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            id="name"
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <label
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <label
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="phone"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            id="phone"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <label
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="address"
                                        >
                                            Delivery Address
                                        </label>
                                        <textarea
                                            className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            id="address"
                                            placeholder="Delivery Address"
                                        />

                                        <hr className="mt-6 border-gray-200" />

                                        <ul className="mt-6 space-y-3">
                                            <li className="flex items-center justify-between text-gray-600">
                                                <p className="text-md font-medium">Sub total</p>
                                                <p className="text-md font-medium"> $ {totalPrice().toFixed(2)} </p>
                                            </li>
                                            <li className="flex items-center justify-between text-gray-900">
                                                <p className="text-md font-medium ">Total</p>
                                                <p className="text-md font-bold ">$ {totalPrice().toFixed(2)} </p>
                                            </li>
                                        </ul>
                                        <div className="py-3 w-full">
                                            <Button className="w-full"> Check Out </Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserContactInfo;