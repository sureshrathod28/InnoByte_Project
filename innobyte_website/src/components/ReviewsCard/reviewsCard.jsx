import React, { useState, useRef } from 'react';
import { Card} from 'react-bootstrap';
import star from './star.svg'
import left from './left.svg'
import right from './right.svg'
import robert from './robert.png'
import christy from './christy.png'
import kim from './kim.png'
import '../ReviewsCard/reviewsCard.css'
const Dot = ({ active, onClick }) => {
  return (
    <div
      id='dots'
      className={`dot ${active ? 'active' : ''}`}
      onClick={onClick}
      style={{ marginRight: '5px', width: '10px',marginLeft:'8px', height: '10px', borderRadius: '50%', backgroundColor: active ? '#F53855' : 'gray' }}
    ></div>
  );
};

const UserProfileCard = ({ name, designation, rating, review, imageUrl,}) => {
  return (
    <div style={{marginLeft:'8%'}}>
        <Card style={{ width: '400px',height:'230px' ,minWidth: '18rem', marginRight: '20px'}}>
      <div className="d-flex align-items-center justify-content-between p-3">
       
        <div className="user-profile">
          <img src={imageUrl} alt="User" className="user-img rounded-circle" style={{width:'50px',height:'50px'}}/>
        </div>
     
        <div className="user-info" style={{ marginRight: '100px' }}>
          <div style={{fontSize:'15px'}}> <b>{name}</b></div>
          <div style={{fontSize:'12px'}}>{designation}</div>
        </div>
     
        <div className="rating">{rating}</div>
        <span><img style={{marginRight:'50px'}} src={star} alt="star" /></span>
      </div>
      <Card.Body>
        <Card.Text>{review}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

const YourComponent = () => {

  const cardsData = [
    { name: 'Viezh Robert', designation: 'Warsaw, Poland', rating: 4.5, review: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.', imageUrl: `${robert}`},
    { name: 'Yessica Christy', designation: 'Shanxi, China', rating: 4.5, review: '“I like it because I like to travel far and still can connect with high speed.”.', imageUrl: `${christy}` },
    { name: 'Kim Young Jou', designation: 'Seoul, South Korea', rating: 4.5, review: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.', imageUrl:`${kim}` },
    
   
  ];

  const [selectedCard, setSelectedCard] = useState(0);
  const cardContainerRef = useRef(null);

  const handleCardChange = (index) => {
    setSelectedCard(index);
  };

  const handleNext = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += cardContainerRef.current.offsetWidth - 40; // Adjust 40 according to your card margin
    }
    setSelectedCard((prevSelected) => Math.min(prevSelected + 1, cardsData.length - 1));
  };

  const handlePrevious = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= cardContainerRef.current.offsetWidth - 40; // Adjust 40 according to your card margin
    }
    setSelectedCard((prevSelected) => Math.max(prevSelected - 1, 0));
  };

  return (
    <div className="position-relative">
      <div
        ref={cardContainerRef}
        id="cardContainer"
        className="d-flex"
        style={{ overflowX: 'auto', scrollbarWidth: 'none', minWidth: '100vw', marginRight: '-20px', paddingLeft: '20px', marginBottom: '20px' }}
      >
        {cardsData.map((data, index) => (
          <UserProfileCard key={index} {...data} />
        ))}
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
 
  <div style={{marginLeft:'100px',display: 'flex'}}>
  <span style={{width:'40px',height:'10px',backgroundColor:'#F53855',borderRadius:'8px'}}></span>
    {cardsData.map((_, index) => (
      <Dot key={index} active={index === selectedCard} onClick={() => handleCardChange(index)} />
    ))}
  </div>

  <div style={{ position: 'relative' }} id='arrows' className="d-flex justify-content-end align-items-center">
    <img style={{ width: '45px', height: '45px', verticalAlign: 'middle',marginBottom:'25px' }} src={left} alt="leftArrow" onClick={handlePrevious} />
    <img style={{ width: '110px', height: '110px', verticalAlign: 'middle',marginRight:'80px' }} src={right} alt="rightArrow" onClick={handleNext} />
  </div>
</div>
</div>
    
  );
};

export default YourComponent;
