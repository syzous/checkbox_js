import React from 'react';
import ReactDOM from 'react-dom';
import { stringify } from 'querystring';



class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            listFood:[],
        }
        this.submit=this.submit.bind(this);
        this.change=this.change.bind(this);
        
    }

    submit(event){
        var s="";
        for (var i=0;i<listFood.length;i++)
        {
            s+=listFood[i]['name']+"-"+listFood[i]['check']+"\n";
        }
        alert(s);
    }

    change(e){ 
          for (var i=0;i<listFood.length;i++){
             
              if (listFood[i]['name']===e.target.name)
              {
                listFood[i]['check']= !listFood[i]['check'];
                this.forceUpdate();
                  console.log("index "+i)
                  console.log(listFood[i]['name']+"-"+listFood[i]['check'])    
                  
              }
          }
    }
    render(){
        const ListItem=listFood.map((food)=>
        <div><input type="checkbox"  name={food.name} value={food.check} checked={food.check} onChange= {this.change}  />{food.name}</div>
        );
        const a= a =>(a*3);
        const b=a(3)
        return(
            <div>
                {b} con cat cu 
            </div>
            
            
        );
    }
}
const listFood=[{name:"cam",check:false},{name:"xoai",check:true},{name:"coc",check:false}]
ReactDOM.render(<Form list={listFood}/>, document.getElementById('root'));

