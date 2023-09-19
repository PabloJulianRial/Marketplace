const ItemOverview = ({item_name, price}) =>{


    return(
        <section className="item-overview">
           <p>{item_name}</p>
           <p>{`£${price / 100}`}</p>
           
        </section>
    )
}

export default ItemOverview