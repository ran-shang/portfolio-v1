import React from "react";
import '../../App.css';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import theCabin from "/Users/ranshang/ran-website/src/images/gallery_cover_00_00.jpg"
import theSea from "/Users/ranshang/ran-website/src/images/theSea.jpg"
import women from "/Users/ranshang/ran-website/src/images/theWomen.jpg"
import rose from "/Users/ranshang/ran-website/src/images/rose.jpg"
import temple from "/Users/ranshang/ran-website/src/images/temple.jpg"
import people from "/Users/ranshang/ran-website/src/images/people.jpg"
import bath from "/Users/ranshang/ran-website/src/images/bath.jpg"
import swim from "/Users/ranshang/ran-website/src/images/swim.jpg"
import summer from "/Users/ranshang/ran-website/src/images/summer.jpg"
import bundle from "/Users/ranshang/ran-website/src/images/bundle.jpg"
import bird from "/Users/ranshang/ran-website/src/images/IMG_9912.jpg"
import peony from "/Users/ranshang/ran-website/src/images/IMG_9913.JPG"
import loquat from "/Users/ranshang/ran-website/src/images/IMG_9914 2.jpg"
import vanG1 from "/Users/ranshang/ran-website/src/images/vanG1.jpg"
import vanG2 from "/Users/ranshang/ran-website/src/images/vanG2.jpg"
//import { Gallery, Item } from 'react-photoswipe-gallery'
import { Carousel } from 'react-carousel-minimal';
import { Footer } from "../Footer";

export default function MyGallery(){
  const data = [
    {
      image: vanG1,
      caption: "Van Gogh - Oil Pastel"
    },
    {
      image: vanG2,
      caption: "Van Gogh - Oil Pastel"
    },
    {
      image: women,
      caption: "My First Oil Painting"
    },
    {
      image: theSea,
      caption: "Sea & Seagull - Oil Painting"
    },
    {
      image: rose,
      caption: "Roses & Butterflies - Oil Painting"
    },
    {
      image: bird,
      caption: "Peach Blossoms & White-eyes Bird - Traditional Chinese Painting"
    },
    {
      image: peony,
      caption: "Peony - Traditional Chinese Painting"
    },
    {
      image: loquat,
      caption: "Loquat - Traditional Chinese Painting"
    },
    {
      image: theCabin,
      caption: "Winter Alone - Acrylic Painting"
    },
    {
      image: people,
      caption: "Contemporay Painting"
    },
    {
      image: bath,
      caption: "Siamese Cat's Summer Life Pt.1 - Oil Painting"
    },
    {
      image: swim,
      caption: "Siamese Cat's Summer Life Pt.2 - Oil Painting"
    },
    {
      image: summer,
      caption: "Siamese Cat's Summer Life Pt.3 - Oil Painting"
    },
    {
      image: bundle,
      caption: "Flower Market - Oil Painting"
    },
    {
      image: temple,
      caption: "Japanese Temple & Cherry Blossoms - Oil Painting"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }  
  return(
        <div className="gallery" id="gallerySection">
        <div className="info-container">
        <h1>MY GALLERY</h1>
        <br /> 
        <h1>"I DREAM MY PAINTING, AND THEN I PAINT MY DREAM."</h1>
        <h3>-- VINCENT VAN GOGH</h3>
        <br /> 
            <h3>Painting is something that I spent most of my spare time on since I was a kid.</h3>
        </div>
        <div className="gallery-container">
        <Carousel
            className="carousel-item"
            data={data}
            time={3000}
            width="1250px"
            height="850px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="80px"
            slideBackgroundColor="black"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
            {/*<Gallery>
            <Item
            original={vanG1}
            thumbnail={vanG1}
            width="815"
            height="1024"
            >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src= {vanG1} width="400" height="500" />
            )}
            </Item>
            <Item
            original={vanG2}
            thumbnail={vanG2}
            width="815"
            height="1024"
            >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src= {vanG2} width="400" height="500" />
            )}
            </Item>
            <Item
            original={women}
            thumbnail={women}
            width="815"
            height="1024"
            >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src= {women} width="400" height="500" />
            )}
            </Item>
            <Item
            original={theSea}
            thumbnail={theSea}
            height="1024"
            width="768"
            >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src={theSea} width="400" height="500"/>
            )}
            </Item>
            <Item
            original={bird}
            thumbnail={bird}
            width="1024"
            height="700"
            >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src= {bird} width="650" height="500"/>
            )}
            </Item>
            
        <Item
          original={peony}
          thumbnail={peony}
          width="1024"
          height="700"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src= {peony} width="650" height="500"/>
          )}
        
        </Item>
        <Item
            original={loquat}
            thumbnail={loquat}
            width="1900"
            height="1024"
            >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src= {loquat} width="1050" height="500" />
            )}
            </Item>
            
            <Item
            original={bundle}
            thumbnail={bundle}
            width="815"
            height="1024"
            >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src= {bundle} width="400" height="500" />
            )}
            </Item>
        <Item
          original={rose}
          thumbnail={rose}
          width="1024"
          height="820"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src= {rose} width="650" height="500"/>
          )}
        </Item>


        <Item
          original={temple}
          thumbnail={temple}
          width="1024"
          height="810"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src= {temple} width="650" height="500"/>
          )}
        </Item>


        <Item
          original={people}
          thumbnail={people}
          width="815"
          height="1024"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src= {people} width="400" height="500"/>
          )}
        </Item>   


        <Item
          original={theCabin}
          thumbnail={theCabin}
          width="1024"
          height="1024"
            >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src= {theCabin} width="525" height="525" />
          )}
        </Item>

        <Item
          original={bath}
          thumbnail={bath}
          width="1024"
          height="1024"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src= {bath} width="525" height="525"/>
          )}
        </Item>

        <Item
          original={swim}
          thumbnail={swim}
          width="1024"
          height="1024"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src= {swim} width="525" height="525"/>
          )}
        </Item>
 
        <Item
          original={summer}
          thumbnail={summer}
          width="1024"
          height="1024"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src= {summer} width="525" height="525"/>
          )}
        </Item>

          </Gallery>*/}
      </div>
      <Footer />
      </div>
      )
    
}