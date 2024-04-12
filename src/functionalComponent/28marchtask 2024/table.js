import Tabledata from "./tabledata"

const Table=()=>{
    const tabledata=[
        {
            team:"RCB Vs CSK",
            image:"https://st1.latestly.com/wp-content/uploads/2020/10/Royal-Challengers-Bangalore-vs-Chennai-Super-Kings.jpg",
            date:"22-March 2024"
        },
        {
            team:"DC Vs PBKS",
            image:"https://www.probatsman.com/wp-content/uploads/2023/05/Match-64-PBKS-vs-DC-IPL-2023.jpg",
            date:"23-March 2024"
        },
        {
            team:"KKR Vs SRH",
            image:"https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fmedia%2Ffeatureimage%2F2020%2F09%2Fdream11-FI-640x400-Match-8.png&w=1200&q=75",
            date:"24-March 2024"
        },
        {
            team:"RR Vs LSG",
            image:"https://y20india.in/wp-content/uploads/2024/03/RR-vs-LSG-IPL-2024.webp",
            date:"25-March 2024" 
        },
        {
            team:"RR Vs LSG",
            image:"https://images.thequint.com/thequint%2F2023-05%2F9af650d8-c680-4a84-940f-0155bde4d7a1%2FMumbai_Indians_vs_Gujarat_Titans_IPL_2023.jpg",
            date:"26-March 2024" 
        },
        {
            team:"PBKS Vs RCB",
            image:"https://cdn.newsnationtv.com/images/2021/10/03/pbks-vs-rcb-3434343434-41.jpg",
            date:"27-March 2024"
        }
       
    ]
    return(
          <>
{
    tabledata.map((eachObject)=>{
        return(
            <Tabledata team={eachObject.team} image={eachObject.image} date={eachObject.date}  />
        )
    })
}
          </>
    )
}
export default Table