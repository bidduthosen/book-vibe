
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
        console.log(id, 'already added')
    }
    else {
        storedRead.push(id);
        const storedCartStr =  JSON.stringify(storedRead)
        localStorage.setItem('read-item', storedCartStr)
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
        console.log(id, 'Already Add')
    }else{
        storedWishList.push(id)
        const storedWishListStr = JSON.stringify(storedWishList)
        localStorage.setItem( 'wishList-item',storedWishListStr)
    }
}
export { addToStoredRead, addToStoredWishList, getStoredReadCart }