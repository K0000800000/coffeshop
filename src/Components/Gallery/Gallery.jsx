import './Gallery.css';

const GalleryImage = ({ imageName }) => {
    const imageUrl = `https://raw.githubusercontent.com/massimo-admin/hg-data/main/assets/img/${imageName}`;

    return (
        <img src={imageUrl} alt='img' onError={(e) => e.target.style.display = 'none'} />
    );
};

export const Gallery = ({ photos, photosLoading }) => {
    return (
        <section className='gallery-page'>
            <div className='container'>
                <div className='gallery-wrap'>
                    {photosLoading ? (
                        <div className="loading">Loading images...</div>
                    ) : !photos || photos.length === 0 ? (
                        <div className="no-photos">No photos available.</div>
                    ) : (
                        <div className='gallery-grid'>
                            {photos.map(photo => (
                                <div key={photo.id} className='gallery-item'>
                                    <GalleryImage imageName={photo.url} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};