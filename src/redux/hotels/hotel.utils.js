/* eslint-disable array-callback-return */
export const hotelFilterHandler = (filter, hotels) =>{
    if (!filter || hotels.length === 0){
        return hotels;
    }else {
        let data = priceFilter(filter.pricesFilter, hotels)
        data = ratingFilter(filter.ratingFilter.rating, data)
        return data
    } 

}


const priceFilter = (pricesFilter, data) => {
    let min = pricesFilter.min;
    let max = pricesFilter.max;
    if (!max && !min){
        return data
    }else if (!max){
        return data.filter((d) =>{
            if(d.price >= min){
                return d
            }
        })
    }else{
        return data.filter((d) =>{
            if(d.price >= min && d.price <= max){
                return d;
            }
        })
    }
    
}

const ratingFilter = (rating, data) => {
    switch (rating) {
        case 4:
            return data.filter((d) =>{
                if(d.stars >= 4){
                    return d
                }
            })
        case 3:
            return data.filter((d) =>{
                if(d.stars >= 3){
                    return d
                }
            })
        case 2:
            return data.filter((d) =>{
                if(d.stars >= 2){
                    return d
                }
            })
        case 1:
            return data.filter((d) =>{
                if(d.stars >= 1){
                    return d
                }
            })
    
        default:
            return data;
    }
    
}