//Four square API using fetch
class FourSquare {
    static baseURL() {
        return "https://api.foursquare.com/v2";
    }
    static auth() {
        const keys = {
            client_id: "HQAQJEJ4MXAU0O42K4T10GCXIS5ZULZLAFZSBCMOZVXCEPR2",
            client_secret: "3M0FDVVUHH3HPYOYQAQZQHTJYOSDZOQTUXX53PGG3G3QJLEC",
            v: "20181029",
            ll:'40.7243,-74.0018',
        };
        return Object.keys(keys)
            .map(key => `${key}=${keys[key]}`)
            .join("&");
    }
    static urlBuilder(urlParameters) {
        if(!urlParameters){
            return "";
        } else {
            return Object.keys(urlParameters)
                .map(key => `${key}=${urlParameters[key]}`)
                .join("&");
        }
    }
    static headers() {
        return{
            Accept: "application/json"
        };
    }

    static simpleFetch(endPoint, method, urlParameters){
        let requestData = {
            method,
            headers: FourSquare.headers()
        };

        return fetch(`${FourSquare.baseURL()}${endPoint}?${FourSquare.auth()}&${FourSquare.urlBuilder(urlParameters)}`, requestData
        ).then(response => response.json())
         .catch(error => {
             alert("Four Square isn't working right now.");
             console.log(error);
         });
    }
}

export default class fourSquareAPI {
    static search(urlParameters) {
         return FourSquare.simpleFetch("/venues/search", "GET", urlParameters);
    }
    static getVenueDetails(VENUE_ID){
        return FourSquare.simpleFetch(`/venues/${VENUE_ID}`, "GET");
    }
    static getVenuePhotos(VENUE_ID){
        return FourSquare.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET");
    }
}