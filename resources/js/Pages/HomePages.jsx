import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/HomePage/NewsList";
import Pagination from "@/Components/HomePage/Pagination";

export default function HomePages(props) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-5">
                <NewsList news={props.news.data} />
            </div>
            <div className="flex justify-center items-center">
                <Pagination meta={props.news.meta} />
            </div>
        </div>
    );
}
