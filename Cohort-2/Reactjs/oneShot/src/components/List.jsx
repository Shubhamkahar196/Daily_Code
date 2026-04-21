//render list 


function List(){
    const fruits = [
        {id:1,name: 'apple', calories: 95},
        {id:2,name: 'orange', calories: 45},
        {id:3,name: 'banana', calories: 55},
        {id:4,name: 'coconut', calories: 56},
        {id:5,name: 'pineapple', calories: 65}];
        
        // this is alphabetical
        // fruits.sort((a,b)=>a.name.localeCompare(b.name)); 
         
        // reverse alphabetical
        // fruits.sort((a,b)=> b.name.localeCompare(a.name))

        // numeric
        // fruits.sort((a,b)=>a.calories - b.calories);

        // reverse numeric
        // fruits.sort((a,b)=>b.calories - a.calories);

    const listItems = fruits.map(fruit=> <li key={fruit.id}>{fruit.name}: &nbsp;
    <b>{fruit.calories}</b>
    </li>)
    return(<ol>{listItems}</ol>);
}

export default List