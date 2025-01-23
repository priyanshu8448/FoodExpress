const Cards = (props) => {
  const Price = 149;
  const { image, caloriesPerServing, prepTimeMinutes, rating, name } = props.objaa;

  return (
    <div id="card">
      <img id="food_img" src={image} />
      <div id="food_detail">
        <div>{name}</div>
        <div>price {Price} ₹ only</div>
        <div>delivery time {prepTimeMinutes} min</div>
        <div>Total Calories {caloriesPerServing} kcal</div>
        <div>rating {rating}🌟</div>
      </div>
    </div>
  );
};

export const TrendingCards = (Cards)=>{
  return (props) =>{
    return(
      <>
      <div id="trending-tag">Trending</div>
      <Cards {...props}/>
      </>
    )
  }
}


export default Cards;
