import { Activity, Dumbbell, Sun, Zap } from "lucide-react";

const CategorySection = () => {
    return (
        <div className="mx-auto w-full bg-gray-100  pt-5">
            <div className="grid grid-cols-2 md:grid-cols-4 px-2 lg:px-8 py-5 md:py-16 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
                <div>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                    <Activity className="h-9 w-9 text-fuchsia-700" />
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-black"> Functional Training </h3>
                </div>
                <div>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                        <Sun className="h-9 w-9 text-orange-600"/> 
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-black"> Outdoor Fitness </h3> 
                </div>
                <div>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                        <Zap className="h-9 w-9 text-green-600"/>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-black"> HIIT Equipment </h3> 
                </div>
                <div>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                        <Dumbbell className="h-9 w-9 text-red-600"/>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-black"> Accessories </h3>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;