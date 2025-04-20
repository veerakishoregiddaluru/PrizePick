import React, { useState } from "react";
import Members from "./Members"; // if you're using it
import Button from "./Button";
import Confetti from "react-confetti";
const MembersList = () => {
  // const [person, setPerson] = useState([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [luckyPerson, setLuckyPerson] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const people = [
    { name: "Kishore", city: "Hyderabad" },
    { name: "Anjali", city: "Pune" },
    { name: "Ravi", city: "Varanasi" },
    { name: "Neha", city: "Amritsar" },
    { name: "Suresh", city: "Kolkata" },
    { name: "Pooja", city: "Bhopal" },
    { name: "Arun", city: "Chennai" },
    { name: "Deepa", city: "Nagpur" },
    { name: "Ramesh", city: "Lucknow" },
    { name: "Kiran", city: "Jaipur" },
    { name: "Manoj", city: "Ahmedabad" },
    { name: "Sneha", city: "Surat" },
    { name: "Vijay", city: "Patna" },
    { name: "Meena", city: "Kanpur" },
    { name: "Amit", city: "Ranchi" },
    { name: "Sunita", city: "Guwahati" },
    { name: "Rajesh", city: "Raipur" },
    { name: "Lakshmi", city: "Kozhikode" },
    { name: "Dinesh", city: "Tirupati" },
    { name: "Geeta", city: "Nashik" },
    { name: "Ritu", city: "Gaya" },
    { name: "Sanjay", city: "Jabalpur" },
    { name: "Alok", city: "Udaipur" },
    { name: "Priya", city: "Mysore" },
    { name: "Harish", city: "Hubli" },
    { name: "Radha", city: "Guntur" },
    { name: "Tarun", city: "Solapur" },
    { name: "Bhavna", city: "Siliguri" },
    { name: "Yogesh", city: "Bilaspur" },
    { name: "Komal", city: "Haridwar" },
    { name: "Arvind", city: "Ajmer" },
    { name: "Payal", city: "Bareilly" },
    { name: "Raj", city: "Saharanpur" },
    { name: "Nisha", city: "Panipat" },
    { name: "Mahesh", city: "Aligarh" },
    { name: "Shalini", city: "Bikaner" },
    { name: "Ajay", city: "Jodhpur" },
    { name: "Kavita", city: "Gorakhpur" },
    { name: "Naresh", city: "Bhagalpur" },
    { name: "Pankaj", city: "Cuttack" },
    { name: "Shweta", city: "Muzaffarpur" },
    { name: "Anil", city: "Dhanbad" },
    { name: "Rakhi", city: "Madurai" },
    { name: "Suraj", city: "Warangal" },
    { name: "Tina", city: "Thrissur" },
    { name: "Hemant", city: "Nellore" },
    { name: "Divya", city: "Bhavnagar" },
    { name: "Gopal", city: "Tinsukia" },
    { name: "Nandini", city: "Rewa" },
    { name: "Bhanu", city: "Darbhanga" },
    { name: "Shobha", city: "Jhansi" },
    { name: "Tejas", city: "Kollam" },
    { name: "Lavanya", city: "Dibrugarh" },
    { name: "Naveen", city: "Puducherry" },
    { name: "Charu", city: "Shimla" },
    { name: "Kumar", city: "Ambala" },
    { name: "Madhu", city: "Firozabad" },
    { name: "Raghu", city: "Pali" },
    { name: "Swati", city: "Jhunjhunu" },
    { name: "Gaurav", city: "Faizabad" },
    { name: "Isha", city: "Rohtak" },
    { name: "Ritik", city: "Rewari" },
    { name: "Palak", city: "Bulandshahr" },
    { name: "Siddhi", city: "Haldwani" },
    { name: "Vikas", city: "Begusarai" },
    { name: "Mansi", city: "Katihar" },
    { name: "Hemlata", city: "Dewas" },
    { name: "Soham", city: "Porbandar" },
    { name: "Nikhil", city: "Anand" },
    { name: "Tanu", city: "Latur" },
    { name: "Ravina", city: "Ratlam" },
    { name: "Paras", city: "Hajipur" },
    { name: "Irfan", city: "Karimnagar" },
    { name: "Kusum", city: "Nanded" },
    { name: "Jatin", city: "Barmer" },
    { name: "Sheetal", city: "Sitamarhi" },
    { name: "Ansh", city: "Kishanganj" },
    { name: "Barkha", city: "Hazaribagh" },
    { name: "Pranav", city: "Palwal" },
    { name: "Rekha", city: "Faridabad" },
    { name: "Devansh", city: "Morena" },
    { name: "Jaya", city: "Fatehpur" },
    { name: "Sameer", city: "Bettiah" },
    { name: "Chandan", city: "Buxar" },
    { name: "Mithun", city: "Darjeeling" },
    { name: "Shanaya", city: "Sambalpur" },
    { name: "Ayaan", city: "Tenali" },
    { name: "Kajal", city: "Eluru" },
    { name: "Tanmay", city: "Machilipatnam" },
    { name: "Rupal", city: "Mandya" },
    { name: "Harshit", city: "Bharuch" },
    { name: "Trisha", city: "Nalgonda" },
    { name: "Samar", city: "Sikar" },
    { name: "Naina", city: "Arrah" },
    { name: "Saket", city: "Etawah" },
    { name: "Vidya", city: "Jorhat" },
    { name: "Akshay", city: "Beed" },
    { name: "Payal", city: "Bagalkot" },
    { name: "Mahesh", city: "Bangalore" },
    {
      name: "kiran",
      city: "Yerraguntla",
    },
  ];

  function pickPerson() {
    setIsLoading(true);
    const randomNum = Math.floor(Math.random() * people.length);
    const foundPerson = people[randomNum];
    const luckyMessage = `${foundPerson.name} from ${foundPerson.city}`;

    setTimeout(function () {
      setLuckyPerson(luckyMessage);
      setIsLoading(false);

      setShowCelebration(true);
    }, 5000);
    setLuckyPerson("");
  }
  return (
    <div>
      {showCelebration && <Confetti />}
      <div className="members">
        {people.map((member, index) => (
          <Members key={index} name={member.name} city={member.city} />
        ))}
      </div>
      <div className="center">
        {isLoading && <h2>Loading....</h2>}

        <h1>{luckyPerson}</h1>
      </div>
      <Button text="Lucky Draw" onclick={pickPerson} />
    </div>
  );
};

export default MembersList;
