import './Gallery.css';

const GalleryImage = ({ imageName }) => {
    return (
        <img src={`${process.env.PUBLIC_URL}/assets/img/${imageName}`} alt='img' />
    );
};

export const Gallery = ({ photos }) => {
    return (
        <section className='gallery-page'>
            <div className='container'>
                <div className='gallery-wrap'>
                    <div className='gallery-grid'>
                        {photos.map(photo => (
                            <div key={photo.id} className='gallery-item'>
                                <GalleryImage imageName={photo.url} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};