/* eslint-disable array-callback-return */
export const flightFilterHandler = (filter, flights) =>{
    if (!filter || flights.length === 0){
        return flights;
    }else {
        let data = priceFilter(filter.pricesFilter, flights)
        data = ratingFilter(filter.ratingFilter.rating, data)
        data = classFilter(filter, data)
        data = destinationFilter(filter, data)
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
            if(d.COST >= min){
                return d
            }
        })
    }else{
        return data.filter((d) =>{
            if(d.COST >= min && d.COST <= max){
                return d;
            }
        })
    }
    
}

const ratingFilter = (rating, data) => {
    if(rating === null || rating.length === 0){
        return data;
    }
    switch (rating) {
        case 4:
            return data.filter((d) =>{
                if(d.Rating >= 4){
                    return d
                }
            })
        case 3:
            return data.filter((d) =>{
                if(d.Rating >= 3){
                    return d
                }
            })
        case 2:
            return data.filter((d) =>{
                if(d.Rating >= 2){
                    return d
                }
            })
        case 1:
            return data.filter((d) =>{
                if(d.Rating >= 1){
                    return d
                }
            })
    
        default:
            return data;
    }
    
}

const destinationFilter = (filter, data) =>{
    if(filter.destination === null  || filter.destination.length === 0){
        return data
    }
    const result =  data.filter((d) =>(
        d["Destination"] === filter.destination
    ))
    return result
}

const classFilter = (filter, data) =>{
    
    if(filter.class === null || filter.class.length === 0){
        return data
    }
    return data.filter((d) =>(
        d["Class"] === filter.class
    ))
}