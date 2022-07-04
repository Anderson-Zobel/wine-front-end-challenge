
interface IRate {
  rating: number;
}

const RatingC = ({ rating }: IRate) => { 

  const rows = [];
  for(let i = 1; i <= rating; i +=1){
    rows.push(<img src='/star.svg' alt='rating' key={i}/>)
  }

  return (
    <div>
      {rows}
    </div>    
  )
}

export default RatingC;