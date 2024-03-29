import { View, Dimensions} from 'react-native'
import React, { useRef } from 'react'
import { FlatList } from 'native-base';
import { useState } from 'react';
import { useEffect } from 'react';
const Carousel=()=>{
    const flatlistRef= useRef();
    //Get Dimensions
    const screenWidth= Dimensions.get("window").width
    const [activeIndex, setActiveIndex]=useState(0);
    //Auto Scroll
    useEffect(()=>{
     //   if activeIndex===last index --> jump back to the first index
     // else activeIndex +1
     let interval= setInterval(()=>{
        if (activeIndex === carouselData.length-1){
            flatlistRef.current.scrollToIndex({
                index:0,
                animation:true
            });
        }
            else {
                flatlistRef.current.scrollToIndex({
                    index:activeIndex+1,
                    animation:true
                });
            }
     },2000);
     return()=>clearInterval(interval);
});
const getItemLayout=(data, index)=>({
    length:screenWidth,
    offset: screenWidth *index,// for first image -300 * 0 =0pixels, (secondimage)300*1=300pixels, 300*2=600
    index: index

}

)
    //data for carousel
    const carouselData=[
        {
          id:"01",
          image: require("../assets/affiche-2-1-2048x896.jpg")
        },
        {
          id:"02",
          image: require("../assets/affiche-4-1-1024x448.jpg")
        },
        {
          id:"03",
          image: require("../assets/affiche-5-1-1024x448.jpg")
        },
        {
          id:"04",
          image: require("../assets/affiche-6-1-1024x448.jpg")
        },
        {
          id:"05",
          image: require("../assets/affiche-7-1-1024x448.jpg")
        },
        {
          id:"06",
          image: require("../assets/test-enlarge-1024x448.jpg")
        },
      ];  
      //display Image
      const renderItem=(item, index)=>{
      return (
      <View>
        <Image source={item.image} style={{ height:150, width: screenWidth}} />
      </View>
      );
};
//Handle Scroll
const handleScroll =(event)=>{
    //Get the scroll position
    const scrollPosition =event.nativeEvent.contentOffset.x;
    console.log({scrollPosition});
    //Get the index of current active item
    const index= scrollPosition / screenWidth;
    // index=1
    console.log({index});
    //Update the index
    setActiveIndex(index)
};
   //Render Dot Indicators
   const renderDotIndicators=()=>{
    return carouselData.map((dot, index)=>{
        // if the active index ===index
        if(activeIndex===index) {
            return (
                <View style={{
                    backgroundColor:'green',
                    height:10,
                    width:10,
                    borderRadius:5,
                    marginHorizontal:6,
                    }} >
                </View>
            );
           
        }
        else{
            return (
                <View key={index} style={{
                 backgroundColor:'red',
                 height:10,
                 width:10,
                 borderRadius:5,
                 marginHorizontal:6,
                 }}
                ></View>
        );
        }
         
   });
   };

      return (
        <View>
        <FlatList 
        data ={carouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
         renderItem={renderItem} 
         keyExtractor={(item)=>item.id}
         horizontal={true}
          pagingEnabled={true}
          onScroll={handleScroll}
          />
          <View style={{flexDirection:'row', justifyContent:'center', marginTop:30}}>
          {renderDotIndicators}
          </View>
          
        </View>
      );
    
};

export default  Carousel;
 