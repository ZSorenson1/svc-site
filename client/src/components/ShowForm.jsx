import { navigate } from '@reach/router';
import React, { useEffect, useState } from 'react'

const ShowForm = props => {
    const { onSubmitProp, initShow } = props;
    const [ show, setShow ] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        setShow(initShow) 
        setLoaded(true);
        
    }, [initShow]
    )
    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp(show);
        navigate("/admin/dashboard")
    }

    const onChangeHandler = (e) => {
        if(e.target.name == "venue"){
            setShow({venue: e.target.value, city: show.city, date: show.date, price: show.price})
        }
        if(e.target.name == "city"){
            setShow({venue: show.venue, city: e.target.value, date: show.date, price: show.price})
        }
        if(e.target.name == "date"){
            setShow({venue: show.venue, city: show.city, date: dateFormatter(e.target.value), price: show.price})
        }
        if(e.target.name == "price"){
            setShow({venue: show.venue, city: show.city, date: show.date, price: e.target.value})
        }
        console.log(show);
    }

    const dateFormatter = (d) => {
        if(loaded){
        var date = new Date(d)
        var day = date.getDate()
        var month = date.getMonth()
        if(date.getDate().toString().length < 2){
            day = "0"+date.getDate().toString();
        }
        if(date.getMonth().toString().length < 2){
            month = "0"+(date.getMonth()+1).toString();
        }
        

        var output = date.getFullYear()+"-"+ month+"-"+day+"T"+date.getHours()+":"+date.getMinutes();
        console.log(output)
        return output;
        }
    }
    
    return (
        <div>
            {loaded && <form onSubmit={(e) => submitHandler(e)} onChange={(e) => onChangeHandler(e)}>
                <input type="text" name="venue" value={show.venue} />
                <input type="text" name="city" value={show.city} />
                <input type="datetime-local" name="date" value={dateFormatter(show.date)} />
                <input type="text" name="price" value={show.price} />
                <input type="submit"/>
            </form>
            }
        </div>
    )
}

export default ShowForm;