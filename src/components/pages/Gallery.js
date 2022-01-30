import React from "react";
import '../../App.css';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import theCabin from "/Users/ranshang/ran-website/src/images/gallery_cover_00_00.jpg"
import theSea from "/Users/ranshang/ran-website/src/images/main_bg_00_00.jpg"
import women from "/Users/ranshang/ran-website/src/images/theWomen.jpg"
import rose from "/Users/ranshang/ran-website/src/images/rose.jpg"
import sunflower from "/Users/ranshang/ran-website/src/images/sunflower.jpg"
import people from "/Users/ranshang/ran-website/src/images/people.jpg"
import bath from "/Users/ranshang/ran-website/src/images/bath.jpg"
import swim from "/Users/ranshang/ran-website/src/images/swim.jpg"
import summer from "/Users/ranshang/ran-website/src/images/summer.jpg"

import { Gallery, Item } from 'react-photoswipe-gallery'
import { Footer } from "../Footer";

export default function MyGallery(){
    return(
        <div className="gallery">
       
            <h1 >Welcome to My Gallery</h1>
            <h3>You can click the pictures if you want to share or download.</h3>
            <Gallery>
            <Item
            original={women}
            thumbnail={women}
            width="1024"
            height="1024"
            >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src= {women} width="400" height="500" />
            )}
            </Item>
         
         <Item
          original={theCabin}
          thumbnail={theCabin}
          width="1024"
          height="1024"
            >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src= {theCabin} width="500" height="500" />
          )}
        </Item>
        
        <Item
          original={people}
          thumbnail={people}
          width="1024"
          height="1024"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src= {people} width="400" height="500"/>
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
          original={rose}
          thumbnail={rose}
          width="1024"
          height="1024"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src= {rose} width="500" height="400"/>
          )}
        </Item>

        <Item
          original={sunflower}
          thumbnail={sunflower}
          width="1024"
          height="1024"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src= {sunflower} width="500" height="500"/>
          )}
        </Item>

        <Item
          original={bath}
          thumbnail={bath}
          width="1024"
          height="1024"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src= {bath} width="450" height="450"/>
          )}
        </Item>

        <Item
          original={swim}
          thumbnail={swim}
          width="1024"
          height="1024"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src= {swim} width="450" height="450"/>
          )}
        </Item>


        <Item
          original={summer}
          thumbnail={summer}
          width="1024"
          height="1024"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src= {summer} width="450" height="450"/>
          )}
        </Item>
        
      </Gallery>
      <Footer />
      </div>
      )
    
}