/* eslint-disable array-callback-return */
export const setFilterHandler = (filter, places) =>{
    if (!filter || places.length === 0){
        return places;
    }else {
        let data = priceFilter(filter.pricesFilter, places)
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
                if(d.rating >= 4){
                    return d
                }
            })
        case 3:
            return data.filter((d) =>{
                if(d.rating >= 3){
                    return d
                }
            })
        case 2:
            return data.filter((d) =>{
                if(d.rating >= 2){
                    return d
                }
            })
        case 1:
            return data.filter((d) =>{
                if(d.rating >= 1){
                    return d
                }
            })
    
        default:
            return data;
    }
    
}