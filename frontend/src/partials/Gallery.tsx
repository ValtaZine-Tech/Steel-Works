import React, { useEffect } from 'react';
import { useState } from 'react';
import '../assets/css/gallery.css'; 
import { Image } from 'antd';

// Define types
type GalleryItem = {
  id: number;
  imgSrc: string;
  categories: string[];
  title: string;
};

const GallerySection = () => {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState<string>('*');
  const [showAll, setShowAll] = useState(false);
  const [itemsToShow, setItemsToShow] = useState<GalleryItem[]>([]);
  
  // Gallery items data
  const galleryItems: GalleryItem[] = [
    { id: 1, imgSrc: '/img/gallery/1.jpg', categories: ['cat3'], title: 'Aluminum Project' },
    { id: 2, imgSrc: '/img/gallery/2.jpg', categories: ['cat3'], title: 'Aluminum Project' },
    { id: 3, imgSrc: '/img/gallery/3.jpg', categories: ['cat3'], title: 'Aluminum Project' },
    { id: 4, imgSrc: '/img/gallery/4.jpg', categories: ['cat3'], title: 'Aluminum Project' },
    { id: 5, imgSrc: '/img/gallery/5.jpg', categories: ['cat3'], title: 'Aluminum Project' },
    { id: 6, imgSrc: '/img/gallery/6.jpg', categories: ['cat3'], title: 'Aluminum Project' },
    { id: 7, imgSrc: '/img/gallery/7.jpg', categories: ['cat3'], title: 'Aluminum Project' },
    { id: 8, imgSrc: '/img/gallery/8.jpg', categories: ['cat3'], title: 'Aluminum Project' },
    { id: 9, imgSrc: '/img/gallery/9.jpg', categories: ['cat3'], title: 'Aluminum Project' },

    { id: 10, imgSrc: '/img/gallery/10.jpg', categories: ['cat2'], title: 'Steel Work Project' },
    { id: 11, imgSrc: '/img/gallery/11.jpg', categories: ['cat2'], title: 'Steel Work Project' },
    { id: 12, imgSrc: '/img/gallery/12.jpg', categories: ['cat2'], title: 'Steel Work Project' },
    { id: 13, imgSrc: '/img/gallery/13.jpg', categories: ['cat2'], title: 'Steel Work Project' },
    { id: 14, imgSrc: '/img/gallery/14.jpg', categories: ['cat2'], title: 'Steel Work Project' },
    { id: 15, imgSrc: '/img/gallery/15.jpg', categories: ['cat2'], title: 'Steel Work Project' },
    { id: 16, imgSrc: '/img/gallery/16.jpg', categories: ['cat2'], title: 'Steel Work Project' },

    { id: 17, imgSrc: '/img/gallery/17.jpg', categories: ['cat1'], title: 'Interior Decor Project' },
    { id: 18, imgSrc: '/img/gallery/18.jpg', categories: ['cat1'], title: 'Interior Decor Project' },
    { id: 19, imgSrc: '/img/gallery/19.jpg', categories: ['cat1'], title: 'Interior Decor Project' },
    { id: 20, imgSrc: '/img/gallery/20.jpg', categories: ['cat1'], title: 'Interior Decor Project' },
  ];

  // Update items when filter or showAll changes
  useEffect(() => {
    const filtered = activeFilter === '*' 
      ? galleryItems 
      : galleryItems.filter(item => item.categories.includes(activeFilter));
    
    setItemsToShow(showAll ? filtered : filtered.slice(0, 8));
  }, [activeFilter, showAll]);

  // Reset showAll when filter changes
  useEffect(() => {
    setShowAll(false);
  }, [activeFilter]);


  return (
    <div className="gallery_area">
      <div className="container">
        <div className="gallery_nav">
          <div className="row align-items-center gallery_nav_card">
            <div className="gallery_title_container">
              <h3 className="gallery_title">
                Take a look Some of our <br />
                awesome projects
              </h3>
            </div>
            <div className="portfolio-nav">
              <div className="portfolio-menu">
                <button
                  className={activeFilter === '*' ? 'active' : ''}
                  onClick={() => setActiveFilter('*')}
                >
                  All
                </button>
                <button
                  className={activeFilter === 'cat1' ? 'active' : ''}
                  onClick={() => setActiveFilter('cat1')}
                >
                  Interior Decor
                </button>
                <button
                  className={activeFilter === 'cat2' ? 'active' : ''}
                  onClick={() => setActiveFilter('cat2')}
                >
                  Steel Works
                </button>
                <button
                  className={activeFilter === 'cat3' ? 'active' : ''}
                  onClick={() => setActiveFilter('cat3')}
                >
                  Other
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="row grid no-gutters">
          {itemsToShow.map((item) => (
            <div 
              key={item.id}
              className={`col-xl-3 col-lg-3 col-md-6 grid-item ${item.categories.join(' ')}`}
            >
              <div className="single_gallery">
                <div className="thumb">
                  <Image  src={item.imgSrc} alt={item.title} height={'100%'} width={'100%'}/>
                </div>
                <div className="gallery_hover">
                  <div className="hover_inner d-flex align-items-center justify-content-between">
                    <h3>{item.title}</h3>
                    <div className="icon">
                      <a href="project_details.html">
                        <i className="ti-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {galleryItems.filter(item => 
          activeFilter === '*' ? true : item.categories.includes(activeFilter)
        ).length > 8 && (
          <div className="text-center mt-4 mb-4">
            <button 
              className="boxed-btn3" 
              style={{width: '20rem'}}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}

    </div>
  );
};

export default GallerySection;