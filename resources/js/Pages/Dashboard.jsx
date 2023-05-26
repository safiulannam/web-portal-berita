import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Inertia } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        Inertia.post("/news", data);
    };
    console.log("props last", props);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard Berita
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <input
                                type="text"
                                placeholder="Masukkan Judul"
                                className="m-2 input input-bordered input-primary w-full "
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                            />
                            <input
                                type="text"
                                placeholder="Masukkan Deskripsi"
                                className="m-2 input input-bordered input-primary w-full "
                                onChange={(description) =>
                                    setDescription(description.target.value)
                                }
                            />
                            <input
                                type="text"
                                placeholder="Masukkan Category"
                                className="m-2 input input-bordered input-primary w-full "
                                onChange={(category) =>
                                    setCategory(category.target.value)
                                }
                            />
                            <button className="btn btn-primary m-2 onClick={()=>handleSubmit()}">
                                Kirim
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
