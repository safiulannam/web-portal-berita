const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div className="card w-full lg:w-96 bg-base-100 shadow-xl" key={i}>
                <figure>
                    <img src="/public/build/assets/img/itc1.png" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};

// validasi  jika tidak ada data
const noNews = () => {
    return <div>Saat ini tidak ada berita</div>;
};
const NewsList = ({ news }) => {
    return !isNews ? noNews() : isNews(news);
};

export default NewsList;
