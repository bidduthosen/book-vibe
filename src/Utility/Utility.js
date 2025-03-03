import { toast } from "react-toastify";

const getStoredReadCart = () => {
    const getStoredcartStr = localStorage.getItem('read-item');
    if (getStoredcartStr) {
        const storedCart = JSON.parse(getStoredcartStr);
        return storedCart;
    } else {
        return [];
    }
};

const addToStoredRead = (id) => {
    const storedRead = getStoredReadCart();
    if (storedRead.includes(id)) {
        toast.error('Already Add Read this Book.')
    }
    else {
        storedRead.push(id);
        const storedCartStr =  JSON.stringify(storedRead)
        localStorage.setItem('read-item', storedCartStr);
        toast.success('Corgress! Add To Read list.')
    }
}



// wishlist 
const getStoredWishList  = ()=>{
    const storedWishListStr  = localStorage.getItem('wishList-item');
    if(storedWishListStr){
        return JSON.parse(storedWishListStr)
    }else{
        return [];
    }
    
}
const addToStoredWishList = (id) =>{
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        toast.error('Already Add WishList this Book.')
    }else{
        storedWishList.push(id)
        const storedWishListStr = JSON.stringify(storedWishList)
        localStorage.setItem( 'wishList-item',storedWishListStr)
        toast.success('Corgress! Add To Wish-list.')
    }
}
export { addToStoredRead, addToStoredWishList, getStoredReadCart ,getStoredWishList}