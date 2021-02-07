/* eslint-disable array-callback-return */
export const carFilterHandler = (filter, flights) =>{
    if (!filter || flights.length === 0){
        return flights;
    }else {
        let data = priceFilter(filter.pricesFilter, flights)
        data = ratingFilter(filter.ratingFilter.rating, data)
        data = horsepowerFilter(filter.horsePower, data)
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
            if(d.Price >= min){
                return d
            }
        })
    }else{
        return data.filter((d) =>{
            if(d.Price >= min && d.Price <= max){
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

const horsepowerFilter = (horsePower, data) =>{
    if(horsePower === null  || horsePower.length === 0){
        return data
    }
    let min = horsePower.min;
    let max = horsePower.max;

    if (!max && !min){
        return data
    }else if (!max){
        return data.filter((d) =>{
            if(d.Horsepower >= min){
                return d
            }
        })
    }else{
        return data.filter((d) =>{
            if(d.Horsepower >= min && d.Horsepower <= max){
                return d;
            }
        })
    }
}

