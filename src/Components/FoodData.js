import React, { useState } from 'react'
import './FoodData.css'
import {db,storage} from '../FireBase/FirebaseConfig'
import { addDoc,collection } from 'firebase/firestore'
import { ref,uploadBytes,getDownloadURL } from 'firebase/storage'

const FoodData = () => {
   const [foodName,setFoodName] = useState('')
   const [foodDescription,setFoodDescriotion] = useState('')
   const [foodCategory,setFoodCategory] = useState('')
   const [foodPrice,setFoodPrice] = useState('')
   const [foodImage,setFoodImage] = useState(null)
   const [restaurantName,setRestaurantName] = useState('')
   const [restaurantAddress,setRestaurantAddress] = useState('')
   const [restaurantPhone,setRestaurantPhone] = useState('')
  
   
   const handelSubmit = (e) =>{
     e.preventDefault()

    if(foodImage == null){
        alert("Please upload image");
        return
    }else{
        const imgeRef = ref(storage,`FoodImages/${foodImage.name}`)
        uploadBytes(imgeRef,foodImage)
        .then(() => {
            getDownloadURL(imgeRef)
            .then((url) => {
                const foodData = {
                    foodName,
                    foodCategory,
                    foodDescription,
                    foodImageUrl:url,
                    foodPrice,
                    restaurantName,
                    restaurantAddress,
                    restaurantPhone
                 }
            
                 try{
                    const docRef = addDoc(collection(db,'FoodData'),foodData);
                    alert("add data succefully", docRef.id);
                 }catch(error){
                    alert("Error adding data",error);
                 }
            
            })
        })
    }
  
}
    
  return (
    <div className='form-outer'>
        <h1>Add Food Data</h1>
        <form className='form-inner'>
          
            <label>Food Name</label>
            <input type="text" name='food_name' onChange={(e)=> {setFoodName(e.target.value)}} />
            <br/>
            <label>Food Desription</label>
            <input type="text" name='food_description' onChange={(e)=> {setFoodDescriotion(e.target.value)}} />
            <br/>
            <label>Food Category</label>
            <input type="text" name='food_category' onChange={(e)=> {setFoodCategory(e.target.value)}} />
            <br/>
          
            <label>Food Price</label>
            <input type="text" name='food_price' onChange={(e)=> {setFoodPrice(e.target.value)}} />
            <br/>
            <label>Food Image</label>
            <input type="file" name='food_image' onChange={(e)=> {setFoodImage(e.target.files[0])}} />
            <br/>
            <label>Restaurant Name</label>
            <input type="text" name='restaurant_name' onChange={(e)=> {setRestaurantName(e.target.value)}} />
            <br/>
            <label>Restaurant Address</label>
            <input type="text" name='restaurant_address' onChange={(e)=> {setRestaurantAddress(e.target.value)}} />
            <br/>
            <label>Restaurant Phone</label>
            <input type="text" name='restaurant_phone' onChange={(e)=> {setRestaurantPhone(e.target.value)}} />
            <br/>
            <button onClick={handelSubmit}>Add Food</button> 
           
        </form>
    </div>
  )
}

export default FoodData