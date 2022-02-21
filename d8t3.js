class Person{
    constructor(FirstName,SecondName,DateOfBirth,Emailid,PhoneNumber,Address){
        this.FirstName=FirstName;
        this.SecondName=SecondName;
        this.DateOfBirth=DateOfBirth;
        this.Emailid=Emailid;
        this.PhoneNumber=PhoneNumber;
        this.Address=Address;
    }
}

const Details=new Person("Raja","Kumaran",'09/08/1990',"rajathiraja@raja.in",9897967890,
"No.23 kamaraj Nagar,Madurai,Tamil Nadu.");
console.log(Details);