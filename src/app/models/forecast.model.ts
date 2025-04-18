export interface forecastResponse{
  city:{
    coord:{lat:number,lng:number},
    country:string,
    id:number,
    name:string,
    population:number,
    sunrise:number,
    sunset:number,
    timezone:number,
  }
  cnt:number;
  cod:string,
  list:[],
  message:number,
}
