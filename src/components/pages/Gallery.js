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
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Footer } from "../Footer";

export default function MyGallery(){
    return(
        <div className="gallery" id="gallerySection">
        <div className="info-container">
        <h1>MY GALLERY</h1>
        <br /> 
        <h1>"I DREAM MY PAITING, AND THEN I PAINT MY DREAM."</h1>
        <h3>-- VINCENT VAN GOGH</h3>
        <br /> 
            <h3>Painting is something that I spent most of my spare time on since I was a kid.</h3>
              <h3>You can click the pictures if you want to share or download them.</h3>
        </div>
        <div className="gallery-container">
            <Gallery>
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

      </Gallery>
      </div>
      <Footer />
      </div>
      )
    
}