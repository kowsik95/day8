class Uber{
    constructor(rideprice,serviceprice,baseprice,costperkm,ridedistance,
        bookingfee){
            this.rideprice=rideprice;
            this.serviceprice=serviceprice;
            this.baseprice=baseprice;
            this.costperkm=costperkm;
            this.ridedistance=ridedistance;
            this.bookingfee=bookingfee;
        }
        getprice(){
            console.log("Uber price is "+ (this.baseprice+(this.costperkm*this.ridedistance)+
            (this.rideprice*this.ridedistance)+this.bookingfee));
        }
}
let Rates= new Uber(69,12,5,10,10,9);
Rates.getprice();