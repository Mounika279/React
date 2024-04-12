import Imgdta from "./imgdata"

const Image=()=>{
    const images=[
        {
            name:"apple",
            image:"https://media.post.rvohealth.io/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg"
        },
        {
            name:"mango",
            image:"https://img.etimg.com/thumb/width-640,height-480,imgsize-105444,resizemode-75,msid-91803294/small-biz/trade/exports/insights/a-heat-waves-lamented-victim-the-mango-indias-king-of-fruits/mango-stock.jpg"
        },
        {
            name:"cherry",
            image:"https://www.hkvitals.com/blog/wp-content/uploads/2023/09/900-31.jpg"
        },
        {
            name:"orange",
            image:"https://www.allrecipes.com/thmb/y_uvjwXWAuD6T0RxaS19jFvZyFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg"
        },
        {
            name:"pineapple",
            image:"https://www.foodrepublic.com/img/gallery/take-the-sting-out-of-pineapple-with-a-salt-water-soak/intro-1684948369.jpg"
        },
        {
            name:"kiwi",
            image:"https://domf5oio6qrcr.cloudfront.net/medialibrary/6499/eac28f45-62cd-4e71-8d2d-8f9f0ba7088a.jpg"
        },
        {
            name:"dragonfruit",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLj5FfXKOFrxVjwzkFW749eqtt8HEA-Ha6N6fNx1dUXg&s"
        },
        {
            name:"watermelon",
            image:"https://hips.hearstapps.com/hmg-prod/images/fresh-ripe-watermelon-slices-on-wooden-table-royalty-free-image-1684966820.jpg?crop=1xw:0.84296xh;center,top&resize=1200:*"
        },
        {
            name:"guava",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Guava_ID.jpg/1200px-Guava_ID.jpg"
        },
        {
            name:"greengrapes",
            image:"https://www.foodrepublic.com/img/gallery/15-types-of-grapes-to-know-eat-and-drink/l-intro-1684769284.jpg"
        },
        {
            name:"blackgrapes",
            image:"https://staticg.sportskeeda.com/editor/2023/04/2ea87-16816339001247-1920.jpg"
        },
        {
            name:"litchi",
            image:"https://cdn.britannica.com/27/218927-050-E99E1D46/Lychee-fruit-tree-plant.jpg"
        }
    ]
    return(
<>
{
    images.map((eachObject)=>{
        return(
           <Imgdta name={eachObject.name} image={eachObject.image}/>
        )
    })
}
</>
    )
}
export default Image