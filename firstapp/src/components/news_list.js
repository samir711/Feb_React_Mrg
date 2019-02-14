import React from 'react';


//Functional component

const NewsList = (props) => {
    console.log("Data in new list",props)

    const renderNews = props.newsData.map((data, index) => {
   ;
        return(
             <div key={index}>
                <h3> {data.title}</h3>
                <div>
                {data.feed}
                </div>
            </div>
        )
    })
   
    return(
            
         <div>{renderNews}</div>

    )

}

export default NewsList;